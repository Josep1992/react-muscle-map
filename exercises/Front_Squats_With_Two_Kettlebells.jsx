import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Front_Squats_With_Two_Kettlebells"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes"])

export default function ExerciseFrontSquatsWithTwoKettlebellsMuscleMap({ title = "Front Squats With Two Kettlebells muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
