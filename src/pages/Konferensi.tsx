import { ContentPage } from './PlaceholderPage';

export const Konferensi = () => (
  <ContentPage 
    title="Konferensi"
    subtitle="Agenda pertemuan ilmiah skala nasional dan internasional yang diselenggarakan oleh Jurusan Biologi UNIMED."
  >
    <div className="space-y-12">
      <div className="space-y-8">
        {[
          { 
            name: "Seminar Nasional Biologi (SEMABIO) 2026", 
            date: "15 Oktober 2026", 
            venue: "Digital Library UNIMED", 
            status: "Coming Soon" 
          },
          { 
            name: "International Conference on Biological Science (ICBS)", 
            date: "20 Mei 2026", 
            venue: "Online / Hybrid", 
            status: "Registration Open" 
          }
        ].map((conf, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-8 p-10 bg-white rounded-[3rem] shadow-sm border border-primary/5 items-center">
            <div className="bg-primary text-white p-6 rounded-3xl text-center min-w-[140px]">
               <span className="text-3xl font-display font-bold block">{conf.date.split(' ')[0]}</span>
               <span className="text-xs font-mono uppercase tracking-widest">{conf.date.split(' ').slice(1).join(' ')}</span>
            </div>
            <div className="flex-1 space-y-2">
               <span className="text-xs font-bold text-accent uppercase tracking-widest">{conf.status}</span>
               <h4 className="text-2xl font-display font-bold text-primary italic leading-tight">{conf.name}</h4>
               <p className="text-primary/40 text-sm italic">{conf.venue}</p>
            </div>
            <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all text-sm">
              Info Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  </ContentPage>
);
