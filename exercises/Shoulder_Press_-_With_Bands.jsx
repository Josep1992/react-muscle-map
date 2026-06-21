import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Shoulder_Press_-_With_Bands"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseShoulderPressWithBandsMuscleMap({ title = "Shoulder Press - With Bands muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
