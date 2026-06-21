import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Flutter_Kicks"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["hamstrings"])

export default function ExerciseFlutterKicksMuscleMap({ title = "Flutter Kicks muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
