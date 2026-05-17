import { ContentPage } from '../../pages/PlaceholderPage';

export const S1Pendidikan = () => (
  <ContentPage 
    title="S1 Pendidikan Biologi"
    subtitle="Membentuk pendidik biologi masa depan yang inovatif, berkarakter, dan menguasai teknologi pembelajaran terkini."
  >
    <div className="space-y-12">
      <div className="bg-white p-10 rounded-[3rem] border border-primary/5 shadow-sm">
        <h3 className="text-2xl font-display font-bold text-primary mb-6 italic">Profil Lulusan</h3>
        <p className="text-primary/70 leading-relaxed mb-6">
          Lulusan Program Studi S1 Pendidikan Biologi diarahkan untuk menjadi tenaga pendidik (guru) biologi di tingkat SMA/MA yang profesional. Selain itu, lulusan juga memiliki kompetensi sebagai pengelola laboratorium pendidikan, peneliti di bidang kependidikan biologi, dan wirausahawan di bidang jasa pendidikan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Guru Biologi SMP/SMA',
            'Peneliti Pendidikan',
            'Pengembang Media Pembelajaran',
            'Institusi Kursus & Pelatihan'
          ].map((job, i) => (
            <div key={i} className="flex items-center gap-3 text-primary/80">
              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>{job}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-display font-bold text-primary italic">Kurikulum Unggulan</h3>
        <div className="space-y-4">
          {[
            { subject: 'Strategi Belajar Mengajar', desc: 'Metodologi aktif berorientasi pada kemandirian siswa.' },
            { subject: 'Teknologi Pembelajaran Biologi', desc: 'Penggunaan media digital, AR/VR, dan multimedia dalam biologi.' },
            { subject: 'Evaluasi Proses & Hasil Belajar', desc: 'Teknik pengukuran capaian pembelajaran berbasis HOTS.' },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-neutral rounded-2xl border border-primary/5">
              <h4 className="font-bold text-primary mb-1">{item.subject}</h4>
              <p className="text-sm text-primary/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </ContentPage>
);
