import { Link } from 'react-router-dom'
import { GraduationCap, MapPin, UserCheck, ArrowRight, Eye } from 'lucide-react'
import { candidate } from '../data.js'
import { skills } from '../skills.js'
import { usePageMeta } from '../hooks.js'
import DownloadButton from '../components/DownloadButton.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import SkillCard from '../components/SkillCard.jsx'
import CvCta from '../components/CvCta.jsx'

const quick = [
  { icon: GraduationCap, label: 'Education', value: 'Matriculation (SSC)' },
  { icon: MapPin, label: 'Location', value: 'Faisalabad, Pakistan' },
  { icon: UserCheck, label: 'Status', value: 'Fresh Candidate' },
]

export default function Home() {
  usePageMeta(
    'Muhammad Ahmad Ashfaq | Fresh Candidate',
    'Muhammad Ahmad Ashfaq is a hardworking fresh candidate from Faisalabad with MS Word, MS Excel and basic office skills. View and download his CV.'
  )
  return (
    <>
      <section className="bg-gradient-to-b from-white to-mist">
        <div className="container-x grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div>
            <p className="inline-block rounded-full bg-sky-accent/25 px-3 py-1 text-sm font-semibold text-navy-700">Fresh Candidate</p>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-navy sm:text-5xl">{candidate.name}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">{candidate.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/about" className="btn-primary"><Eye size={18} aria-hidden="true" />View My Profile</Link>
              <DownloadButton className="btn-outline" />
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-lg">
              <picture>
                <source srcSet="/profile.webp" type="image/webp" />
                <img src="/profile.jpg" alt="Portrait of Muhammad Ahmad Ashfaq in a black suit" width="900" height="1200" fetchpriority="high" className="aspect-[4/5] w-full rounded-3xl object-cover object-top" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-8" aria-label="Quick information">
        <dl className="grid gap-4 sm:grid-cols-3">
          {quick.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-royal/10 text-royal"><Icon size={22} aria-hidden="true" /></span>
              <div><dt className="text-sm text-slate-500">{label}</dt><dd className="font-bold text-navy">{value}</dd></div>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-x py-14 sm:py-16">
        <SectionHeading title="About me" text={candidate.aboutIntro} />
        <Link to="/about" className="btn-outline mt-6">Read more about me<ArrowRight size={18} aria-hidden="true" /></Link>
      </section>

      <section className="container-x pb-14 sm:pb-16">
        <SectionHeading title="Computer skills" text="The tools I use and am comfortable with." />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => <SkillCard key={s.title} {...s} />)}
        </div>
      </section>

      <CvCta />
    </>
  )
}
