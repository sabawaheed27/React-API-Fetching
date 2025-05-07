"use client";

import { MealType } from "@/utils/types"
import { useState, useEffect } from "react";
import Meal from "@/components/Meal"


export default function Home() {
  // first we need to put null, when fetching will be finish, because of async function the state become MealType

  const [meals, setMeals] = useState<MealType[] | null>(null)
  const [search, setSearch] = useState<string>("")

  const fetchMeal = async (value: string): Promise<void> => {
    try {

      const API_URL: string = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
      const response = await fetch(API_URL);
      const data = await response.json();

      console.log(data.meals);
      setMeals(data.meals || []); //fallback to empty array if no results


    } catch (error) {
      console.log(`Something went wrong: ${error}`)
    }
  }
  const handleSearch = (e: React.FormEvent) => { //It gives you TypeScript type safety.
    e.preventDefault();// prevents the page from reloading
    if (search.trim()) { //removes whitespace from both ends of a string.
      fetchMeal(search.trim())
    }
  }

  useEffect(() => {
    fetchMeal("chicken")//default load
  }, [])//Runs only once when the component mounts.

  return (
    <div className="bg-gray-300 flex flex-col grow p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Recipe Finder</h1>

      {/* Search form */}
      <form onSubmit={handleSearch} className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Search for a meal..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded w-full max-w-sm"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2  rounded">
          Search
        </button>
      </form>

      {meals && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} {...meal} />
          ))}
        </div>
      )}

    </div>


  )
}
