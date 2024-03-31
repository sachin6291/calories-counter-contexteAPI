type CalorieDisplayProps={
    calories: number
    text:string
}


export default function CalorieDisplay({calories,text}:CalorieDisplayProps) {
  return (
    <p className=" text-lime-50 rounded-full grid grid-cols-1 gap-3 text-center">
        <span className=" font-bold text-5xl text-gray-800">{calories}<span className=" text-lg">Kcal</span></span>{text}</p>
  )
}
