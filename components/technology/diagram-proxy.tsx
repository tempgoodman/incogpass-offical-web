import { Megaphone, Box, BellRing, ChevronRight } from "lucide-react"
import type { Dict } from "@/lib/i18n"
import { DiagramSection } from "./diagram-section"

export function DiagramProxy({ t }: { t: Dict }) {
  const d = t.tech.diagram3

  const Node = ({
    icon: Icon,
    label,
    note,
    tone,
  }: {
    icon: typeof Box
    label: string
    note: string
    tone: "muted" | "primary"
  }) => (
    <div
      className={
        tone === "primary"
          ? "flex flex-1 flex-col items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 p-4 text-center"
          : "flex flex-1 flex-col items-center gap-2 rounded-xl border border-border bg-secondary/60 p-4 text-center"
      }
    >
      <Icon
        className={tone === "primary" ? "size-7 text-primary" : "size-7 text-foreground"}
        aria-hidden="true"
      />
      <span className="text-xs font-semibold">{label}</span>
      <span className="text-[11px] leading-tight text-muted-foreground">{note}</span>
    </div>
  )

  const diagram = (
    // Swap this block with your own cartoon illustration later.
    <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <Node icon={Megaphone} label={d.merchant} note={d.merchantNote} tone="muted" />
        <ChevronRight className="mx-auto size-4 shrink-0 rotate-90 text-primary/50 sm:rotate-0" aria-hidden="true" />
        <Node icon={Box} label={d.box} note={d.boxNote} tone="primary" />
        <ChevronRight className="mx-auto size-4 shrink-0 rotate-90 text-primary/50 sm:rotate-0" aria-hidden="true" />
        <Node icon={BellRing} label={d.user} note={d.userNote} tone="muted" />
      </div>
    </div>
  )

  return <DiagramSection chip={d.chip} title={d.title} body={d.body} diagram={diagram} />
}
