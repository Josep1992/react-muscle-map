import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_Close-Grip_Bar_Curl_On_High_Pulley"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLyingCloseGripBarCurlOnHighPulleyMuscleMap({ title = "Lying Close-Grip Bar Curl On High Pulley muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
