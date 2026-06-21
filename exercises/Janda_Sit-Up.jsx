import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Janda_Sit-Up"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseJandaSitUpMuscleMap({ title = "Janda Sit-Up muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
