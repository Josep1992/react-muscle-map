import type { CSSProperties, ReactElement, SVGProps } from 'react'

import type { ExerciseId } from './generated.js'

export type { ExerciseId } from './generated.js'

export type MuscleGroup =
  | 'abdominals'
  | 'abductors'
  | 'adductors'
  | 'biceps'
  | 'calves'
  | 'chest'
  | 'forearms'
  | 'glutes'
  | 'hamstrings'
  | 'lats'
  | 'lower back'
  | 'middle back'
  | 'neck'
  | 'quadriceps'
  | 'shoulders'
  | 'traps'
  | 'triceps'

export type MuscleState = 'inactive' | 'primary' | 'secondary'

export interface ExerciseTargets {
  readonly name: string
  readonly primaryMuscles: readonly MuscleGroup[]
  readonly secondaryMuscles: readonly MuscleGroup[]
}

export interface MuscleMapProps
  extends Omit<SVGProps<SVGSVGElement>, 'className' | 'id' | 'title'> {
  readonly primaryMuscles?: readonly MuscleGroup[]
  readonly secondaryMuscles?: readonly MuscleGroup[]
  readonly className?: string
  readonly title?: string
  readonly idPrefix?: string
  readonly style?: CSSProperties
}

export interface ExerciseMuscleMapProps
  extends Omit<MuscleMapProps, 'primaryMuscles' | 'secondaryMuscles'> {
  readonly exerciseId: ExerciseId
}

export const MUSCLE_GROUPS: readonly MuscleGroup[]
export const exerciseTargets: Readonly<Record<ExerciseId, ExerciseTargets>>

export function MuscleMap(props: MuscleMapProps): ReactElement
export function ExerciseMuscleMap(props: ExerciseMuscleMapProps): ReactElement
export function getExerciseTargets(exerciseId: ExerciseId): ExerciseTargets
export function getMuscleState(options: {
  readonly muscle: MuscleGroup
  readonly primaryMuscles?: readonly MuscleGroup[]
  readonly secondaryMuscles?: readonly MuscleGroup[]
}): MuscleState
export function toMuscleId(muscle: MuscleGroup): string
export function validateMuscleGroups(muscles: readonly string[]): string[]
