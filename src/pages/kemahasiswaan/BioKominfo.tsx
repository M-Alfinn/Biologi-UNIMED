import { ContentPage } from '../PlaceholderPage';

export const BioKominfo = () => (
  <ContentPage 
    title="Bio Kominfo"
    subtitle="Media informasi dan dokumentasi digital resmi Himpunan Mahasiswa Jurusan Biologi."
  >
    <div className="space-y-12">
      <div className="bg-primary p-12 rounded-[3.5rem] text-white">
         <h3 className="text-3xl font-display font-bold mb-6 italic">Tentang Bio Kominfo</h3>
         <p className="text-white/70 leading-relaxed mb-10">
           Bio Kominfo merupakan departemen khusus yang menangani publikasi, dokumentasi, dan pengelolaan media sosial jurusan. Kami bertugas memastikan penyebaran informasi akademik dan kegiatan kemahasiswaan berjalan efektif dan menarik secara visual.
         </p>
         <div className="flex flex-wrap gap-4">
            <div className="px-6 py-3 bg-white/10 rounded-full text-xs font-mono font-bold uppercase tracking-widest border border-white/20">Instagram</div>
            <div className="px-6 py-3 bg-white/10 rounded-full text-xs font-mono font-bold uppercase tracking-widest border border-white/20">YouTube</div>
            <div className="px-6 py-3 bg-white/10 rounded-full text-xs font-mono font-bold uppercase tracking-widest border border-white/20">TikTok</div>
            <div className="px-6 py-3 bg-white/10 rounded-full text-xs font-mono font-bold uppercase tracking-widest border border-white/20">Podcast Biologi</div>
         </div>
      </div>
    </div>
  </ContentPage>
);
