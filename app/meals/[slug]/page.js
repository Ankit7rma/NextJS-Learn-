import React from "react";

export default function MealDynamic({ params }) {
  return (
    <main>
      <p>{params.slug}</p>
    </main>
  );
}
