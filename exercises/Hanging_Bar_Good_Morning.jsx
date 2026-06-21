import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Hanging_Bar_Good_Morning"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["abdominals","glutes","lower back"])

export default function ExerciseHangingBarGoodMorningMuscleMap({ title = "Hanging Bar Good Morning muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
