import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Hug_A_Ball"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["calves","glutes"])

export default function ExerciseHugABallMuscleMap({ title = "Hug A Ball muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
