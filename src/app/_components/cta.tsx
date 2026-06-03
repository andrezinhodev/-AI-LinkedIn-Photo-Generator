"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { UploadPhoto } from "./upload-photo"

export function Cta() {
  const [hasPhoto, setHasPhoto] = useState(false)

  return (
    // Card de upload: encostado à direita da coluna em telas grandes
    <div className="flex w-full max-w-md flex-col items-center px-0 sm:px-2 lg:max-w-sm lg:shrink-0 xl:max-w-md">
      <h2 className="text-lg font-bold tracking-tight sm:text-xl">
        Envie sua foto
      </h2>
      <p className="mt-2 max-w-sm text-center text-sm leading-relaxed text-muted-foreground">
        Escolha uma foto sua para transformar em um retrato profissional.
        Funciona melhor com fotos onde seu rosto está bem visível.
      </p>

      <div className="mt-5 w-full sm:mt-6">
        <UploadPhoto onFileChange={(file) => setHasPhoto(!!file)} />
      </div>

      {hasPhoto && (
        // Botão com altura mínima de toque (~44px) recomendada para mobile
        <Button
          type="button"
          size="lg"
          className="mt-4 h-11 min-h-[44px] w-full touch-manipulation sm:mt-5"
        >
          Gerar foto profissional
        </Button>
      )}
    </div>
  )
}
