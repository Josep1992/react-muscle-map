import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Chest_And_Front_Of_Shoulder_Stretch"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseChestAndFrontOfShoulderStretchMuscleMap({ title = "Chest And Front Of Shoulder Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
