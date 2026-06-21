import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Svend_Press"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["forearms","shoulders","triceps"])

export default function ExerciseSvendPressMuscleMap({ title = "Svend Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
