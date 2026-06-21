import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Sledgehammer_Swings"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["calves","forearms","lats","middle back","shoulders"])

export default function ExerciseSledgehammerSwingsMuscleMap({ title = "Sledgehammer Swings muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
