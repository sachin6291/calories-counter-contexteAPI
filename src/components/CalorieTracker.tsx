import type { Activity } from "../types"

type CalorieTrackerProp={
    activities:Activity[]
}
export default function CalorieTracker({activities}: CalorieTrackerProp) {
  return (
    <>
        <h2 className=" text-3xl font-semibold text-lime-50 text-center">Calories Counted</h2>
    </>
  )
}
