import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Stiff_Leg_Barbell_Good_Morning"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings"])

export default function ExerciseStiffLegBarbellGoodMorningMuscleMap({ title = "Stiff Leg Barbell Good Morning muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
