import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <p>Here you can find all the meals!</p>
      <p>
        <Link href="/meals/post1">Meal-1</Link>
      </p>
      <p>
        <Link href="/meals/post2">Meal-2</Link>
      </p>
    </main>
  );
}