import { User, IdCard, GitBranch } from "lucide-react"
import type { Dict } from "@/lib/i18n"
import { DiagramSection } from "./diagram-section"

export function DiagramIsolation({ t }: { t: Dict }) {
  const d = t.tech.diagram2

  const diagram = (
    // Swap this block with your own cartoon illustration later.
    <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
      <div className="flex flex-col items-center gap-3">
        <span className="flex size-16 items-center justify-center rounded-2xl border border-border bg-secondary text-foreground">
          <User className="size-7" aria-hidden="true" />
        </span>
        <span className="text-xs font-medium text-muted-foreground">{d.you}</span>
        <GitBranch className="size-5 rotate-90 text-muted-foreground/60" aria-hidden="true" />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {/* Shop A — blue/primary */}
        <div className="flex flex-col items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 p-4 text-center">
          <IdCard className="size-7 text-primary" aria-hidden="true" />
          <span className="text-[11px] text-muted-foreground">{d.shopA}</span>
          <span className="font-mono text-xs font-semibold text-primary">{d.cardA}</span>
        </div>
        {/* Shop B — red/destructive */}
        <div className="flex flex-col items-center gap-2 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-center">
          <IdCard className="size-7 text-destructive" aria-hidden="true" />
          <span className="text-[11px] text-muted-foreground">{d.shopB}</span>
          <span className="font-mono text-xs font-semibold text-destructive">{d.cardB}</span>
        </div>
      </div>
    </div>
  )

  return (
    <DiagramSection chip={d.chip} title={d.title} body={d.body} diagram={diagram} reverse>
      <figure className="mt-6 overflow-hidden rounded-xl border border-border bg-[oklch(0.14_0.025_255)]">
        <figcaption className="border-b border-border/70 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {d.formulaLabel}
        </figcaption>
        <pre className="overflow-x-auto px-4 py-4 text-sm">
          <code className="font-mono text-primary">{d.formula}</code>
        </pre>
      </figure>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.formulaNote}</p>
    </DiagramSection>
  )
}
