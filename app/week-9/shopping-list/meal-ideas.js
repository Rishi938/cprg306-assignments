'use client';
import { useEffect, useState } from 'react';

async function fetchMealIdeas(ingredient) {
  const cleaned = ingredient.trim().toLowerCase();
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleaned}`);
  const data = await res.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient).then(setMeals);
    }
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Meal Ideas for "{ingredient}"</h2>
      <ul className="list-disc pl-5">
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}
