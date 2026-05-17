import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Leaf, Dna, ArrowRight, Award, Microscope, 
  Quote, ChevronDown, FlaskConical, Calendar, GraduationCap 
} from 'lucide-react';
import { SectionHeading } from '@/src/components/ui/SectionHeading';
import { Counter } from '@/src/components/ui/Counter';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const stats = [
    { label: 'Tahun Berdiri', value: 1965 },
    { label: 'Mahasiswa Aktif', value: 1200, suffix: '+' },
    { label: 'Dosen & Staf', value: 45 },
    { label: 'Laboratorium', value: 12 },
  ];

  const advantages = [
    { 
      title: 'Akreditasi Unggul', 
      desc: 'Kurikulum standar nasional dan internasional yang menjamin mutu lulusan terbaik di Sumatera Utara.',
      icon: Award 
    },
    { 
      title: 'Fasilitas Modern', 
      desc: 'Laboratorium lengkap dengan teknologi molekuler terkini untuk riset dan penelitian mendalam.',
      icon: Microscope 
    },
    { 
      title: 'Hutan Kampus', 
      desc: 'Akses langsung ke ekosistem kampus hijau UNIMED yang berfungsi sebagai laboratorium alam raksasa.',
      icon: Leaf 
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden bg-primary">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=2000" 
            alt="Nature UNIMED" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/60 to-dark" />
        </motion.div>

        {/* Ambient Floating Elements */}
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-10 z-10 opacity-20 pointer-events-none"
        >
          <Leaf className="w-32 h-32 text-accent" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-5 z-10 opacity-10 pointer-events-none"
        >
          <Dna className="w-48 h-48 text-secondary" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-accent" />
              <span className="font-mono text-accent tracking-[0.3em] text-sm uppercase">Fakultas MIPA</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-tight"
            >
              Jurusan <span className="italic font-normal text-accent">Biologi</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 font-serif-alt italic mb-12 max-w-2xl"
            >
              Universitas Negeri Medan — Menjelajahi Kehidupan, Membangun Masa Depan Melalui Sains dan Pendidikan Berbasis Karakter.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <Link to="/contact" className="px-10 py-5 bg-accent text-primary font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-3 group">
                Kenali Kami
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/programs" className="px-10 py-5 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all">
                Program Studi
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer opacity-70"
          onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-white/50 text-xs font-mono tracking-widest uppercase">Eksplorasi</span>
          <ChevronDown className="text-accent w-6 h-6" />
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section id="stats" className="bg-primary py-12 relative z-30 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4">
                <span className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-white/60 font-mono text-xs uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informasi Jurusan Section */}
      <section className="py-24 bg-neutral overflow-hidden relative">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Informasi Jurusan Biologi" 
            subtitle="Membangun masa depan melalui pemahaman sains hayat yang mendalam di Universitas Negeri Medan."
          />
          
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-8">
              <h3 className="text-4xl md:text-5xl font-display font-bold text-primary italic leading-tight">
                Mengapa Biologi <span className="text-accent underline decoration-primary/10">FMIPA UNIMED?</span>
              </h3>
              
              <div className="space-y-6 text-primary/80 leading-relaxed text-lg font-serif-alt">
                <p>
                  Jurusan Biologi FMIPA UNIMED bukan sekadar tempat belajar, melainkan sebuah komunitas riset dan pendidikan yang berdedikasi tinggi. Kami mengombinasikan warisan akademik yang kuat sejak tahun 1965 dengan inovasi teknologi modern untuk menjawab tantangan biodiversitas global.
                </p>
                <p>
                  Mahasiswa kami dibekali dengan kurikulum berbasis proyek, akses ke 12 laboratorium terspesialisasi, dan bimbingan dari pakar biologi yang bereputasi nasional maupun internasional.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 py-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-primary">Pendidikan Karakter</h4>
                  <p className="text-sm text-primary/60">Mencetak lulusan yang cerdas secara intelektual dan memiliki integritas moral.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-primary">Riset Berkelanjutan</h4>
                  <p className="text-sm text-primary/60">Fokus pada eksplorasi kekayaan alam Sumatera Utara untuk manfaat luas.</p>
                </div>
              </div>

              <Link to="/profil/sejarah" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all group">
                Pelajari Lebih Lanjut (Sejarah Kami)
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="flex-1 relative">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1532187875605-1ef6c016b1ef?auto=format&fit=crop&q=80&w=1000" 
                  alt="Science and Nature" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </motion.div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 blob" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Eksplorasi Portal Biologi" 
            subtitle="Akses cepat ke berbagai layanan dan informasi penting di lingkungan Jurusan Biologi UNIMED." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Program Studi', 
                desc: 'Telusuri kurikulum dan profil lulusan S1 & S2.', 
                link: '/programs', 
                icon: GraduationCap,
                color: 'bg-blue-500/10 text-blue-600'
              },
              { 
                title: 'Berita & Agenda', 
                desc: 'Informasi terkini kegiatan dan prestasi civitas.', 
                link: '/informasi/berita', 
                icon: Calendar,
                color: 'bg-emerald-500/10 text-emerald-600'
              },
              { 
                title: 'Jejaring Alumni', 
                desc: 'Kolaborasi dan inspirasi dari lulusan hebat kami.', 
                link: '/profil/alumni', 
                icon: Award,
                color: 'bg-amber-500/10 text-amber-600'
              },
              { 
                title: 'Publikasi Ilmiah', 
                desc: 'Arsip jurnal dan karya ilmiah dosen & mahasiswa.', 
                link: '/publikasi', 
                icon: FlaskConical,
                color: 'bg-purple-500/10 text-purple-600'
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-primary/5 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", item.color)}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h4>
                <p className="text-sm text-primary/60 leading-relaxed mb-6">{item.desc}</p>
                <Link to={item.link} className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors">
                  Buka Halaman
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-primary p-12 rounded-[3.5rem] text-white flex flex-col justify-between relative overflow-hidden group">
               <div className="relative z-10">
                 <span className="text-accent text-xs font-mono font-bold uppercase tracking-[0.3em] mb-4 block">Akademik</span>
                 <h3 className="text-3xl md:text-4xl font-display font-bold italic mb-6 leading-tight">Mulai Perjalanan Anda di Program Sarjana & Magister.</h3>
                 <Link to="/programs" className="inline-flex items-center gap-3 text-white border-b-2 border-accent pb-1 font-bold">
                   Lihat Kurikulum
                   <ArrowRight className="w-5 h-5" />
                 </Link>
               </div>
               <div className="absolute right-0 bottom-0 w-64 h-64 opacity-10 group-hover:scale-110 transition-transform">
                 <GraduationCap className="w-full h-full" />
               </div>
            </div>
            <div className="bg-white p-12 rounded-[3.5rem] border border-primary/5 shadow-sm flex flex-col justify-between group">
               <div>
                 <span className="text-primary/40 text-xs font-mono font-bold uppercase tracking-[0.3em] mb-4 block">Penelitian</span>
                 <h3 className="text-3xl md:text-4xl font-display font-bold text-primary italic mb-6 leading-tight">Eksplorasi Hasil Riset dan Publikasi Ilmiah Terbaru.</h3>
                 <Link to="/publikasi" className="inline-flex items-center gap-3 text-accent font-bold">
                   Telusuri Jurnal
                   <ArrowRight className="w-5 h-5" />
                 </Link>
               </div>
               <div className="flex gap-4 mt-8">
                  <div className="h-2 w-12 bg-accent rounded-full" />
                  <div className="h-2 w-4 bg-primary/10 rounded-full" />
                  <div className="h-2 w-4 bg-primary/10 rounded-full" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Feature: Area of Focus */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading title="Bidang Fokus Kami" subtitle="Konsentrasi keilmuan yang dapat dipilih mahasiswa untuk mempertajam keahlian spesifik." />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              {[
                { title: 'Botani Tropis', desc: 'Mempelajari keanekaragaman flora Sumatera, morfologi, fisiologi, dan pemanfaatannya.', icon: Leaf },
                { title: 'Zoologi & Konservasi', desc: 'Studi tentang perilaku hewan, taksonomi, dan strategi konservasi satwa dilindungi.', icon: Microscope },
                { title: 'Mikrobiologi Dasar', desc: 'Eksplorasi dunia mikroskopis, bakteriologi, virologi, dan aplikasi bioteknologi.', icon: FlaskConical },
                { title: 'Pendidikan Inovatif', desc: 'Metodologi pengajaran biologi berbasis teknologi digital untuk sekolah masa depan.', icon: GraduationCap },
              ].map((focus, i) => (
                <motion.div 
                  key={i}
                  onMouseEnter={() => setActiveTab(i)}
                  className={cn(
                    "p-8 rounded-[2rem] border-2 transition-all cursor-pointer flex items-center gap-8",
                    activeTab === i ? "bg-light border-accent shadow-lg shadow-accent/10" : "bg-white border-transparent hover:border-light"
                  )}
                >
                  <div className={cn("p-4 rounded-2xl transition-colors", activeTab === i ? "bg-accent text-primary" : "bg-neutral text-primary/40")}>
                    <focus.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-display font-bold text-primary mb-1">{focus.title}</h4>
                    <p className="text-primary/60 text-sm leading-relaxed">{focus.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="rounded-[3rem] overflow-hidden aspect-square shadow-2xl relative"
                >
                  <img 
                    src={`https://images.unsplash.com/photo-${[
                      '1518531933037-91b2f5f229cc',
                      '1559757175-5700dde675bc',
                      '1579154219604-8461099f6497',
                      '1507413245164-6160d8298b31'
                    ][activeTab]}?auto=format&fit=crop&q=80&w=1000`} 
                    className="w-full h-full object-cover"
                    alt="Focus area"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-12">
                    <div>
                      <span className="font-mono text-accent text-xs uppercase tracking-widest mb-2 block">Highlight Keunggulan</span>
                      <h5 className="text-3xl font-display font-bold text-white">Laboratorium Terstandarisasi Internasional</h5>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="absolute -z-10 -top-10 -right-10 w-full h-full bg-light blob" />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="py-24 bg-neutral">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <SectionHeading title="Laboratorium & Fasilitas" subtitle="Infrastruktur lengkap yang mendukung iklim riset kolaboratif antara dosen dan mahasiswa." />
            <Link to="/programs" className="mb-6 group flex items-center gap-2 text-primary font-bold">
              Lihat Fasilitas Lengkap
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Lab Mikrobiologi', img: 'https://images.unsplash.com/photo-1579154219604-8461099f6497?auto=format&fit=crop&q=80&w=800' },
              { name: 'Rumah Kaca', img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800' },
              { name: 'Lab Zoologi', img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800' },
              { name: 'Herbarium', img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800' },
            ].map((fac, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-96 overflow-hidden rounded-[2.5rem] bg-dark"
              >
                <img src={fac.img} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt={fac.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-display font-bold text-white">{fac.name}</h3>
                  <div className="h-1 w-0 bg-accent mt-4 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News/Activities Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <SectionHeading title="Kegiatan & Berita" subtitle="Ikuti dinamika kehidupan akademik dan sosial di lingkungan Jurusan Biologi UNIMED." light />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { tag: 'Ekspedisi', title: 'Inventarisasi Flora di Hutan Tropis Bukit Lawang', date: '12 Mei 2026', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800' },
              { tag: 'Workshop', title: 'Seminar Internasional: Masa Depan Bioekonomi di Era Digital', date: '08 Mei 2026', img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800' },
              { tag: 'Prestasi', title: 'Mahasiswa Biologi Meraih Medali Emas di Olimpiade Nasional', date: '02 Mei 2026', img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800' },
            ].map((news, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/10 transition-colors group"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={news.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={news.title} />
                </div>
                <div className="p-10">
                  <span className="text-accent text-xs font-mono font-bold tracking-widest mb-4 block uppercase">{news.tag}</span>
                  <h4 className="text-2xl font-display font-bold mb-6 italic leading-snug group-hover:text-accent transition-colors">"{news.title}"</h4>
                  <div className="flex justify-between items-center text-sm text-white/50">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{news.date}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto space-y-10"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold text-primary italic leading-tight">
              Siap Menjadi Bagian Dari Penjaga Kehidupan?
            </h2>
            <p className="text-xl text-primary/70 font-serif-alt italic">
              Bergabunglah bersama kami di Jurusan Biologi UNIMED dan mulailah perjalanan eksploratif Anda hari ini.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <Link to="/contact" className="px-12 py-6 bg-primary text-white font-bold rounded-full hover:scale-105 transition-transform shadow-xl">
                Hubungi Kami
              </Link>
              <Link to="/programs" className="px-12 py-6 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all">
                Program Studi
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

