import { ContentPage } from '../PlaceholderPage';

export const Sarana = () => (
  <ContentPage 
    title="Sarana dan Fasilitas"
    subtitle="Lingkungan belajar yang kondusif dengan fasilitas pendukung akademik yang modern dan lengkap."
  >
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-3xl font-display font-bold text-primary italic">Ruang Kuliah Smart</h3>
          <p className="text-primary/70 leading-relaxed">
            Seluruh ruang kuliah di Jurusan Biologi telah dilengkapi dengan fasilitas multimedia (LCD Projector, Sound System), akses Wi-Fi berkecepatan tinggi, dan pendingin ruangan (AC) untuk kenyamanan proses belajar mengajar.
          </p>
        </div>
        <div className="rounded-[3rem] overflow-hidden shadow-xl aspect-video">
           <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Ruang Kuliah" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Rumah Kaca (Greenhouse)', desc: 'Fasilitas budidaya dan eksperimen tanaman dalam kondisi terkontrol.' },
          { title: 'Herbarium Jurusan', desc: 'Koleksi spesimen tumbuhan Sumatera untuk studi taksonomi.' },
          { title: 'Kolam Percobaan', desc: 'Sarana riset pembenihan dan ekologi perairan air tawar.' },
        ].map((item, i) => (
          <div key={i} className="p-8 bg-neutral rounded-[2.5rem] border border-primary/5">
             <h4 className="text-xl font-bold text-primary mb-4 italic">{item.title}</h4>
             <p className="text-sm text-primary/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary p-12 rounded-[4rem] text-center text-white">
        <h3 className="text-3xl font-display font-bold mb-6 italic">Hutan Kampus UNIMED</h3>
        <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
          Laboratorium alam seluas puluhan hektar yang menyediakan akses langsung bagi mahasiswa untuk mempelajari ekosistem hutan tropis tanpa harus meninggalkan area kampus.
        </p>
      </div>
    </div>
  </ContentPage>
);
