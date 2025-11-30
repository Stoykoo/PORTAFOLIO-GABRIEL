// TITULO SECCION

export default function SectionTitle({ id, children }) {
  return (
    <div id={id} className="space-y-2">
      <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
        {children}
      </h2>
    </div>
  );
}
