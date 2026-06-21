import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Oblique_Crunches_-_On_The_Floor"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseObliqueCrunchesOnTheFloorMuscleMap({ title = "Oblique Crunches - On The Floor muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
