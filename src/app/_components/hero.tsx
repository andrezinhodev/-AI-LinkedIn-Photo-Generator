import Image from "next/image"

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

      <div className="mt-8 flex gap-3 justify-center items-center">
        {examplePhotos.map((photo) => (
          <div
            key={photo.src}
            className="relative size-36 overflow-hidden rounded-2xl bg-muted lg:size-55"
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
