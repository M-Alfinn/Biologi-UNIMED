import { ContentPage } from './PlaceholderPage';

export const Publikasi = () => (
  <ContentPage 
    title="Publikasi"
    subtitle="Arsip karya ilmiah dan jurnal yang dihasilkan oleh civitas akademika Jurusan Biologi UNIMED."
  >
    <div className="space-y-12">
      <div className="bg-neutral p-10 rounded-[3rem] border border-primary/5">
        <h3 className="text-2xl font-display font-bold text-primary mb-6 italic">Jurnal Internal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-primary/5">
             <h4 className="text-xl font-bold text-accent mb-2">Jurnal Biosains UNIMED</h4>
             <p className="text-sm text-primary/60 mb-4">Terindeks SINTA 2, memuat hasil riset biologi murni dan terapan.</p>
             <button className="text-xs font-mono font-bold uppercase text-primary underline">Lihat OJS</button>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-primary/5">
             <h4 className="text-xl font-bold text-accent mb-2">Jurnal Pendidikan Biologi</h4>
             <p className="text-sm text-primary/60 mb-4">Fokus pada inovasi pedagogik dan evaluasi pendidikan biologi.</p>
             <button className="text-xs font-mono font-bold uppercase text-primary underline">Lihat OJS</button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-display font-bold text-primary italic">Publikasi Internasional Terbaru</h3>
        <div className="space-y-4">
          {[
            "Effect of Mangrove Density on Carbon Sequestration (Scopus Q1)",
            "Molecular Characterization of Endemic Flora in Sumatra (IEEE)",
            "Developing Digital Learning Media for Genetic Studies (IJET)"
          ].map((pub, i) => (
            <div key={i} className="p-6 bg-white border-b border-primary/5 last:border-0 flex justify-between items-center gap-4">
               <p className="text-primary/80 font-medium">{pub}</p>
               <span className="text-xs font-mono text-primary/40 whitespace-nowrap">2026</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </ContentPage>
);
