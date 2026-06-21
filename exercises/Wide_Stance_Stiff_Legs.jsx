import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Wide_Stance_Stiff_Legs"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["adductors","glutes","lower back"])

export default function ExerciseWideStanceStiffLegsMuscleMap({ title = "Wide Stance Stiff Legs muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
