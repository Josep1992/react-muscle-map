import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Palms-Up_Dumbbell_Wrist_Curl_Over_A_Bench"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze([])

export default function ExercisePalmsUpDumbbellWristCurlOverABenchMuscleMap({ title = "Palms-Up Dumbbell Wrist Curl Over A Bench muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
