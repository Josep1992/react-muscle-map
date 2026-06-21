import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Close-Grip_Push-Up_off_of_a_Dumbbell"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["abdominals","chest","shoulders"])

export default function ExerciseCloseGripPushUpOffOfADumbbellMuscleMap({ title = "Close-Grip Push-Up off of a Dumbbell muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
