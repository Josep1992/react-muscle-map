import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Alternate_Hammer_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseAlternateHammerCurlMuscleMap({ title = "Alternate Hammer Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
