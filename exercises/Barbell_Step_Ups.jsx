import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Step_Ups"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings","quadriceps"])

export default function ExerciseBarbellStepUpsMuscleMap({ title = "Barbell Step Ups muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
