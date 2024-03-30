import { Activity } from "../types";
import { categories } from "../data/category";
import { useMemo, Dispatch } from "react";
import { PencilSquareIcon, XCircleIcon} from '@heroicons/react/24/outline'
import { ActivityActions } from "../reducers/activity-reducer";

type ActivityListProp={
    activities:Activity[]
    dispatch: Dispatch<ActivityActions>
}

export default function ActivityList({activities, dispatch}: ActivityListProp) {

    const categoryName= useMemo(()=>(category:Activity['category'])=>categories.map(cat=>cat.id===category ? cat.name : ''),[activities])
    const emptyActivities= useMemo(()=>activities.length===0,[activities])
    
  return (
    <>
        <h2 className=" text-4xl font-semibold text-lime-500 text-center">Food and Activities</h2>
        {emptyActivities?<p className="text-center text-lime-500 font-semibold text-l mt-5">No Calories Counted Yet...</p>:
            activities.map(activity =>(
            <div 
            key={activity.id}
            className="px-5 py-10 bg-lime-600 mt-5 flex justify-between"
            >
                <div className=" space-y-2 relative">
                    <p className={` absolute -top-8 -left-8 px-10 py-2 text-lime-50 uppercase ${activity.category === 1 ? 'bg-lime-500': 'bg-orange-400'}`}>
                        {categoryName(activity.category)}
                    </p>
                    {/* <p>{activity.category===1?categories[0].name:categories[1].name}</p> */}
                    <p className=" text-2xl font-semibold pt-5 text-lime-50 uppercase">{activity.name}</p>
                    <p className="font-bold text-4xl">{activity.calories}{' '}<span className="text-xl">kcal</span></p>
                </div>
                <div className="flex gap-5 items-center">
                    <button
                        onClick={()=>dispatch({type:'set-activeId', payload:{id : activity.id}})}
                    >
                        <PencilSquareIcon
                            className=" h-8 w-8 text-lime-50"
                        />
                    </button>
                    <button
                        onClick={()=>dispatch({type:'delete-activity', payload:{id : activity.id}})}
                    >
                        <XCircleIcon
                            className=" h-8 w-8 text-red-700"
                        />
                    </button>
                </div>
            </div>)
        )}
    </>
  )
}
