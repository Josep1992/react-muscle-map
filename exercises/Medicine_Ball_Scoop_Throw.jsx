import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Medicine_Ball_Scoop_Throw"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["abdominals","hamstrings","quadriceps"])

export default function ExerciseMedicineBallScoopThrowMuscleMap({ title = "Medicine Ball Scoop Throw muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
