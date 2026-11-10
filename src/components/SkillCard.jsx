export default function SkillCard({ icon: Icon, title, text }) {
  return (
    <div className="card">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal/10 text-royal">
        <Icon size={22} aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
      {text && <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{text}</p>}
    </div>
  )
}
