import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Band_Good_Morning"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["glutes","lower back"])

export default function ExerciseBandGoodMorningMuscleMap({ title = "Band Good Morning muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
