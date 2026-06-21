import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Ball_Leg_Curl"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","glutes"])

export default function ExerciseBallLegCurlMuscleMap({ title = "Ball Leg Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
