import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Good_Morning_off_Pins"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["abdominals","glutes","lower back"])

export default function ExerciseGoodMorningOffPinsMuscleMap({ title = "Good Morning off Pins muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
