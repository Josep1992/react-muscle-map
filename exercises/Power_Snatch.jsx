import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Power_Snatch"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","glutes","lower back","quadriceps","shoulders","traps","triceps"])

export default function ExercisePowerSnatchMuscleMap({ title = "Power Snatch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
