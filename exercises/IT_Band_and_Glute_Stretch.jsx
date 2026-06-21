import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "IT_Band_and_Glute_Stretch"
export const primaryMuscles = Object.freeze(["abductors"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseITBandAndGluteStretchMuscleMap({ title = "IT Band and Glute Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
