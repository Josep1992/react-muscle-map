import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_Wrist_Curl"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCableWristCurlMuscleMap({ title = "Cable Wrist Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
