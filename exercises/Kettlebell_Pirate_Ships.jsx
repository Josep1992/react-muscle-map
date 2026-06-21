import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kettlebell_Pirate_Ships"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["abdominals"])

export default function ExerciseKettlebellPirateShipsMuscleMap({ title = "Kettlebell Pirate Ships muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
