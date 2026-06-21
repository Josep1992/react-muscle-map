import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Band_Hip_Adductions"
export const primaryMuscles = Object.freeze(["adductors"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseBandHipAdductionsMuscleMap({ title = "Band Hip Adductions muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
