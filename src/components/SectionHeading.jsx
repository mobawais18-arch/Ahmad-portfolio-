export default function SectionHeading({ title, text, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <h2 className="font-serif text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
      {text && <p className="mt-3 leading-relaxed text-slate-600">{text}</p>}
    </div>
  )
}
