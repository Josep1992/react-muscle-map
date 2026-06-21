import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Ab_Rollout"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["lower back","shoulders"])

export default function ExerciseBarbellAbRolloutMuscleMap({ title = "Barbell Ab Rollout muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
