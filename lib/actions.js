"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals";

export async function shareMeals(prevState, formData) {
  function invalidText(text) {
    return !text || text.trim() === "";
  }

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  // Server Side validation of input data as in client side required can be deleted by developertols

  if (
    invalidText(meal.title) ||
    invalidText(meal.summary) ||
    invalidText(meal.instructions) ||
    invalidText(meal.creator) ||
    invalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid Input",
    };
  }

  //   console.log(meal);
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
