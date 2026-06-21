import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Snatch_from_Blocks"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","forearms","glutes","hamstrings","lower back","shoulders","traps","triceps"])

export default function ExerciseSnatchFromBlocksMuscleMap({ title = "Snatch from Blocks muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
