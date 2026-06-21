import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Reverse_Plate_Curls"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseReversePlateCurlsMuscleMap({ title = "Reverse Plate Curls muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
