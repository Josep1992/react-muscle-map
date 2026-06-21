import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bear_Crawl_Sled_Drags"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseBearCrawlSledDragsMuscleMap({ title = "Bear Crawl Sled Drags muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
