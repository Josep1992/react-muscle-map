import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Side_Neck_Stretch"
export const primaryMuscles = Object.freeze(["neck"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSideNeckStretchMuscleMap({ title = "Side Neck Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
