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
    <div className="flex w-full max-w-xl flex-col">
      <h1 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl max-w-xl">
        Fotos profissionais para o linkedin
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg max-w-xl ">
        Transforme qualquer foto sua em um retrato profissional de alta
        qualidade usando inteligência artificial. Perfeito para seu perfil do
        LinkedIn.
      </p>

      <div className="mt-8 flex gap-4 justify-center lg:justify-start items-center">
        {/* index identifica a posição: 0, 1 (meio), 2 */}
        {examplePhotos.map((photo, index) => (
          <div
            key={photo.src}
            className={cn(
              "relative overflow-hidden rounded-2xl bg-muted",
              // Foto do meio (masculino) um pouco maior; laterais no tamanho padrão
              index === 1
                ? "size-44 lg:size-64"
                : "size-36 lg:size-55",

              // Usando a logica de posicao dentro do array para rotacionar as fotos das laterais
              index === 0 && "-rotate-2",
              index === 2 && "rotate-2",
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"

            />
          </div>
        ))}
      </div>
    </div>
  )
}
