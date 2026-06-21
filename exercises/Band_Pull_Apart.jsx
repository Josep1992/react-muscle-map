import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Band_Pull_Apart"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["middle back","traps"])

export default function ExerciseBandPullApartMuscleMap({ title = "Band Pull Apart muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
