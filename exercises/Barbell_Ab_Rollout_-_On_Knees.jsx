import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Ab_Rollout_-_On_Knees"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["lower back","shoulders"])

export default function ExerciseBarbellAbRolloutOnKneesMuscleMap({ title = "Barbell Ab Rollout - On Knees muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
