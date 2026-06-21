import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Smith_Machine_Hip_Raise"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSmithMachineHipRaiseMuscleMap({ title = "Smith Machine Hip Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
