import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kneeling_Forearm_Stretch"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseKneelingForearmStretchMuscleMap({ title = "Kneeling Forearm Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
