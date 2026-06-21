import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kettlebell_Sumo_High_Pull"
export const primaryMuscles = Object.freeze(["traps"])
export const secondaryMuscles = Object.freeze(["adductors","glutes","hamstrings","quadriceps","shoulders"])

export default function ExerciseKettlebellSumoHighPullMuscleMap({ title = "Kettlebell Sumo High Pull muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
