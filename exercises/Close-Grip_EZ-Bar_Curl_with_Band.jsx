import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Close-Grip_EZ-Bar_Curl_with_Band"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseCloseGripEZBarCurlWithBandMuscleMap({ title = "Close-Grip EZ-Bar Curl with Band muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
