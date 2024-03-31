import { useMemo } from "react"
import type { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type CalorieTrackerProp={
    activities:Activity[]
}
export default function CalorieTracker({activities}: CalorieTrackerProp) {

  const caloriesConsumed=useMemo(()=>activities.reduce((total, activity)=>activity.category === 1 ? total + activity.calories: total, 0), [activities])
  
  const execiseDone= useMemo(()=>activities.reduce((total, activity)=>activity.category === 2 ? total + activity.calories: total,0),[activities])
  
  const netCalories = useMemo(()=>caloriesConsumed-execiseDone,[activities])

  return (
    <>
        <h2 className=" text-3xl font-semibold text-lime-50 text-center">Calories Counted</h2>
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">

          <CalorieDisplay
            calories={caloriesConsumed}
            text='Consumed'
          />
          <CalorieDisplay
            calories={execiseDone}
            text='Exercised'
          />

          <CalorieDisplay
            calories={netCalories}
            text='Total'
          />
          
        </div>
    </>
  )
}
