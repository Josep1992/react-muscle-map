import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Hammer_Grip_Incline_DB_Bench_Press"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseHammerGripInclineDBBenchPressMuscleMap({ title = "Hammer Grip Incline DB Bench Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
