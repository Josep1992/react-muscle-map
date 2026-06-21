import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Decline_Close-Grip_Bench_To_Skull_Crusher"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseDeclineCloseGripBenchToSkullCrusherMuscleMap({ title = "Decline Close-Grip Bench To Skull Crusher muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
