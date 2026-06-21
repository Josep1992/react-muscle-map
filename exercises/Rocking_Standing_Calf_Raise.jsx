import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Rocking_Standing_Calf_Raise"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseRockingStandingCalfRaiseMuscleMap({ title = "Rocking Standing Calf Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
