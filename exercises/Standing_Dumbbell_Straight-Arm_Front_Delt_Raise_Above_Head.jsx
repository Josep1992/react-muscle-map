import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Dumbbell_Straight-Arm_Front_Delt_Raise_Above_Head"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseStandingDumbbellStraightArmFrontDeltRaiseAboveHeadMuscleMap({ title = "Standing Dumbbell Straight-Arm Front Delt Raise Above Head muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
