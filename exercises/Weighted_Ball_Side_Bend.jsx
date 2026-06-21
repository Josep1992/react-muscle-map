import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Weighted_Ball_Side_Bend"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseWeightedBallSideBendMuscleMap({ title = "Weighted Ball Side Bend muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
