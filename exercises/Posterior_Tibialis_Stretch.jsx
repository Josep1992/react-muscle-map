import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Posterior_Tibialis_Stretch"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze([])

export default function ExercisePosteriorTibialisStretchMuscleMap({ title = "Posterior Tibialis Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
