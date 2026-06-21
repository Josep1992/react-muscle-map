import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_Bent_Leg_Groin"
export const primaryMuscles = Object.freeze(["adductors"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLyingBentLegGroinMuscleMap({ title = "Lying Bent Leg Groin muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
