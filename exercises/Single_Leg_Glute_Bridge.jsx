import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Single_Leg_Glute_Bridge"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["hamstrings"])

export default function ExerciseSingleLegGluteBridgeMuscleMap({ title = "Single Leg Glute Bridge muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
