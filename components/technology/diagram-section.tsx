import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface DiagramSectionProps {
  chip: string
  title: string
  body: string
  diagram: ReactNode
  /** When true, the diagram renders on the right (text left) on desktop. */
  reverse?: boolean
  children?: ReactNode
}

export function DiagramSection({ chip, title, body, diagram, reverse, children }: DiagramSectionProps) {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
        {/* Diagram */}
        <div className={cn("order-1", reverse ? "lg:order-2" : "lg:order-1")}>{diagram}</div>

        {/* Text */}
        <div className={cn("order-2", reverse ? "lg:order-1" : "lg:order-2")}>
          <span className="inline-block rounded-md bg-secondary px-2.5 py-1 font-mono text-xs tracking-wide text-primary">
            {chip}
          </span>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">{title}</h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{body}</p>
          {children}
        </div>
      </div>
    </section>
  )
}
