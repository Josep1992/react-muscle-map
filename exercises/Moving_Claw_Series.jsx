import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Moving_Claw_Series"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","quadriceps"])

export default function ExerciseMovingClawSeriesMuscleMap({ title = "Moving Claw Series muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
