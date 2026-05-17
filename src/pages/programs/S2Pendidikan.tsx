import { ContentPage } from '../../pages/PlaceholderPage';

export const S2Pendidikan = () => (
  <ContentPage 
    title="S2: Pendidikan Biologi"
    subtitle="Mencetak magister pendidikan biologi yang pakar dalam pengembangan kurikulum, evaluasi, dan inovasi pedagogik."
  >
    <div className="space-y-12">
      <div className="bg-white p-10 rounded-[3rem] border border-primary/5 shadow-sm">
        <h3 className="text-2xl font-display font-bold text-primary mb-6 italic">Visi Program Magister</h3>
        <p className="text-primary/70 leading-relaxed">
          Menjadi pusat unggulan pendidikan magister biologi yang menghasilkan tenaga pendidik dan kependidikan yang mampu melakukan riset inovatif dan solutif terhadap permasalahan pendidikan biologi di tingkat lokal dan global.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-neutral space-y-4">
          <h4 className="text-xl font-bold text-primary">Sasaran Akademik</h4>
          <ul className="space-y-3 text-sm text-primary/70">
            <li>Pengembangan model pembelajaran berbasis etnosains.</li>
            <li>Analisis kurikulum biologi tingkat global.</li>
            <li>Riset desain instruksional berbasis teknologi.</li>
          </ul>
        </div>
        <div className="p-8 rounded-3xl bg-accent/10 border border-accent/20 space-y-4">
          <h4 className="text-xl font-bold text-accent">Penerimaan Mahasiswa</h4>
          <p className="text-sm text-primary/70">
            Pendaftaran dibuka setiap semester ganjil dan genap melalui jalur seleksi Mandiri Pascasarjana UNIMED.
          </p>
          <button className="text-sm font-bold text-primary underline underline-offset-4">Info Pendaftaran</button>
        </div>
      </div>
    </div>
  </ContentPage>
);
