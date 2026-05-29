import { Sparkles } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Exemplos", href: "#exemplos" },
] as const

export function Header() {
  return (
    <header className="h-16 border-b border-border bg-background">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="size-5 shrink-0" aria-hidden />
          <span className="text-sm font-bold tracking-tight">Linkfotos AI</span>
        </Link>

        <nav className="flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-normal text-foreground transition-colors hover:text-muted-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
