import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Hip_Circles"
export const primaryMuscles = Object.freeze(["abductors"])
export const secondaryMuscles = Object.freeze(["adductors"])

export default function ExerciseStandingHipCirclesMuscleMap({ title = "Standing Hip Circles muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
