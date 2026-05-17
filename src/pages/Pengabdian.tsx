import { ContentPage } from './PlaceholderPage';

export const Pengabdian = () => (
  <ContentPage 
    title="Pengabdian"
    subtitle="Implementasi ilmu pengetahuan dan teknologi biologi untuk memberdayakan masyarakat dan melestarikan lingkungan."
  >
    <div className="space-y-12">
      <div className="prose prose-primary max-w-none text-primary/70 leading-relaxed mb-10">
        <p>
          Pengabdian kepada Masyarakat (PkM) merupakan salah satu pilar Tri Dharma Perguruan Tinggi di Jurusan Biologi UNIMED. Kami berkomitmen untuk mentransfer inovasi riset dari laboratorium ke tengah masyarakat guna memberikan solusi nyata bagi permasalahan lingkungan, kesehatan, dan ekonomi produktif.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Desa Binaan', desc: 'Pengembangan pupuk organik cair di Desa Deli Serdang.' },
          { title: 'Edukasi Sekolah', desc: 'Pelatihan teknik mikroskopi bagi guru biologi SMA.' },
          { title: 'Konservasi', desc: 'Program penanaman kembali mangrove di pesisir Pantai Cermin.' },
        ].map((p, i) => (
          <div key={i} className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-primary/5 hover:-translate-y-2 transition-all">
            <h4 className="text-xl font-bold text-primary mb-4">{p.title}</h4>
            <p className="text-sm text-primary/60">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </ContentPage>
);
