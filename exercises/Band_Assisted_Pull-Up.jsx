import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Band_Assisted_Pull-Up"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["abdominals","forearms","middle back"])

export default function ExerciseBandAssistedPullUpMuscleMap({ title = "Band Assisted Pull-Up muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
