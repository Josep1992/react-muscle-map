import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Back_Flyes_-_With_Bands"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["middle back","triceps"])

export default function ExerciseBackFlyesWithBandsMuscleMap({ title = "Back Flyes - With Bands muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
