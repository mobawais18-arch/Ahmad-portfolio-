import { useEffect, useState } from 'react'
import { Download, Eye, Image as ImageIcon, Maximize2, X } from 'lucide-react'
import { FILES } from '../data.js'
import { usePageMeta } from '../hooks.js'
import DownloadButton from '../components/DownloadButton.jsx'

export default function Resume() {
  usePageMeta('Resume & Download CV | Muhammad Ahmad Ashfaq', 'View the complete CV of Muhammad Ahmad Ashfaq and download it as a PDF or PNG image.')
  const [zoom, setZoom] = useState(false)

  useEffect(() => {
    if (!zoom) return
    const onKey = (e) => e.key === 'Escape' && setZoom(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [zoom])

  return (
    <>
      <section className="bg-white">
        <div className="container-x py-12 sm:py-16">
          <h1 className="font-serif text-3xl font-bold text-navy sm:text-4xl">Resume</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">View my complete CV below, or download it as a PDF.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <DownloadButton>Download CV (PDF)</DownloadButton>
            <a href={FILES.pdf} target="_blank" rel="noopener noreferrer" className="btn-outline"><Eye size={18} aria-hidden="true" />View Full CV</a>
            <a href={FILES.png} download={FILES.pngName} className="btn-outline"><ImageIcon size={18} aria-hidden="true" />Download CV as Image (PNG)</a>
          </div>
        </div>
      </section>

      <section className="container-x py-10 sm:py-14" aria-label="CV preview">
        <div className="mx-auto w-full max-w-3xl">
          <button
            type="button"
            onClick={() => setZoom(true)}
            className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md"
            aria-label="Open CV in larger view"
          >
            <img src={FILES.png} alt="Curriculum vitae of Muhammad Ahmad Ashfaq" width="1600" height="2260" className="h-auto w-full" />
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-lg bg-navy/85 px-3 py-1.5 text-xs font-semibold text-white transition group-hover:bg-navy">
              <Maximize2 size={14} aria-hidden="true" />Larger view
            </span>
          </button>
          <p className="mt-4 text-center text-sm text-slate-500">Tap the CV to open it in a larger view.</p>
        </div>
      </section>

      {zoom && (
        <div role="dialog" aria-modal="true" aria-label="CV larger view" className="fixed inset-0 z-[70] overflow-auto bg-navy/90 p-4 sm:p-8" onClick={() => setZoom(false)}>
          <button type="button" onClick={() => setZoom(false)} aria-label="Close larger view" className="fixed right-4 top-4 z-10 rounded-full bg-white p-2 text-navy shadow-lg hover:bg-sky-100">
            <X size={22} />
          </button>
          <img src={FILES.png} alt="Curriculum vitae of Muhammad Ahmad Ashfaq, larger view" className="mx-auto h-auto w-full max-w-5xl rounded-lg bg-white" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  )
}
