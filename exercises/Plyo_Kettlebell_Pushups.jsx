import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Plyo_Kettlebell_Pushups"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExercisePlyoKettlebellPushupsMuscleMap({ title = "Plyo Kettlebell Pushups muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
