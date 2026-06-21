import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Smith_Machine_Close-Grip_Bench_Press"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseSmithMachineCloseGripBenchPressMuscleMap({ title = "Smith Machine Close-Grip Bench Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
