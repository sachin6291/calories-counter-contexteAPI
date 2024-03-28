import { Activity } from "../types"

export type ActivityActions=
    {type: 'save-activity', payload:{newActivity: Activity}} |
    {type: 'set-activeId', payload:{id: Activity['id']} }


export type ActivityState={
    activities: Activity[]
    activeId: Activity['id']
}

export const initialState : ActivityState={
    activities: [], 
    activeId: ''
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
        case 'set-activeId':
            return{
                ...state,
                activeId: action.payload.id
            }
    }
    return state
}