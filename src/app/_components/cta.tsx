"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { UploadPhoto } from "./upload-photo"

export function Cta() {
  const [hasPhoto, setHasPhoto] = useState(false)

  return (
    <div className="flex w-full max-w-md flex-col items-center">
      <h2 className="text-xl font-bold tracking-tight">Envie sua foto</h2>
      <p className="mt-2 max-w-sm text-center text-sm leading-relaxed text-muted-foreground">
        Escolha uma foto sua para transformar em um retrato profissional.
        Funciona melhor com fotos onde seu rosto está bem visível.
      </p>

      <div className="mt-6 w-full">
        <UploadPhoto onFileChange={(file) => setHasPhoto(!!file)} />
      </div>

      {hasPhoto && (
        <Button type="button" size="lg" className="mt-4 h-11 w-full">
          Gerar foto profissional
        </Button>
      )}
    </div>
  )
}
