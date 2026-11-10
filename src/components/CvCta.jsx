import { Link } from 'react-router-dom'
import { Eye } from 'lucide-react'
import DownloadButton from './DownloadButton.jsx'

export default function CvCta() {
  return (
    <section className="container-x pb-16 sm:pb-20" aria-labelledby="cv-cta">
      <div className="rounded-3xl bg-navy px-6 py-12 text-center sm:px-12">
        <h2 id="cv-cta" className="font-serif text-2xl font-bold text-white sm:text-3xl">View and download my CV</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-300">
          See my complete CV online, or download the PDF to share with your team.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <DownloadButton className="btn-light" />
          <Link to="/resume" className="btn-ghost-light"><Eye size={18} aria-hidden="true" />View CV Online</Link>
        </div>
      </div>
    </section>
  )
}
