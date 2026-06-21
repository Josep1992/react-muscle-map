import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Split_Clean"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","forearms","glutes","hamstrings","lower back","shoulders","traps"])

export default function ExerciseSplitCleanMuscleMap({ title = "Split Clean muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
