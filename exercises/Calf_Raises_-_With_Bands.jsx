import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Calf_Raises_-_With_Bands"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCalfRaisesWithBandsMuscleMap({ title = "Calf Raises - With Bands muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
