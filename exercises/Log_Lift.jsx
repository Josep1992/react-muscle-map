import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Log_Lift"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["abdominals","chest","glutes","hamstrings","lower back","middle back","quadriceps","traps","triceps"])

export default function ExerciseLogLiftMuscleMap({ title = "Log Lift muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
