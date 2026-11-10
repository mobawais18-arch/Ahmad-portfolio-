import { useEffect, useState } from "react";
import { Download, Eye, Image as ImageIcon, Maximize2, X } from "lucide-react";
import { FILES } from "../data.js";
import { usePageMeta } from "../hooks.js";
import DownloadButton from "../components/DownloadButton.jsx";

export default function Resume() {
  usePageMeta(
    "Resume & Download CV | Muhammad Ahmad Ashfaq",
    "View the complete CV of Muhammad Ahmad Ashfaq and download it as a PDF or PNG image.",
  );
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e) => e.key === "Escape" && setZoom(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [zoom]);

  return (
    <>
      <section className="bg-white">
        <div className="container-x py-12 sm:py-16">
          <h1 className="font-serif text-3xl font-bold text-navy sm:text-4xl">
            Resume
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            View my complete CV below, or download it as a PDF.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <DownloadButton>Download CV (PDF)</DownloadButton>
            <a
              href={FILES.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Eye size={18} aria-hidden="true" />
              View Full CV
            </a>
            <a
              href={FILES.png}
              download={FILES.pngName}
              className="btn-outline"
            >
              <ImageIcon size={18} aria-hidden="true" />
              Download CV as Image (PNG)
            </a>
          </div>
        </div>
      </section>

      <section className="container-x py-10 sm:py-14" aria-label="CV preview">
        <div className="mx-auto w-full max-w-3xl group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
          <img
            src={FILES.png}
            alt="Curriculum vitae of Muhammad Ahmad Ashfaq"
            width="1600"
            height="2260"
            className="h-auto w-full"
          />
        </div>
      </section>
    </>
  );
}
