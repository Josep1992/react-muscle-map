import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Finger_Curls"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseFingerCurlsMuscleMap({ title = "Finger Curls muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
