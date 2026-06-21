import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Palms-Down_Wrist_Curl_Over_A_Bench"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze([])

export default function ExercisePalmsDownWristCurlOverABenchMuscleMap({ title = "Palms-Down Wrist Curl Over A Bench muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
