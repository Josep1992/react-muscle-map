import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Step_Ups"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseDumbbellStepUpsMuscleMap({ title = "Dumbbell Step Ups muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
