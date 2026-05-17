import { ContentPage } from '../../pages/PlaceholderPage';

export const S1Biologi = () => (
  <ContentPage 
    title="S1 Biologi"
    subtitle="Mengeksplorasi kedalaman sains hayat melalui riset fundamental dan terapan untuk keberlanjutan sumber daya hayati."
  >
    <div className="space-y-12">
      <div className="bg-primary p-12 rounded-[3.5rem] text-white shadow-2xl">
        <h3 className="text-3xl font-display font-bold mb-6 italic">Fokus Riset</h3>
        <p className="text-white/70 leading-relaxed mb-10 text-lg">
          Program Studi S1 Biologi menitikberatkan pada pemahaman mendalam tentang organisme, sistem biologis, dan interaksinya dengan lingkungan. Mahasiswa kami dilatih untuk menjadi ilmuwan yang mampu memecahkan masalah lingkungan, kesehatan, dan industri melalui pendekatan bioteknologi dan konservasi.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Ekologi', icon: '🌿' },
            { label: 'Genetika', icon: '🧬' },
            { label: 'Mikrobiologi', icon: '🔬' },
            { label: 'Fisiologi', icon: '⚙️' },
          ].map((field, i) => (
            <div key={i} className="text-center p-6 bg-white/5 rounded-3xl border border-white/10">
              <div className="text-3xl mb-3">{field.icon}</div>
              <div className="text-sm font-bold uppercase tracking-widest">{field.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-display font-bold text-primary italic">Peluang Karir</h3>
        <div className="prose prose-primary max-w-none text-primary/70">
          <p>
            Lulusan S1 Biologi memiliki prospek kerja yang luas, mulai dari peneliti di lembaga riset pemerintah (BRIN), staf ahli di industri farmasi dan makanan, konsultan lingkungan di perusahaan multinasional, hingga bioprenuer yang mengembangkan produk berbasis sumber daya hayati lokal.
          </p>
        </div>
      </div>
    </div>
  </ContentPage>
);
