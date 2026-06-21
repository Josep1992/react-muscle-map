import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Close-Grip_EZ-Bar_Press"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseCloseGripEZBarPressMuscleMap({ title = "Close-Grip EZ-Bar Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
