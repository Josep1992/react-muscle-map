import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Vertical_Swing"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["glutes","quadriceps","shoulders"])

export default function ExerciseVerticalSwingMuscleMap({ title = "Vertical Swing muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
