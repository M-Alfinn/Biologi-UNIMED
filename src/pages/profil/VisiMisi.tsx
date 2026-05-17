import { ContentPage } from '../PlaceholderPage';

export const VisiMisi = () => (
  <ContentPage 
    title="Visi & Misi"
    subtitle="Arah dan tujuan strategis Jurusan Biologi UNIMED dalam mewujudkan keunggulan di bidang pendidikan dan riset biologi."
  >
    <div className="space-y-16">
      <div className="bg-primary text-white p-12 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse" />
        </div>
        <h3 className="text-sm font-mono tracking-[0.4em] uppercase text-accent mb-8">Visi Jurusan</h3>
        <p className="text-3xl md:text-5xl font-display font-bold leading-tight italic">
          "Menjadi Jurusan Biologi yang <span className="text-accent underline decoration-white/20">Unggul</span> dalam Bidang Pendidikan dan Riset Biologi Berbasis Kekayaan Alam Sumatera Utama pada Tahun 2030."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-1 w-12 bg-accent" />
            <h4 className="text-2xl font-display font-bold text-primary italic">Misi Kami</h4>
          </div>
          <div className="space-y-6">
            {[
              "Menyelenggarakan pendidikan biologi yang bermutu tinggi untuk menghasilkan lulusan yang kompeten dan kompetitif.",
              "Melakukan riset inovatif di bidang biologi dan kependidikan biologi yang bermanfaat bagi masyarakat.",
              "Melaksanakan pengabdian kepada masyarakat berbasis hasil riset untuk peningkatan kesejahteraan.",
              "Menjalin kerjasama strategis dengan berbagai lembaga di tingkat lokal, nasional, dan internasional."
            ].map((misi, i) => (
              <div key={i} className="flex gap-6 group">
                <span className="w-10 h-10 shrink-0 bg-neutral text-primary flex items-center justify-center rounded-full font-bold group-hover:bg-accent transition-colors">{i+1}</span>
                <p className="text-primary/80 leading-relaxed pt-2">{misi}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-1 w-12 bg-accent" />
            <h4 className="text-2xl font-display font-bold text-primary italic">Tujuan Strategis</h4>
          </div>
          <div className="bg-neutral p-10 rounded-[3rem] border border-primary/5">
            <ul className="space-y-6">
              {[
                "Meningkatkan kualitas pembelajaran melalui integrasi IT.",
                "Mendorong publikasi ilmiah di jurnal bereputasi tinggi.",
                "Memperluas jaringan kemitraan dengan industri dan LSM.",
                "Mengoptimalkan peran alumni dalam pengembangan institusi."
              ].map((goal, i) => (
                <li key={i} className="flex items-center gap-4 text-primary/70">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </ContentPage>
);
