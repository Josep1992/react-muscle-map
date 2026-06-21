import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dips_-_Triceps_Version"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseDipsTricepsVersionMuscleMap({ title = "Dips - Triceps Version muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
