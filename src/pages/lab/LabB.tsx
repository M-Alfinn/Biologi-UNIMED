import { ContentPage } from '../PlaceholderPage';

export const LabB = () => (
  <ContentPage 
    title="Laboratorium Bioteknologi & Molekuler"
    subtitle="Infrastruktur riset lanjut untuk analisis DNA, protein, dan rekayasa genetika."
  >
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Analisis DNA', img: 'https://images.unsplash.com/photo-1581093583449-825597f96e76?auto=format&fit=crop&q=80&w=800' },
          { label: 'Gel Elektroforesis', img: 'https://images.unsplash.com/photo-1579154219604-8461099f6497?auto=format&fit=crop&q=80&w=800' },
          { label: 'PCR System', img: 'https://images.unsplash.com/photo-1582719201936-82eb38b93998?auto=format&fit=crop&q=80&w=800' },
        ].map((f, i) => (
          <div key={i} className="group relative h-64 overflow-hidden rounded-[2rem] bg-dark">
            <img src={f.img} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500" alt={f.label} />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <h4 className="text-white font-display font-bold text-lg text-center">{f.label}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-12 rounded-[3.5rem] border border-primary/5 shadow-sm">
        <h3 className="text-2xl font-display font-bold text-primary mb-8 italic">Peralatan Canggih</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <div className="flex gap-4">
            <div className="w-2 h-2 bg-accent rounded-full mt-2" />
            <div>
               <p className="font-bold text-primary">Thermal Cycler (PCR)</p>
               <p className="text-sm text-primary/60">Untuk amplifikasi untai DNA tertentu secara eksponensial.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 bg-accent rounded-full mt-2" />
            <div>
               <p className="font-bold text-primary">Spectrophotometer UV-Vis</p>
               <p className="text-sm text-primary/60">Pengukuran konsentrasi protein dan kemurnian asam nukleat.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 bg-accent rounded-full mt-2" />
            <div>
               <p className="font-bold text-primary">Sentrifus Refrigerasi</p>
               <p className="text-sm text-primary/60">Pemisahan komponen seluler pada suhu rendah yang stabil.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContentPage>
);
