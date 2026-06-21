import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Press_Sit-Up"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["chest","shoulders","triceps"])

export default function ExercisePressSitUpMuscleMap({ title = "Press Sit-Up muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
