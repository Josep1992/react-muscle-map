import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Pallof_Press"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["chest","shoulders","triceps"])

export default function ExercisePallofPressMuscleMap({ title = "Pallof Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
