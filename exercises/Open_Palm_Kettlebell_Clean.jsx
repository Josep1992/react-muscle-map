import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Open_Palm_Kettlebell_Clean"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["glutes","lower back","quadriceps","shoulders"])

export default function ExerciseOpenPalmKettlebellCleanMuscleMap({ title = "Open Palm Kettlebell Clean muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
