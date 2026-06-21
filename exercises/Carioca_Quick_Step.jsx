import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Carioca_Quick_Step"
export const primaryMuscles = Object.freeze(["adductors"])
export const secondaryMuscles = Object.freeze(["abdominals","abductors","calves","glutes","hamstrings","quadriceps"])

export default function ExerciseCariocaQuickStepMuscleMap({ title = "Carioca Quick Step muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
