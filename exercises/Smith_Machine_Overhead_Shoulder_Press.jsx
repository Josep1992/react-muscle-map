import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Smith_Machine_Overhead_Shoulder_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseSmithMachineOverheadShoulderPressMuscleMap({ title = "Smith Machine Overhead Shoulder Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
