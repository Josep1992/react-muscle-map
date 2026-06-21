import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Linear_3-Part_Start_Technique"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","quadriceps"])

export default function ExerciseLinear3PartStartTechniqueMuscleMap({ title = "Linear 3-Part Start Technique muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
