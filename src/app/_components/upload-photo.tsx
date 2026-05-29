"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Upload, X } from "lucide-react"
import { cn } from "@/lib/utils"

const ACCEPTED_TYPES = ["image/png", "image/jpeg", "image/webp"] as const

type UploadPhotoProps = {
  onFileChange?: (file: File | null) => void
}

export function UploadPhoto({ onFileChange }: UploadPhotoProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const previewUrlRef = useRef<string | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const revokePreview = useCallback(() => {
    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current)
      previewUrlRef.current = null
    }
  }, [])

  const setFile = useCallback(
    (file: File | null) => {
      revokePreview()

      if (!file) {
        setPreviewUrl(null)
        onFileChange?.(null)
        return
      }

      if (!ACCEPTED_TYPES.includes(file.type as (typeof ACCEPTED_TYPES)[number])) {
        return
      }

      const url = URL.createObjectURL(file)
      previewUrlRef.current = url
      setPreviewUrl(url)
      onFileChange?.(file)
    },
    [onFileChange, revokePreview]
  )

  useEffect(() => {
    return () => revokePreview()
  }, [revokePreview])

  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation()
    setFile(null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0] ?? null
    setFile(selected)
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    setIsDragging(false)
    const dropped = event.dataTransfer.files?.[0] ?? null
    setFile(dropped)
  }

  const openFilePicker = () => inputRef.current?.click()

  return (
    <div className="w-full">
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_TYPES.join(",")}
        className="sr-only"
        onChange={handleInputChange}
        aria-label="Selecionar foto"
      />

      <div
        role="button"
        tabIndex={0}
        onClick={openFilePicker}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            openFilePicker()
          }
        }}
        onDragOver={(event) => {
          event.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={cn(
          "relative flex min-h-[220px] w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-colors",
          isDragging
            ? "border-foreground/40 bg-muted/50"
            : "border-border bg-muted/20 hover:border-foreground/25 hover:bg-muted/40"
        )}
      >
        {previewUrl ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previewUrl}
              alt="Pré-visualização da foto selecionada"
              className="absolute inset-0 size-full rounded-2xl object-cover"
            />
            <button
              type="button"
              onClick={handleClear}
              className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition-colors hover:bg-background"
              aria-label="Remover foto e escolher outra"
            >
              <X className="size-4" />
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-3 px-6 py-8 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-muted">
              <Upload className="size-5 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium text-foreground">
              Arraste sua foto aqui ou clique para selecionar
            </p>
            <p className="text-xs text-muted-foreground">PNG, JPG ou WEBP</p>
          </div>
        )}
      </div>
    </div>
  )
}
