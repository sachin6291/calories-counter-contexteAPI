import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList";

function App() {
  
  
  const [state, dispatch]=useReducer(activityReducer, initialState)
  console.log(state.activeId);
  return (
    <>
      <header className=" bg-lime-600 py-3">
        <div className=" max-w-4xl mx-auto flex justify-between">
          <div className="flex">
          <img src='/calories-svgrepo-black.svg' alt="logo" className=" h-7 mr-4"/>
          <h1 className="text-center text-lg font-bold text-white uppercase">Calories Counter</h1>
          </div>
        </div>
       
      </header>
      <section className=" bg-lime-500 py-20 px-5 mt-1">
        <div className=" max-w-4xl mx-auto">
          <Form
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList
          activities={state.activities}
          dispatch={dispatch}
        />
      </section>
      
    </>
  )
}

export default App
