import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lateral_Raise_-_With_Bands"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLateralRaiseWithBandsMuscleMap({ title = "Lateral Raise - With Bands muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
