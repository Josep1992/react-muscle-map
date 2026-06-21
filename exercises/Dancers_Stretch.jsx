import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dancers_Stretch"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["abductors","glutes"])

export default function ExerciseDancersStretchMuscleMap({ title = "Dancer's Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
