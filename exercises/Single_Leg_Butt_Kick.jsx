import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Single_Leg_Butt_Kick"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","hamstrings"])

export default function ExerciseSingleLegButtKickMuscleMap({ title = "Single Leg Butt Kick muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
