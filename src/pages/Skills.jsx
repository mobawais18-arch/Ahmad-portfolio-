import { Briefcase, Rocket } from 'lucide-react'
import { skills } from '../skills.js'
import { usePageMeta } from '../hooks.js'
import SectionHeading from '../components/SectionHeading.jsx'
import SkillCard from '../components/SkillCard.jsx'
import CvCta from '../components/CvCta.jsx'

export default function Skills() {
  usePageMeta('Computer Skills | Muhammad Ahmad Ashfaq', 'Computer skills of Muhammad Ahmad Ashfaq: MS Word, MS Excel, basic computer operations and basic office work.')
  return (
    <>
      <section className="bg-white">
        <div className="container-x py-12 sm:py-16">
          <h1 className="font-serif text-3xl font-bold text-navy sm:text-4xl">Computer skills</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">The computer and office skills I bring to a workplace.</p>
        </div>
      </section>

      <section className="container-x py-12 sm:py-14">
        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((s) => <SkillCard key={s.title} {...s} />)}
        </div>
      </section>

      <section className="container-x pb-12 sm:pb-14">
        <div className="flex flex-col gap-4 rounded-2xl border border-royal/20 bg-royal/5 p-6 sm:flex-row sm:items-start sm:p-8">
          <Rocket className="shrink-0 text-royal" size={28} aria-hidden="true" />
          <div>
            <h2 className="font-serif text-2xl font-bold text-navy">Willing to learn</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">I am eager to learn new skills, improve my computer knowledge, and grow professionally through practical experience.</p>
          </div>
        </div>
      </section>

      <section className="container-x pb-14 sm:pb-16">
        <SectionHeading title="Work experience" />
        <div className="card mt-6 flex items-center gap-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal/10 text-royal"><Briefcase size={22} aria-hidden="true" /></span>
          <p className="text-lg font-bold text-navy">Fresh Candidate</p>
        </div>
      </section>
      <CvCta />
    </>
  )
}
