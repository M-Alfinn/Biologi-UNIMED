import { ContentPage } from '../../pages/PlaceholderPage';

export const S1PendidikanIpa = () => (
  <ContentPage 
    title="S1 Pendidikan IPA"
    subtitle="Mempersiapkan pendidik IPA yang kompeten, kreatif, dan mampu mengintegrasikan konsep sains dalam pembelajaran abad 21."
  >
    <div className="space-y-12">
      <div className="bg-white p-10 rounded-[3rem] border border-primary/5 shadow-sm">
        <h3 className="text-2xl font-display font-bold text-primary mb-6 italic">Profil Lulusan</h3>
        <p className="text-primary/70 leading-relaxed mb-6">
          Lulusan Program Studi S1 Pendidikan IPA dipersiapkan untuk menjadi guru IPA (Ilmu Pengetahuan Alam) di tingkat SMP/MTs yang unggul. Selain itu, lulusan juga dibekali kemampuan untuk menjadi pengembang bahan ajar sains, pengelola laboratorium sekolah, serta peneliti pemula di bidang pendidikan sains terintegrasi.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Guru IPA SMP/MTs',
            'Laboran IPA',
            'Peneliti Pendidikan Sains',
            'Edu-preneur di Bidang Sains'
          ].map((job, i) => (
            <div key={i} className="flex items-center gap-3 text-primary/80">
              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>{job}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-display font-bold text-primary italic">Kurikulum Terintegrasi</h3>
        <div className="space-y-4">
          {[
            { subject: 'Sains Dasar (Biologi, Fisika, Kimia)', desc: 'Penguasaan konsep dasar sains yang kuat sebagai landasan pengajaran IPA Terpadu.' },
            { subject: 'Metodologi Pembelajaran IPA', desc: 'Pendekatan kurikulum terintegrasi dan eksperimen sains yang inovatif.' },
            { subject: 'Teknologi Informasi dalam Sains', desc: 'Pemanfaatan instrumen digital dan simulasi virtual dalam pembelajaran IPA.' },
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
