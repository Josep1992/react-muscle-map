import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kettlebell_Windmill"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings","shoulders","triceps"])

export default function ExerciseKettlebellWindmillMuscleMap({ title = "Kettlebell Windmill muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
