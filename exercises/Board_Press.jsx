import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Board_Press"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","forearms","lats","shoulders"])

export default function ExerciseBoardPressMuscleMap({ title = "Board Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
