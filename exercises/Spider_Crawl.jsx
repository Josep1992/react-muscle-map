import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Spider_Crawl"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["chest","shoulders","triceps"])

export default function ExerciseSpiderCrawlMuscleMap({ title = "Spider Crawl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
