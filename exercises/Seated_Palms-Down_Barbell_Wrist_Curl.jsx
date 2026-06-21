import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Palms-Down_Barbell_Wrist_Curl"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedPalmsDownBarbellWristCurlMuscleMap({ title = "Seated Palms-Down Barbell Wrist Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
