import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Calf_Stretch_Hands_Against_Wall"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCalfStretchHandsAgainstWallMuscleMap({ title = "Calf Stretch Hands Against Wall muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
