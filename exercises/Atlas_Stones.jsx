import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Atlas_Stones"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["abdominals","adductors","biceps","calves","forearms","glutes","hamstrings","middle back","quadriceps","traps"])

export default function ExerciseAtlasStonesMuscleMap({ title = "Atlas Stones muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
