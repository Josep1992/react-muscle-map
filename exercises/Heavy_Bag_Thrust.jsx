import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Heavy_Bag_Thrust"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["abdominals","shoulders","triceps"])

export default function ExerciseHeavyBagThrustMuscleMap({ title = "Heavy Bag Thrust muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
