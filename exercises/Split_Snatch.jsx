import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Split_Snatch"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","forearms","glutes","hamstrings","lower back","quadriceps","shoulders","traps","triceps"])

export default function ExerciseSplitSnatchMuscleMap({ title = "Split Snatch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
