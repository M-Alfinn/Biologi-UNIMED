import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Programs } from './pages/Programs';
import { Faculty } from './pages/Faculty';
import { Contact } from './pages/Contact';

// Profil
import { Sambutan } from './pages/profil/Sambutan';
import { Sejarah } from './pages/profil/Sejarah';
import { VisiMisi } from './pages/profil/VisiMisi';
import { Alumni } from './pages/profil/Alumni';

// Akademik
import { S1Pendidikan } from './pages/programs/S1Pendidikan';
import { S1Biologi } from './pages/programs/S1Biologi';
import { S2Pendidikan } from './pages/programs/S2Pendidikan';
import { Pengaturan } from './pages/akademik/Pengaturan';

// Penelitian & Pengabdian
import { Penelitian } from './pages/Penelitian';
import { Pengabdian } from './pages/Pengabdian';
import { Publikasi } from './pages/Publikasi';
import { Konferensi } from './pages/Konferensi';

// Lab
import { LabA } from './pages/lab/LabA';
import { LabB } from './pages/lab/LabB';
import { Sarana } from './pages/lab/Sarana';

// Kemahasiswaan
import { Kegiatan } from './pages/kemahasiswaan/Kegiatan';
import { BioKominfo } from './pages/kemahasiswaan/BioKominfo';

// Informasi
import { Berita } from './pages/informasi/Berita';
import { Unduh } from './pages/informasi/Unduh';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Profil */}
          <Route path="/profil/sambutan" element={<Sambutan />} />
          <Route path="/profil/sejarah" element={<Sejarah />} />
          <Route path="/profil/visi-misi" element={<VisiMisi />} />
          <Route path="/profil/alumni" element={<Alumni />} />

          {/* Akademik */}
          <Route path="/programs/s1-pendidikan" element={<S1Pendidikan />} />
          <Route path="/programs/s1-biologi" element={<S1Biologi />} />
          <Route path="/programs/s2-pendidikan" element={<S2Pendidikan />} />
          <Route path="/akademik/pengaturan" element={<Pengaturan />} />

          {/* Penelitian & Pengabdian */}
          <Route path="/penelitian" element={<Penelitian />} />
          <Route path="/pengabdian" element={<Pengabdian />} />
          <Route path="/publikasi" element={<Publikasi />} />
          <Route path="/konferensi" element={<Konferensi />} />

          {/* Lab */}
          <Route path="/lab/a" element={<LabA />} />
          <Route path="/lab/b" element={<LabB />} />
          <Route path="/lab/sarana" element={<Sarana />} />

          {/* Kemahasiswaan */}
          <Route path="/kemahasiswaan/kegiatan" element={<Kegiatan />} />
          <Route path="/kemahasiswaan/biokominfo" element={<BioKominfo />} />

          {/* Informasi */}
          <Route path="/informasi/berita" element={<Berita />} />
          <Route path="/informasi/unduh" element={<Unduh />} />
        </Routes>
      </Layout>
    </Router>
  );
}
