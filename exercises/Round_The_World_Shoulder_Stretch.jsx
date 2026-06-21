import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Round_The_World_Shoulder_Stretch"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["biceps","chest"])

export default function ExerciseRoundTheWorldShoulderStretchMuscleMap({ title = "Round The World Shoulder Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
