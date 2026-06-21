import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Overhead_Stretch"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["chest","forearms","lats","triceps"])

export default function ExerciseOverheadStretchMuscleMap({ title = "Overhead Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
