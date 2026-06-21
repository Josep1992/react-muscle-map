import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Cable_Wood_Chop"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseStandingCableWoodChopMuscleMap({ title = "Standing Cable Wood Chop muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
