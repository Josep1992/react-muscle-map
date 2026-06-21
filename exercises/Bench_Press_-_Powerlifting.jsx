import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bench_Press_-_Powerlifting"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","forearms","lats","shoulders"])

export default function ExerciseBenchPressPowerliftingMuscleMap({ title = "Bench Press - Powerlifting muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
