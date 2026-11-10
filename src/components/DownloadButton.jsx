import { Download } from 'lucide-react'
import { FILES } from '../data.js'

export default function DownloadButton({ className = 'btn-primary', children = 'Download CV' }) {
  return (
    <a href={FILES.pdf} download={FILES.pdfName} className={className}>
      <Download size={18} aria-hidden="true" />
      {children}
    </a>
  )
}
