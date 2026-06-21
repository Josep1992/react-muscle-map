import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Bent-Over_Rear_Delt_Raise"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedBentOverRearDeltRaiseMuscleMap({ title = "Seated Bent-Over Rear Delt Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
