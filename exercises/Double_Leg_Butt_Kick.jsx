import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Double_Leg_Butt_Kick"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","glutes","hamstrings"])

export default function ExerciseDoubleLegButtKickMuscleMap({ title = "Double Leg Butt Kick muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
