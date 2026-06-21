import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kettlebell_Hang_Clean"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","glutes","lower back","shoulders","traps"])

export default function ExerciseKettlebellHangCleanMuscleMap({ title = "Kettlebell Hang Clean muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
