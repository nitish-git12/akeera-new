export default function PlaceholderChart({ label }: { label?: string }) {
  return (
    <div className="h-32 w-full rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center text-xs text-white/40">
      {label || "Chart Placeholder"}
    </div>
  );
}
