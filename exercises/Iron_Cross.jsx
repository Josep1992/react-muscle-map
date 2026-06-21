import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Iron_Cross"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["chest","glutes","hamstrings","lower back","quadriceps","traps"])

export default function ExerciseIronCrossMuscleMap({ title = "Iron Cross muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
