import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseBarbellCurlMuscleMap({ title = "Barbell Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
