
import Image from "next/image";
import { MealType } from "@/utils/types";

const Meal = ({ idMeal, strMeal, strMealThumb, strCategory, strArea }: MealType) => {
  return (
    <div key={idMeal} className="bg-white p-4 rounded shadow text-center">
      <h2 className="text-xl font-semibold mb-2">{strMeal}</h2>
      <Image
        src={strMealThumb}
        alt={strMeal}
        width={300}
        height={200}
        className="rounded-md"
      />
      <p className="mt-2 text-sm text-gray-700">
        {strCategory} - {strArea}
      </p>
    </div>
  );
};

export default Meal;
