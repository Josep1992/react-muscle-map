import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Smith_Machine_Pistol_Squat"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseSmithMachinePistolSquatMuscleMap({ title = "Smith Machine Pistol Squat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
