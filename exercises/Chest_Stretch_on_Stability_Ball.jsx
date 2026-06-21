import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Chest_Stretch_on_Stability_Ball"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseChestStretchOnStabilityBallMuscleMap({ title = "Chest Stretch on Stability Ball muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
