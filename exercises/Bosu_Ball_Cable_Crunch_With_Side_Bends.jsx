import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bosu_Ball_Cable_Crunch_With_Side_Bends"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseBosuBallCableCrunchWithSideBendsMuscleMap({ title = "Bosu Ball Cable Crunch With Side Bends muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
