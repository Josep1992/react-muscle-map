import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Groin_and_Back_Stretch"
export const primaryMuscles = Object.freeze(["adductors"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseGroinAndBackStretchMuscleMap({ title = "Groin and Back Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
