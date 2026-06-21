import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Guillotine_Bench_Press"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseBarbellGuillotineBenchPressMuscleMap({ title = "Barbell Guillotine Bench Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
