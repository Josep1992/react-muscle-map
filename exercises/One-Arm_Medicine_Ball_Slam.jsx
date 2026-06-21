import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One-Arm_Medicine_Ball_Slam"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["lats","shoulders"])

export default function ExerciseOneArmMedicineBallSlamMuscleMap({ title = "One-Arm Medicine Ball Slam muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
