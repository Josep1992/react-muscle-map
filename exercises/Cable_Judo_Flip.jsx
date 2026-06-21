import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_Judo_Flip"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCableJudoFlipMuscleMap({ title = "Cable Judo Flip muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
