import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Hip_Circles_prone"
export const primaryMuscles = Object.freeze(["abductors"])
export const secondaryMuscles = Object.freeze(["adductors"])

export default function ExerciseHipCirclesProneMuscleMap({ title = "Hip Circles (prone) muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
