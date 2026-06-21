import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Upright_Row_-_With_Bands"
export const primaryMuscles = Object.freeze(["traps"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseUprightRowWithBandsMuscleMap({ title = "Upright Row - With Bands muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
