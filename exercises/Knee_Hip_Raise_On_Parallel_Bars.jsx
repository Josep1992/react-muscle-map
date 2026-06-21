import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Knee_Hip_Raise_On_Parallel_Bars"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseKneeHipRaiseOnParallelBarsMuscleMap({ title = "Knee/Hip Raise On Parallel Bars muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
