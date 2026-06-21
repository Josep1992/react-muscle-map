import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Body-Up"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["abdominals","forearms"])

export default function ExerciseBodyUpMuscleMap({ title = "Body-Up muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
