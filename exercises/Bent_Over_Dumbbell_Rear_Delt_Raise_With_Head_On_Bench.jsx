import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bent_Over_Dumbbell_Rear_Delt_Raise_With_Head_On_Bench"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseBentOverDumbbellRearDeltRaiseWithHeadOnBenchMuscleMap({ title = "Bent Over Dumbbell Rear Delt Raise With Head On Bench muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
