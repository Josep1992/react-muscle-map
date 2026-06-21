import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Step-up_with_Knee_Raise"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["hamstrings","quadriceps"])

export default function ExerciseStepUpWithKneeRaiseMuscleMap({ title = "Step-up with Knee Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
