import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Alternate_Heel_Touchers"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseAlternateHeelTouchersMuscleMap({ title = "Alternate Heel Touchers muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
