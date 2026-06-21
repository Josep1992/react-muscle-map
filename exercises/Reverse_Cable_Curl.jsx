import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Reverse_Cable_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseReverseCableCurlMuscleMap({ title = "Reverse Cable Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
