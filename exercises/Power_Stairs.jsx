import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Power_Stairs"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["adductors","calves","glutes","lower back","quadriceps","shoulders","traps"])

export default function ExercisePowerStairsMuscleMap({ title = "Power Stairs muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
