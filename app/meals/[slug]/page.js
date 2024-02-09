import React from "react";

export default function MealDynamic({ params }) {
  return (
    <main>
      <div>MealDynamic</div>
      <p>{params.slug}</p>
    </main>
  );
}
