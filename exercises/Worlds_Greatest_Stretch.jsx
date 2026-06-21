import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Worlds_Greatest_Stretch"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","glutes","quadriceps"])

export default function ExerciseWorldsGreatestStretchMuscleMap({ title = "World's Greatest Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
