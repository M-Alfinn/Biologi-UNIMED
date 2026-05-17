import { ContentPage } from '../PlaceholderPage';

export const Berita = () => (
  <ContentPage 
    title="Berita Seputar Biologi"
    subtitle="Warta terkini mengenai prestasi, riset, dan agenda penting di lingkungan Jurusan Biologi UNIMED."
  >
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { 
            title: 'Mahasiswa Biologi Ciptakan Inovasi Plastik Ramah Lingkungan', 
            date: '15 Mei 2026', 
            img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800' 
          },
          { 
            title: 'Kunjungan Industri ke Balai Karantina Pertanian Medan', 
            date: '10 Mei 2026', 
            img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' 
          },
        ].map((news, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-video rounded-[2.5rem] overflow-hidden mb-6 relative bg-dark">
               <img src={news.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" alt={news.title} />
            </div>
            <span className="text-accent text-xs font-mono font-bold uppercase tracking-widest">{news.date}</span>
            <h4 className="text-2xl font-display font-bold text-primary mt-2 group-hover:text-accent transition-colors">"{news.title}"</h4>
          </div>
        ))}
      </div>
    </div>
  </ContentPage>
);
