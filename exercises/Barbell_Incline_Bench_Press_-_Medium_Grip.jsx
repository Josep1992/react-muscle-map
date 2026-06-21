import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Incline_Bench_Press_-_Medium_Grip"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseBarbellInclineBenchPressMediumGripMuscleMap({ title = "Barbell Incline Bench Press - Medium Grip muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
