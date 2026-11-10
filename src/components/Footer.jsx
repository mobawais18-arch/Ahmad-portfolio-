import { Link } from 'react-router-dom'
import { Phone, MapPin } from 'lucide-react'
import { candidate } from '../data.js'

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="container-x grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg font-bold text-white">{candidate.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            A dedicated and hardworking fresh candidate, ready to learn and grow in a professional workplace.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-white">Pages</p>
          <ul className="mt-3 space-y-2 text-sm">
            {[['/', 'Home'], ['/about', 'About'], ['/skills', 'Skills'], ['/resume', 'Resume']].map(([to, label]) => (
              <li key={to}><Link to={to} className="hover:text-white">{label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone size={16} aria-hidden="true" /><a href={`tel:${candidate.mobile}`} className="hover:text-white">{candidate.mobile}</a></li>
            <li className="flex items-center gap-2"><MapPin size={16} aria-hidden="true" />{candidate.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">
        © {new Date().getFullYear()} {candidate.name}. All rights reserved.
      </div>
    </footer>
  )
}
