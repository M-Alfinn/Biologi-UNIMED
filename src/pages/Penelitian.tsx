import { ContentPage } from './PlaceholderPage';

export const Penelitian = () => (
  <ContentPage 
    title="Penelitian"
    subtitle="Mendorong penemuan baru dan inovasi sains melalui riset berkelanjutan berbasis biodiversitas lokal."
  >
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-primary p-10 rounded-[3rem] text-white">
          <h3 className="text-2xl font-display font-bold mb-6 italic">Grup Riset</h3>
          <ul className="space-y-4 text-white/70">
            <li>• Bioteknologi Tanaman & Kultur Jaringan</li>
            <li>• Ekologi Perairan & Konservasi Mangrove</li>
            <li>• Mikrobiologi Industri & Pangan</li>
            <li>• Entomologi & Pengendalian Hayati</li>
          </ul>
        </div>
        <div className="bg-white p-10 rounded-[3rem] border border-primary/5 shadow-sm">
          <h3 className="text-2xl font-display font-bold text-primary mb-6 italic">Dana Hibah Penelitian</h3>
          <p className="text-primary/60 text-sm leading-relaxed mb-6">
            Dosen dan mahasiswa Jurusan Biologi aktif memenangkan berbagai dana hibah bergengsi, termasuk hibah DRTPM Kemdikbudristek, Hibah Kompetetif UNIMED, dan kerjasama korporasi.
          </p>
          <button className="text-xs font-bold text-accent uppercase tracking-widest">Lihat Roadmap Penelitian →</button>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-display font-bold text-primary italic text-center">Penelitian Unggulan Terkini</h3>
        <div className="space-y-4">
          {[
            { tag: 'Biotek', title: 'Optimalisasi Produksi Metabolit Sekunder pada Tanaman Obat Sumatera.' },
            { tag: 'Ekologi', title: 'Dampak Perubahan Iklim terhadap Ekosistem Hutan Pegunungan Tinggi.' },
            { tag: 'Zoologi', title: 'Inventarisasi Keanekaragaman Reptil di Kawasan Penyangga TNGL.' },
          ].map((res, i) => (
            <div key={i} className="flex gap-6 p-6 bg-neutral rounded-2xl items-center border border-primary/5">
              <span className="font-mono text-accent text-[10px] font-bold uppercase py-1 px-3 bg-accent/10 rounded-full">{res.tag}</span>
              <h4 className="text-primary font-medium">{res.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  </ContentPage>
);
