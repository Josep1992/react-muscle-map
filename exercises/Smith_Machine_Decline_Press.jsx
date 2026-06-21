import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Smith_Machine_Decline_Press"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseSmithMachineDeclinePressMuscleMap({ title = "Smith Machine Decline Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
