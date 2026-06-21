import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kettlebell_Turkish_Get-Up_Lunge_style"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["abdominals","hamstrings","quadriceps","triceps"])

export default function ExerciseKettlebellTurkishGetUpLungeStyleMuscleMap({ title = "Kettlebell Turkish Get-Up (Lunge style) muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
