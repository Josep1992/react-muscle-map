import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lunge_Pass_Through"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","glutes","quadriceps"])

export default function ExerciseLungePassThroughMuscleMap({ title = "Lunge Pass Through muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
