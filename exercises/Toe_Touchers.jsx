import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Toe_Touchers"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseToeTouchersMuscleMap({ title = "Toe Touchers muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
