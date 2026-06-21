import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Close-Grip_EZ_Bar_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseCloseGripEZBarCurlMuscleMap({ title = "Close-Grip EZ Bar Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
