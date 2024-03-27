import { Activity } from "../types"

export type ActivityActions={
    type: 'save-activity', payload:{newActivity: Activity}
}

type ActivityState={
    activities: Activity[]
}

export const initialState : ActivityState={
    activities: []
}

export const activityReducer=(
    state: ActivityState = initialState,
    action: ActivityActions
)=>{
    switch (action.type) {
        case 'save-activity':
            // The code written here updates the state
            return {...state,
                activities: [...state.activities, action.payload.newActivity]}
            
    }
    return state
}