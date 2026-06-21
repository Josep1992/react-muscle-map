import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Smith_Machine_Calf_Raise"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSmithMachineCalfRaiseMuscleMap({ title = "Smith Machine Calf Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
