import { User, KeyRound, Timer, Store, ChevronRight, QrCode } from "lucide-react"
import type { Dict } from "@/lib/i18n"
import { DiagramSection } from "./diagram-section"

const icons = [User, KeyRound, Timer, Store]

export function DiagramTokenization({ t }: { t: Dict }) {
  const d = t.tech.diagram1

  const diagram = (
    // Swap this block with your own cartoon illustration later.
    <div className="relative rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
      <div className="flex items-center justify-between gap-1 sm:gap-3">
        {d.nodes.map((label, i) => {
          const Icon = icons[i]
          return (
            <div key={label} className="flex items-center gap-1 sm:gap-3">
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary sm:size-14">
                  <Icon className="size-5 sm:size-6" aria-hidden="true" />
                </span>
                <span className="text-[11px] font-medium text-muted-foreground sm:text-xs">{label}</span>
              </div>
              {i < icons.length - 1 && (
                <ChevronRight className="size-4 shrink-0 text-primary/50" aria-hidden="true" />
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 rounded-xl border border-dashed border-primary/40 bg-primary/5 p-5">
        <span className="flex size-20 items-center justify-center rounded-lg bg-background text-primary ring-1 ring-primary/30">
          <QrCode className="size-12" aria-hidden="true" />
        </span>
        <span className="font-mono text-xs text-primary">{d.caption}</span>
      </div>
    </div>
  )

  return <DiagramSection chip={d.chip} title={d.title} body={d.body} diagram={diagram} />
}
