import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Hip_Thrust"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["calves","hamstrings"])

export default function ExerciseBarbellHipThrustMuscleMap({ title = "Barbell Hip Thrust muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
