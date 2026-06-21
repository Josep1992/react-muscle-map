import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Calf_Raise_On_A_Dumbbell"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCalfRaiseOnADumbbellMuscleMap({ title = "Calf Raise On A Dumbbell muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
