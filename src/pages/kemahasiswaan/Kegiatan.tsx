import { ContentPage } from '../PlaceholderPage';

export const Kegiatan = () => (
  <ContentPage 
    title="Kegiatan Kemahasiswaan"
    subtitle="Wadah pengembangan soft skills, organisasi, dan kreativitas mahasiswa Biologi UNIMED."
  >
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
           <h3 className="text-3xl font-display font-bold text-primary italic">HMJ Biologi</h3>
           <p className="text-primary/70 leading-relaxed">
             Himpunan Mahasiswa Jurusan (HMJ) Biologi adalah organisasi kemahasiswaan tertinggi di tingkat jurusan. HMJ berfungsi sebagai jembatan aspirasi dan penyelenggara berbagai kegiatan akademik maupun non-akademik.
           </p>
           <div className="p-6 bg-white rounded-3xl border border-primary/5 shadow-sm">
             <h4 className="font-bold text-accent mb-2">Program Unggulan HMJ:</h4>
             <ul className="text-sm text-primary/60 space-y-2">
               <li>• Biology Exhibition (BEX)</li>
               <li>• Bina Desa Mahasiswa</li>
               <li>• Pelatihan Kepemimpinan (LDK)</li>
             </ul>
           </div>
        </div>
        <div className="rounded-[3rem] overflow-hidden shadow-2xl">
           <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Student Activity" />
        </div>
      </div>
    </div>
  </ContentPage>
);
