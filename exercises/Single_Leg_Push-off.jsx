import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Single_Leg_Push-off"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","hamstrings"])

export default function ExerciseSingleLegPushOffMuscleMap({ title = "Single Leg Push-off muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
