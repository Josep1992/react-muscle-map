import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lower_Back_Curl"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLowerBackCurlMuscleMap({ title = "Lower Back Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
