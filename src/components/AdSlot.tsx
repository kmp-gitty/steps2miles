type AdSlotProps = {
    label: string; // e.g. "Top Leaderboard"
    sizes?: string; // e.g. "728x90 / 970x90"
    heightClass?: string; // e.g. "h-[90px]"
    sticky?: boolean;
  };
  
  export default function AdSlot({
    label,
    sizes = "",
    heightClass = "h-[90px]",
    sticky = false,
  }: AdSlotProps) {
    return (
      <div
        className={[
          "rounded-2xl border border-orange-200 bg-teal-50 shadow-sm",
          sticky ? "sticky top-24" : "",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-4 pt-3 text-[11px] uppercase tracking-wide text-slate-500">
          <span>Advertisement</span>
          <span className="text-slate-400">{sizes}</span>
        </div>
  
        <div
          className={[
            "mx-4 my-3 flex items-center justify-center rounded-xl border border-dashed border-orange-300 bg-white/70 text-center",
            heightClass,
          ].join(" ")}
        >
          <div>
            <div className="text-sm font-semibold text-slate-700">{label}</div>
            <div className="mt-1 text-xs text-slate-500">
              Future sponsored content {sizes ? `(${sizes})` : ""}
            </div>
          </div>
        </div>
      </div>
    );
  }
  