import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Rickshaw_Carry"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze(["abdominals","calves","glutes","hamstrings","lower back","quadriceps","traps"])

export default function ExerciseRickshawCarryMuscleMap({ title = "Rickshaw Carry muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
