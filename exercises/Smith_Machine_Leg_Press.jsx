import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Smith_Machine_Leg_Press"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseSmithMachineLegPressMuscleMap({ title = "Smith Machine Leg Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
