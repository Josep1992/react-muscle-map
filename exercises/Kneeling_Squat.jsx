import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kneeling_Squat"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["abdominals","hamstrings","lower back"])

export default function ExerciseKneelingSquatMuscleMap({ title = "Kneeling Squat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
