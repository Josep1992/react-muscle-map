import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_Russian_Twists"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCableRussianTwistsMuscleMap({ title = "Cable Russian Twists muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
