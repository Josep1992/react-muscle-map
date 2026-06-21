import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dynamic_Back_Stretch"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseDynamicBackStretchMuscleMap({ title = "Dynamic Back Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
