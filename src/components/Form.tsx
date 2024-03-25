import { categories } from "../data/category"

export default function Form() {
  return (
    <form className=" space-y-5 bg-gray-800 shadow p-10 ">
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className=" font-semibold text-white">Category:</label>
            <select className="border-2 border-lime-600 p-2  w-full bg-lime-50" id="category">
                {categories.map(category=>(
                    <option key={category.id}
                    value={category.id}>
                        {category.name}
                    </option>))}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="activity" className=" font-semibold text-white">Activity:</label>
            <input
                type="text"
                id="activity"
                className=" border-2 border-lime-600 p-2 w-full bg-lime-50"
                placeholder="Ex. Food, Orange Juice, Salad, Exercise, Weights, Bicycle"
            />
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className=" font-semibold text-white">Calories:</label>
            <input
                type="number"
                id="calories"
                className=" border-2 border-lime-600 p-2 w-full bg-lime-50"
                placeholder="Calories e.g. 300 or 500"
            />
        </div>

        <input
            type="submit"
            className=" bg-white hover:bg-gray-800 hover:text-white border-2 border-lime-600 w-full p-2 uppercase font-semibold text-black cursor-pointer"
            value='Save'
        />
    </form>
  )
}
