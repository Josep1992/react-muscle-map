import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Ab_Crunch_Machine"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseAbCrunchMachineMuscleMap({ title = "Ab Crunch Machine muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
