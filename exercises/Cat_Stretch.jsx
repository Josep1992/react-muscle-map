import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cat_Stretch"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["middle back","traps"])

export default function ExerciseCatStretchMuscleMap({ title = "Cat Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
