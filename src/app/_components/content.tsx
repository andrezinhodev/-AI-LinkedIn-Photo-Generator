"use client"

import { Cta } from "./cta"
import { Header } from "./header"
import { Hero } from "./hero"

export function HomeContent() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid min-h-[calc(100vh-200px)] items-center gap-8 lg:grid-cols-2 lg:gap-x-12">
          <div className="flex items-center justify-center lg:justify-start">
            <Hero />
          </div>
          <div className="flex items-center justify-center">
            <Cta />
          </div>
        </div>
      </main>
    </>
  )
}