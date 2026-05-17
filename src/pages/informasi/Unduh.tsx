import { ContentPage } from '../PlaceholderPage';

export const Unduh = () => (
  <ContentPage 
    title="Unduh Informasi & File"
    subtitle="Pusat unduhan dokumen resmi, formulir, dan materi akademik bagi seluruh civitas akademika."
  >
    <div className="space-y-8">
      {[
        { category: 'Administrasi', items: ['Formulir Cuti Kuliah', 'Surat Izin Penelitian', 'Panduan Penulisan Skripsi'] },
        { category: 'Kurikulum', items: ['Struktur Kurikulum S1 Pendidikan', 'Struktur Kurikulum S1 Biologi', 'Daftar Mata Kuliah Pilihan'] },
        { category: 'Lain-lain', items: ['Logo UNIMED High Res', 'Template Presentasi Jurusan', 'E-Learning Guide'] },
      ].map((cat, i) => (
        <div key={i} className="p-10 bg-white rounded-[3rem] border border-primary/5 shadow-sm">
          <h3 className="text-2xl font-display font-bold text-primary mb-6 italic">{cat.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cat.items.map((item, j) => (
              <div key={j} className="flex justify-between items-center p-4 bg-neutral rounded-2xl group cursor-pointer hover:bg-accent transition-colors">
                <span className="text-primary/70 font-medium group-hover:text-primary">{item}</span>
                <svg className="w-5 h-5 text-primary/30 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </ContentPage>
);
