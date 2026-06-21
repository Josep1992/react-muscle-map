import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kettlebell_Pass_Between_The_Legs"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings","shoulders"])

export default function ExerciseKettlebellPassBetweenTheLegsMuscleMap({ title = "Kettlebell Pass Between The Legs muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
