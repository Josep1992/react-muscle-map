import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Pelvic_Tilt"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["glutes"])

export default function ExerciseStandingPelvicTiltMuscleMap({ title = "Standing Pelvic Tilt muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
