import { ContentPage } from '../PlaceholderPage';

export const LabA = () => (
  <ContentPage 
    title="Laboratorium Pendidikan & Mikrobiologi"
    subtitle="Pusat eksplorasi mikroskopis dan pengembangan praktikum biologi dasar."
  >
    <div className="space-y-12">
      <div className="aspect-video w-full rounded-[3rem] overflow-hidden bg-primary shadow-2xl relative">
        <img src="https://images.unsplash.com/photo-1579154219604-8461099f6497?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-80" alt="Lab" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-12">
          <p className="text-white text-xl font-serif-alt italic">"Presisi dalam Setiap Observasi"</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-display font-bold text-primary italic">Fisilitas Utama</h3>
          <ul className="space-y-4 text-primary/70">
            <li>• Mikroskop Binokuler & Trinokuler Digital</li>
            <li>• Autoklaf Elektrik Modern</li>
            <li>• Laminar Air Flow (LAF) Terkalibrasi</li>
            <li>• Inkubator Bakteriologi</li>
          </ul>
        </div>
        <div className="bg-neutral p-10 rounded-[3rem] space-y-4">
          <h3 className="text-2xl font-display font-bold text-primary italic">Kepala Laboratorium</h3>
          <p className="text-primary/80 font-medium">Bapak Prof. Dr. Herbert Sipahutar, M.S., M.Sc.</p>
          <div className="h-px w-full bg-primary/10" />
          <p className="text-sm text-primary/40 leading-relaxed italic">
            "Lab A fokus pada standarisasi teknik laboratorium bagi mahasiswa tingkat awal dan riset mikrobiologi lingkungan."
          </p>
        </div>
      </div>
    </div>
  </ContentPage>
);
