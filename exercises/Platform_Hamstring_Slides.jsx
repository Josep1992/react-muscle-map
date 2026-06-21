import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Platform_Hamstring_Slides"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["glutes"])

export default function ExercisePlatformHamstringSlidesMuscleMap({ title = "Platform Hamstring Slides muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
