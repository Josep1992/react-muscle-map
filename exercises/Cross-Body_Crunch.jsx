import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cross-Body_Crunch"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCrossBodyCrunchMuscleMap({ title = "Cross-Body Crunch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
