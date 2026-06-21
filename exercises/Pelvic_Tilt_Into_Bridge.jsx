import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Pelvic_Tilt_Into_Bridge"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze([])

export default function ExercisePelvicTiltIntoBridgeMuscleMap({ title = "Pelvic Tilt Into Bridge muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
