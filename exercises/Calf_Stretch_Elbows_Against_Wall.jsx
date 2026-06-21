import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Calf_Stretch_Elbows_Against_Wall"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCalfStretchElbowsAgainstWallMuscleMap({ title = "Calf Stretch Elbows Against Wall muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
