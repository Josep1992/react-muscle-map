import React from 'react'
import { createRoot } from 'react-dom/client'
import MuscleMap from './MuscleMap.jsx'
import { MUSCLE_GROUPS } from './muscleMap.mjs'
import './sandbox.css'

const inferredMuscles = new Set(['abductors', 'adductors', 'neck'])

function MapCard({ muscle }) {
  return (
    <article className="map-card">
      <h2>{muscle} {inferredMuscles.has(muscle) && <span className="inferred-label">Estimated</span>}</h2>
      <MuscleMap primaryMuscles={[muscle]} title={`${muscle} muscle map`} />
    </article>
  )
}

function Sandbox() {
  return (
    <main>
      <header>
        <p className="eyebrow">Local visual review</p>
        <h1>Muscle map SVG gallery</h1>
        <p>Front and back views from the new SVGs. Each card highlights one muscle region.</p>
      </header>

      <p className="artwork-note">
        Neck, abductors, and adductors use estimated shapes drawn from the surrounding SVG anatomy.
      </p>

      <section className="gallery" aria-label="Muscle map previews">
        {MUSCLE_GROUPS.map((muscle) => <MapCard key={muscle} muscle={muscle} />)}
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<Sandbox />)
