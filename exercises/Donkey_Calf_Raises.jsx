import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Donkey_Calf_Raises"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseDonkeyCalfRaisesMuscleMap({ title = "Donkey Calf Raises muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
