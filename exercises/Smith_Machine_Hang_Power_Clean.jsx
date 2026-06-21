import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Smith_Machine_Hang_Power_Clean"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["glutes","lower back","quadriceps","shoulders","traps"])

export default function ExerciseSmithMachineHangPowerCleanMuscleMap({ title = "Smith Machine Hang Power Clean muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
