import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Jackknife_Sit-Up"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseJackknifeSitUpMuscleMap({ title = "Jackknife Sit-Up muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
