import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Band_Skull_Crusher"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseBandSkullCrusherMuscleMap({ title = "Band Skull Crusher muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
