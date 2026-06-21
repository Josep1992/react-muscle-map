import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Power_Clean"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","forearms","glutes","lower back","middle back","quadriceps","shoulders","traps","triceps"])

export default function ExercisePowerCleanMuscleMap({ title = "Power Clean muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
