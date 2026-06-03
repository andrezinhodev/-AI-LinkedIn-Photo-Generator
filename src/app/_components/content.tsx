"use client"

import { Cta } from "./cta"
import { Header } from "./header"
import { Hero } from "./hero"

export function HomeContent() {
  return (
    <>
      <Header />
      {/* Layout principal: coluna única no mobile, duas colunas a partir de lg */}
      <main className="container mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:py-12">
        <div
          id="como-funciona"
          className="grid items-center gap-8 sm:gap-10 lg:min-h-[calc(100vh-12rem)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-x-16 lg:gap-y-16 xl:gap-x-20"
        >
          {/* min-w-0 + pr evita que a galeria de fotos invada a coluna do upload */}
          <div className="flex w-full min-w-0 items-center justify-center lg:justify-start lg:pr-6 xl:pr-10">
            <Hero />
          </div>
          <div className="flex w-full min-w-0 items-center justify-center lg:justify-end lg:pl-2">
            <Cta />
          </div>
        </div>
      </main>
    </>
  )
}
