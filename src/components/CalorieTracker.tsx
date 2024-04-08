import CalorieDisplay from "./CalorieDisplay"
import { useActivity } from "../hook/useActivity"


export default function CalorieTracker() {

  const {caloriesConsumed, execiseDone, netCalories}= useActivity()
  
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
