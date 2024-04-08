import { ReactNode, createContext, useReducer, Dispatch, useMemo } from "react";
import { ActivityState, activityReducer, initialState, ActivityActions } from "../reducers/activity-reducer";
import type { Activity } from "../types";
import { categories } from "../data/category";
type ActivityProviderProps = {
    children: ReactNode
}

type ActivityContextProps={
    state:ActivityState
    dispatch:Dispatch<ActivityActions>
    caloriesConsumed:number
    execiseDone:number
    netCalories:number
    categoryName: (category:Activity['category']) => string[],
    emptyActivities: boolean

}
export const ActivityContext = createContext<ActivityContextProps>({} as ActivityContextProps)

export const ActivityProvider = ({children}:ActivityProviderProps)=>{

    const [state, dispatch]=useReducer( activityReducer, initialState)

    const {activities} = state
    //calories counted
    const caloriesConsumed=useMemo(()=>activities.reduce((total, activity)=>activity.category === 1 ? total + activity.calories: total, 0), [activities])
  
    const execiseDone= useMemo(()=>activities.reduce((total, activity)=>activity.category === 2 ? total + activity.calories: total,0),[activities])
  
    const netCalories = useMemo(()=>caloriesConsumed-execiseDone,[activities])

    //activity list

    const categoryName= useMemo(()=>(category:Activity['category'])=>categories.map(cat=>cat.id===category ? cat.name : ''),[activities])
    const emptyActivities= useMemo(()=>activities.length===0,[activities])
    return(
        <ActivityContext.Provider
            value={{ 
                state,
                dispatch,
                caloriesConsumed,
                execiseDone,
                netCalories,
                categoryName,
                emptyActivities
            }}
        >{children}
        </ActivityContext.Provider>
    )
}