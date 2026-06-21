import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Front_Raise_And_Pullover"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["lats","shoulders","triceps"])

export default function ExerciseFrontRaiseAndPulloverMuscleMap({ title = "Front Raise And Pullover muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
