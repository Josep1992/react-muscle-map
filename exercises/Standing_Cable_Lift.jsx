import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Cable_Lift"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseStandingCableLiftMuscleMap({ title = "Standing Cable Lift muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
