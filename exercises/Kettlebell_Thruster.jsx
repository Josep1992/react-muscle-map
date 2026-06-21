import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kettlebell_Thruster"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["quadriceps","triceps"])

export default function ExerciseKettlebellThrusterMuscleMap({ title = "Kettlebell Thruster muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
