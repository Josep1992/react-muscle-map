import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Recumbent_Bike"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseRecumbentBikeMuscleMap({ title = "Recumbent Bike muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
