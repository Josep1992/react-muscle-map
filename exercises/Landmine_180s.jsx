import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Landmine_180s"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["glutes","lower back","shoulders"])

export default function ExerciseLandmine180sMuscleMap({ title = "Landmine 180's muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
