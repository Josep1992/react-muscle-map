import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Low-Pulley_Deltoid_Raise"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseStandingLowPulleyDeltoidRaiseMuscleMap({ title = "Standing Low-Pulley Deltoid Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
