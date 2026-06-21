import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Power_Snatch_from_Blocks"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","forearms","glutes","hamstrings","lower back","shoulders","traps","triceps"])

export default function ExercisePowerSnatchFromBlocksMuscleMap({ title = "Power Snatch from Blocks muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
