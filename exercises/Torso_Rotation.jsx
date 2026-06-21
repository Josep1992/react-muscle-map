import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Torso_Rotation"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseTorsoRotationMuscleMap({ title = "Torso Rotation muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
