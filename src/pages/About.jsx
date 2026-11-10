import { User, Users, Phone, MapPin, Target, GraduationCap, TrendingUp, BookOpen, ShieldCheck, Timer } from 'lucide-react'
import { candidate } from '../data.js'
import { usePageMeta } from '../hooks.js'
import SectionHeading from '../components/SectionHeading.jsx'
import CvCta from '../components/CvCta.jsx'

const info = [
  { icon: User, label: 'Full Name', value: candidate.name },
  { icon: Users, label: "Father's Name", value: candidate.father },
  { icon: Phone, label: 'Mobile', value: candidate.mobile },
  { icon: MapPin, label: 'Address', value: candidate.address },
]
const strengthIcons = [TrendingUp, BookOpen, ShieldCheck, Timer]

export default function About() {
  usePageMeta('About | Muhammad Ahmad Ashfaq', 'Personal information, career objective, education and personal strengths of Muhammad Ahmad Ashfaq.')
  return (
    <>
      <section className="bg-white">
        <div className="container-x py-12 sm:py-16">
          <h1 className="font-serif text-3xl font-bold text-navy sm:text-4xl">About me</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{candidate.aboutIntro}</p>
        </div>
      </section>

      <section className="container-x py-12 sm:py-14">
        <SectionHeading title="Personal information" />
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {info.map(({ icon: Icon, label, value }) => (
            <div key={label} className="card flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-royal/10 text-royal"><Icon size={22} aria-hidden="true" /></span>
              <div><dt className="text-sm text-slate-500">{label}</dt><dd className="font-bold text-navy">{value}</dd></div>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-x pb-12 sm:pb-14">
        <div className="rounded-2xl border border-royal/20 bg-royal/5 p-6 sm:p-8">
          <div className="flex items-center gap-3 text-royal"><Target size={22} aria-hidden="true" /><h2 className="font-serif text-2xl font-bold text-navy">Career objective</h2></div>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">{candidate.objective}</p>
        </div>
      </section>

      <section className="container-x pb-12 sm:pb-14">
        <SectionHeading title="Educational background" />
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {candidate.education.map((e) => (
            <div key={e.title} className="card">
              <div className="flex items-center gap-3"><GraduationCap className="text-royal" size={22} aria-hidden="true" /><h3 className="text-lg font-bold text-navy">{e.title}</h3></div>
              <ul className="mt-4 space-y-2 text-slate-700">
                {e.points.map((p) => (<li key={p} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-royal" />{p}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-14 sm:pb-16">
        <SectionHeading title="Personal strengths" />
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {candidate.strengths.map((s, i) => {
            const Icon = strengthIcons[i]
            return (
              <li key={s} className="card flex items-center gap-3">
                <Icon className="text-royal" size={22} aria-hidden="true" /><span className="font-bold text-navy">{s}</span>
              </li>
            )
          })}
        </ul>
      </section>
      <CvCta />
    </>
  )
}
