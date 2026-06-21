import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Muscle_Snatch"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["glutes","lower back","quadriceps","shoulders","triceps"])

export default function ExerciseMuscleSnatchMuscleMap({ title = "Muscle Snatch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
