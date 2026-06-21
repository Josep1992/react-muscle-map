import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Incline_Barbell_Triceps_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseInclineBarbellTricepsExtensionMuscleMap({ title = "Incline Barbell Triceps Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
