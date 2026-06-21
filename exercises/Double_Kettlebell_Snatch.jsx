import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Double_Kettlebell_Snatch"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings","quadriceps"])

export default function ExerciseDoubleKettlebellSnatchMuscleMap({ title = "Double Kettlebell Snatch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
