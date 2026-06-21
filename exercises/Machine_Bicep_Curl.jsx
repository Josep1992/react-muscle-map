import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Machine_Bicep_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseMachineBicepCurlMuscleMap({ title = "Machine Bicep Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
