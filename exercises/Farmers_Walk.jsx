import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Farmers_Walk"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze(["abdominals","glutes","hamstrings","lower back","quadriceps","traps"])

export default function ExerciseFarmersWalkMuscleMap({ title = "Farmer's Walk muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
