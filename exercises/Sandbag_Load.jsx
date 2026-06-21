import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Sandbag_Load"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abdominals","biceps","calves","forearms","glutes","hamstrings","lower back","middle back","shoulders","traps"])

export default function ExerciseSandbagLoadMuscleMap({ title = "Sandbag Load muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
