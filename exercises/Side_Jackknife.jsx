import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Side_Jackknife"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSideJackknifeMuscleMap({ title = "Side Jackknife muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
