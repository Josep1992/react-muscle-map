import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Rope_Climb"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","forearms","middle back","shoulders"])

export default function ExerciseRopeClimbMuscleMap({ title = "Rope Climb muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
