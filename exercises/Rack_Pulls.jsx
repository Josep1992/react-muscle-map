import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Rack_Pulls"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["forearms","glutes","hamstrings","traps"])

export default function ExerciseRackPullsMuscleMap({ title = "Rack Pulls muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
