import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Advanced_Kettlebell_Windmill"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings","shoulders"])

export default function ExerciseAdvancedKettlebellWindmillMuscleMap({ title = "Advanced Kettlebell Windmill muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
