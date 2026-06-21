import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Hamstring_and_Calf_Stretch"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseStandingHamstringAndCalfStretchMuscleMap({ title = "Standing Hamstring and Calf Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
