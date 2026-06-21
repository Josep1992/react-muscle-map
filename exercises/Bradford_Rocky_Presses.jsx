import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bradford_Rocky_Presses"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseBradfordRockyPressesMuscleMap({ title = "Bradford/Rocky Presses muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
