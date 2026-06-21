import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Elevated_Back_Lunge"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings"])

export default function ExerciseElevatedBackLungeMuscleMap({ title = "Elevated Back Lunge muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
