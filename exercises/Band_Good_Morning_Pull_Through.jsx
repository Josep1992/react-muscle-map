import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Band_Good_Morning_Pull_Through"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["glutes","lower back"])

export default function ExerciseBandGoodMorningPullThroughMuscleMap({ title = "Band Good Morning (Pull Through) muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
