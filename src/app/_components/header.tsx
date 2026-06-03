"use client"

import { Menu, Sparkles, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Exemplos", href: "#exemplos" },
] as const

export function Header() {
  // Estado do menu mobile: abre/fecha o painel de navegação em telas pequenas
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 h-14 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:h-16">
      <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2"
          onClick={closeMobileMenu}
        >
          <Sparkles className="size-5 shrink-0" aria-hidden />
          <span className="truncate text-sm font-bold tracking-tight sm:text-base">
            Linkfotos AI
          </span>
        </Link>

        {/* Navegação desktop: oculta abaixo de md (768px) */}
        <nav
          className="hidden items-center gap-6 md:flex lg:gap-8"
          aria-label="Navegação principal"
        >
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

        {/* Botão hambúrguer: visível apenas no mobile */}
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? (
            <X className="size-5" aria-hidden />
          ) : (
            <Menu className="size-5" aria-hidden />
          )}
        </button>
      </div>

      {/* Painel do menu mobile: empilha os links abaixo do header */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-background px-4 py-3 md:hidden"
          aria-label="Navegação mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  onClick={closeMobileMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
