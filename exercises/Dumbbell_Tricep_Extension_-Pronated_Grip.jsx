import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Tricep_Extension_-Pronated_Grip"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseDumbbellTricepExtensionPronatedGripMuscleMap({ title = "Dumbbell Tricep Extension -Pronated Grip muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
