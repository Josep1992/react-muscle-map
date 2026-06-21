import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Backward_Medicine_Ball_Throw"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseBackwardMedicineBallThrowMuscleMap({ title = "Backward Medicine Ball Throw muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
