import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One-Arm_Open_Palm_Kettlebell_Clean"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["forearms","glutes","lower back","quadriceps","shoulders"])

export default function ExerciseOneArmOpenPalmKettlebellCleanMuscleMap({ title = "One-Arm Open Palm Kettlebell Clean muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
