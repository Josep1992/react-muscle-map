import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Prowler_Sprint"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","chest","glutes","quadriceps","shoulders"])

export default function ExerciseProwlerSprintMuscleMap({ title = "Prowler Sprint muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
