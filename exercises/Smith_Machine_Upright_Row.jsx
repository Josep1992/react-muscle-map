import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Smith_Machine_Upright_Row"
export const primaryMuscles = Object.freeze(["traps"])
export const secondaryMuscles = Object.freeze(["biceps","middle back","shoulders"])

export default function ExerciseSmithMachineUprightRowMuscleMap({ title = "Smith Machine Upright Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
