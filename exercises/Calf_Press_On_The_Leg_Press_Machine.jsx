import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Calf_Press_On_The_Leg_Press_Machine"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCalfPressOnTheLegPressMachineMuscleMap({ title = "Calf Press On The Leg Press Machine muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
