import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Rack_Pull_with_Bands"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["forearms","glutes","hamstrings","quadriceps","traps"])

export default function ExerciseRackPullWithBandsMuscleMap({ title = "Rack Pull with Bands muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
