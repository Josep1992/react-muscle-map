import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Floor_Press_with_Chains"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseFloorPressWithChainsMuscleMap({ title = "Floor Press with Chains muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
