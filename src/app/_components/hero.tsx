import Image from "next/image"
import { cn } from "@/lib/utils"

// Array que contem minhas fotos
const examplePhotos = [
  {
    src: "/foto1.png",
    alt: "Exemplo de retrato profissional feminino",
  },
  {
    src: "/foto2.png",
    alt: "Exemplo de retrato profissional masculino",
  },
  {
    src: "/foto3.png",
    alt: "Exemplo de retrato profissional feminino",
  },
]

export function Hero() {
  return (
    <div
      id="exemplos"
      className="flex w-full max-w-xl flex-col items-center text-center sm:items-start sm:text-left"
    >
      {/* Tipografia responsiva: menor no mobile, maior em telas largas */}
      <h1 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        Fotos profissionais para o linkedin
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base lg:text-lg">
        Transforme qualquer foto sua em um retrato profissional de alta
        qualidade usando inteligência artificial. Perfeito para seu perfil do
        LinkedIn.
      </p>

      {/* Galeria contida na coluna esquerda — sem max-w-none em lg para não invadir o card */}
      <div className="mt-6 flex w-full max-w-[min(100%,20rem)] items-center justify-center gap-2 sm:mt-8 sm:max-w-md sm:gap-3 sm:justify-center md:max-w-lg lg:max-w-xl lg:justify-start lg:gap-3 xl:max-w-2xl xl:gap-4">
        {examplePhotos.map((photo, index) => (
          <div
            key={photo.src}
            className={cn(
              "relative shrink-0 overflow-hidden rounded-2xl bg-muted",
              // Tamanhos menores em lg; maiores só em xl quando há mais espaço
              index === 1
                ? "size-28 sm:size-36 md:size-40 lg:size-48 xl:size-56"
                : "size-24 sm:size-32 md:size-36 lg:size-40 xl:size-48",
              // Rotação leve nas fotos laterais (preservada no mobile)
              index === 0 && "-rotate-2",
              index === 2 && "rotate-2",
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 112px, (max-width: 1024px) 176px, 256px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
