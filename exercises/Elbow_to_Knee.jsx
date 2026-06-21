import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Elbow_to_Knee"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseElbowToKneeMuscleMap({ title = "Elbow to Knee muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
