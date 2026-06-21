import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Side_Bend"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseDumbbellSideBendMuscleMap({ title = "Dumbbell Side Bend muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
