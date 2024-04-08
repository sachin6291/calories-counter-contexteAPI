import { useState, ChangeEvent, FormEvent, useEffect} from "react"
import {v4 as uuidv4} from 'uuid'
import { categories } from "../data/category"
import { Activity } from "../types"
import { useActivity } from "../hook/useActivity"


const initialState: Activity ={
    category:1,
    name:'',
    calories:0,
    id: uuidv4()
}

export default function Form() {

    const {state, dispatch}= useActivity()

    const[activity, setActivity]= useState<Activity>(initialState)

    useEffect(()=>{
        if(state.activeId){
            const selectedActivity= state.activities.filter(activ=>activ.id === state.activeId)[0]
            setActivity(selectedActivity);
            
        }
    },[state.activeId])
    
    const handleChange=(e: ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLSelectElement>)=>{
        const isNumberFeild=['category', 'calories'].includes(e.target.id)
        setActivity({
            ...activity,
            [e.target.id]: isNumberFeild? +e.target.value : e.target.value
        })
        
    }

    const isValidActivity=()=>{
        const {name, calories}= activity
                
        return name.trim() !== '' && calories > 0
    }

    const handleSubmit =(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        
        dispatch({type:'save-activity', payload:{newActivity : activity}})

        setActivity({
            ...initialState, 
            id: uuidv4()
        })
        
    }

  return (
    <form className=" space-y-5 bg-gray-800 shadow p-10 " onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className=" font-semibold text-white">Category:</label>
            <select 
                className="border-2 border-lime-600 p-2  w-full bg-lime-50" 
                id="category" 
                value={activity.category}
                onChange={handleChange}>

                {categories.map(category=>(
                    <option key={category.id}
                    value={category.id}>
                        {category.name}
                    </option>))}

            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name" className=" font-semibold text-white">Activity:</label>
            <input
                type="text"
                id="name"
                className=" border-2 border-lime-600 p-2 w-full bg-lime-50"
                placeholder="Ex. Food, Orange Juice, Salad, Exercise, Weights, Bicycle"
                value={activity.name}
                onChange={handleChange}
            />
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className=" font-semibold text-white">Calories:</label>
            <input
                type="number"
                id="calories"
                className=" border-2 border-lime-600 p-2 w-full bg-lime-50"
                placeholder="Calories e.g. 300 or 500"
                value={activity.calories}
                onChange={handleChange}
            />
        </div>

        <input
            type="submit"
            className=" bg-lime-50 hover:bg-gray-800 hover:text-lime-50 border-2 border-lime-600 w-full p-2 uppercase font-semibold text-black cursor-pointer disabled:opacity-10 disabled:hover:bg-lime-50 disabled:hover:text-black"
            value={activity.category===1?'Save Food': 'Save Exercise'}
            disabled={!isValidActivity()}
        />
    </form>
  )
}
