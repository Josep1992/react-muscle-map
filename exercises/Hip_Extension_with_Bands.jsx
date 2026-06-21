import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Hip_Extension_with_Bands"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["hamstrings"])

export default function ExerciseHipExtensionWithBandsMuscleMap({ title = "Hip Extension with Bands muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
