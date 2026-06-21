# React Muscle Map

Themeable inline SVG muscle maps for all 873 exercises in `free-exercise-db`.

The package also includes the complete image-free exercise dataset as aggregate and per-exercise JSON exports.

## Installation

```sh
npm install react-muscle-map
```

React 18 or newer is required as a peer dependency.

## Quick start

Import the component and stylesheet:

```jsx
import { ExerciseMuscleMap } from 'react-muscle-map'
import 'react-muscle-map/styles.css'

export function MusclePreview() {
  return <ExerciseMuscleMap exerciseId="Barbell_Full_Squat" />
}
```

## Exercise ID API

Use the dataset-aware component when an exercise ID is available. TypeScript accepts only known exercise IDs.

```jsx
import { ExerciseMuscleMap } from 'react-muscle-map'
import 'react-muscle-map/styles.css'

<ExerciseMuscleMap exerciseId="Barbell_Full_Squat" />
```

Unknown IDs throw a clear runtime error for untyped JavaScript consumers.

## Tree-shakable exercise components

All exercise-specific wrappers are available as subpath imports. These imports avoid including the complete 873-entry registry.

```jsx
import BarbellFullSquatMuscleMap from 'react-muscle-map/exercises/Barbell_Full_Squat'

<BarbellFullSquatMuscleMap />
```

## Custom muscle targets

```jsx
import { MuscleMap } from 'react-muscle-map'
import 'react-muscle-map/styles.css'

export function ExerciseMuscles({ exercise }) {
  return (
    <MuscleMap
      primaryMuscles={exercise.primaryMuscles}
      secondaryMuscles={exercise.secondaryMuscles}
      title={`${exercise.name} muscle map`}
    />
  )
}
```

## Theming

Override the CSS variables from any theme boundary:

```css
.dark-theme .muscle-map {
  --muscle-primary-color: #a78bfa;
  --muscle-secondary-color: #6d5cae;
  --muscle-inactive-color: #4b5563;
  --muscle-body-color: #1f2937;
  --muscle-separator-color: #111827;
}
```

Available variables:

- `--muscle-primary-color`
- `--muscle-secondary-color`
- `--muscle-inactive-color`
- `--muscle-body-color`
- `--muscle-separator-color`

Every muscle group has a readable instance-scoped ID, a stable `data-muscle` value, and a `data-state` of `primary`, `secondary`, or `inactive`. The SVG remains inline so application themes can style it without regenerating assets.

## Public API

- `ExerciseMuscleMap`
- `MuscleMap`
- `exerciseTargets`
- `getExerciseTargets`
- `MUSCLE_GROUPS`
- `getMuscleState`
- `validateMuscleGroups`
- `toMuscleId`

The package includes ESM, CommonJS, source maps, CSS, and TypeScript declarations.

## Datasets

Import the complete image-free dataset:

```js
import exercises from 'react-muscle-map/datasets/exercises.json'
```

Import one exercise without loading the complete dataset:

```js
import barbellFullSquat from 'react-muscle-map/datasets/exercises/Barbell_Full_Squat'
```

The integrity manifest is also exported:

```js
import datasetManifest from 'react-muscle-map/datasets/manifest.json'
```

TypeScript projects importing JSON should enable `resolveJsonModule`. Runtime JSON import syntax depends on the target runtime; bundlers generally handle these exports directly.

## Attribution

The exercise metadata distributed with this library is derived from [free-exercise-db](https://github.com/yuhonas/free-exercise-db), an open public-domain exercise dataset maintained by [yuhonas](https://github.com/yuhonas) and its contributors.

`free-exercise-db` is released under the [Unlicense](https://github.com/yuhonas/free-exercise-db/blob/main/LICENSE.md). This library preserves that public-domain license and does not claim ownership of the upstream exercise names, instructions, classifications, or muscle metadata.

Please retain this attribution when redistributing the packaged datasets.

## Development

Run the framework-independent validation with:

```sh
node generated/muscle-map/muscleMap.test.mjs
```

Regenerate the complete component and dataset set with:

```sh
npm run generate
npm run check:generated
```

Build and validate the publishable package with:

```sh
npm install
npm run prepack
```
