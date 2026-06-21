import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One-Arm_Flat_Bench_Dumbbell_Flye"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseOneArmFlatBenchDumbbellFlyeMuscleMap({ title = "One-Arm Flat Bench Dumbbell Flye muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
