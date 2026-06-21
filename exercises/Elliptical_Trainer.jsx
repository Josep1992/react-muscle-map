import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Elliptical_Trainer"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseEllipticalTrainerMuscleMap({ title = "Elliptical Trainer muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
