import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kettlebell_Turkish_Get-Up_Squat_style"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["abdominals","calves","hamstrings","quadriceps","triceps"])

export default function ExerciseKettlebellTurkishGetUpSquatStyleMuscleMap({ title = "Kettlebell Turkish Get-Up (Squat style) muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
