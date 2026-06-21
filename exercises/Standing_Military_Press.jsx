import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Military_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseStandingMilitaryPressMuscleMap({ title = "Standing Military Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
