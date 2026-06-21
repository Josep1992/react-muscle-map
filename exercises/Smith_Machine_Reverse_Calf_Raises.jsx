import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Smith_Machine_Reverse_Calf_Raises"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSmithMachineReverseCalfRaisesMuscleMap({ title = "Smith Machine Reverse Calf Raises muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
