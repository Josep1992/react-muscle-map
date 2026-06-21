import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Behind_Head_Chest_Stretch"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseBehindHeadChestStretchMuscleMap({ title = "Behind Head Chest Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
