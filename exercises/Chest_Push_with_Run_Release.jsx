import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Chest_Push_with_Run_Release"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["abdominals","shoulders","triceps"])

export default function ExerciseChestPushWithRunReleaseMuscleMap({ title = "Chest Push with Run Release muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
