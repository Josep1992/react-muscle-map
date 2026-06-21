import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Drag_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseDragCurlMuscleMap({ title = "Drag Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
