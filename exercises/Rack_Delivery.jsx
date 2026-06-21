import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Rack_Delivery"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["forearms","traps"])

export default function ExerciseRackDeliveryMuscleMap({ title = "Rack Delivery muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
