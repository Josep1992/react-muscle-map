import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Ankle_On_The_Knee"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseAnkleOnTheKneeMuscleMap({ title = "Ankle On The Knee muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
