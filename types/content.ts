import {
    Boxes,
    BriefcaseBusiness,
    CalendarDays,
    ClipboardList,
    Github,
    Instagram,
    Layers3,
    Linkedin,
    Mail,
    Users,
} from "lucide-react";

import type {
    AboutStat,
    BPI,
    BidangDetail,
    ContactCard,
    FaqItem,
    GalleryItem,
    Testimonial,
} from "./types";

const HOME_ABOUT_STATS: AboutStat[] = [
    { value: "51", label: "Anggota Aktif", Icon: Users },
    { value: "5", label: "Event Tahunan", Icon: CalendarDays },
    { value: "15", label: "Program Kerja", Icon: BriefcaseBusiness },
];

const HOME_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quoteText:
        "HIMSI memiliki peran strategis sebagai wadah pengembangan potensi, intelektualitas, serta jiwa kepemimpinan mahasiswa Sistem Informasi. Melalui berbagai program kerja, kegiatan akademik maupun non-akademik, HIMSI berkomitmen untuk menciptakan ekosistem yang mendorong kolaborasi, inovasi, serta kontribusi nyata terhadap lingkungan kampus dan masyarakat luas.",
    name: "Muhammad Akbar",
    role: "Ketua Himpunan Mahasiswa Sistem Informasi",
    avatar: "/images/pengurus/bph/akbar.png",
  },
  {
    id: "t2",
    quoteText:
      "Apresiasi setinggi-tingginya untuk seluruh pengurus dan anggota yang telah bekerja dengan dedikasi, komitmen, dan semangat luar biasa🤍.",
    name: "Wasilah ",
    role: "Kepala Bidang PSDM",
    avatar: "/images/pengurus/psdm/sila.png",
  },
  {
    id: "t3",
    quoteText:
      "Di HIMSI UMDP, saya merasakan bagaimana riset dan inovasi berpadu dalam harmoni, menantang batas konvensional dan mengubah gagasan menjadi kenyataan.",
    name: "Adit Jans",
    role: "Kepala Bidang Litbang",
    avatar: "/images/pengurus/litbang/adit.png",
  },
  {
    id: "t4",
    quoteText:
      "Satu periode di HIMSI UMDP menjadi pengalaman paling berkesan yang membentuk cara saya memimpin, mengambil keputusan, dan menggerakkan tim.",
    name: "Tria Nanda Mughni",
    role: "Wakil Ketua Himpunan Mahasiswa Sistem Informasi",
    avatar: "/images/pengurus/bph/tria.png",
  },
  {
    id: "t5",
    quoteText:
      "Bergabung dengan HIMSI adalah keputusan terbaik—saya mendapat relasi baru, pengalaman organisasi yang nyata, dan ruang untuk berkembang setiap harinya.",
    name: "Muhammad Tegar R",
    role: "Kepala Bidang Sosial",
    avatar: "/images/pengurus/sosial/tegar.png",
  },
  {
    id: "t6",
    quoteText:
      "HIMSI isnt just an a ordinary organization to me but HIMSI is something that change my life. this is the place where i learn about everything not just about campus or organization thing but HIMSI taught me about life too. thank you for every moment, every lesson, every laugh, and every struggle we shared. thank you for accepting me as i am. here, i found my second family and ofc im so proud to be in this journey🤍.",
    name: "Aulia Syalsabila R.",
    role: "Koordinator Internal",
    avatar: "/images/pengurus/psdm/aca.png",
  },
  {
    id: "t7",
    quoteText:
      "Terimakasih untuk teman - teman Himsi selama satu periode ini, dan juga untuk kita yang sudah berjalan dan berkembang layaknya keluarga. Himsi from now , tomorow, and beyond 🤍.",
    name: "Mikhael Vito Wicaksono",
    role: "Staff Publikasi",
    avatar: "/images/pengurus/kominfo/vito.png",
  },
  {
    id: "t8",
    quoteText:
      "HIMSI marked the beginning of my journey as an active student in the organization. I gained many connections, knowledge, and soft skills that were very useful for me as an individual. Forever thankful that I joined this organization at the right place and at the right time.",
    name: "Gledys Apriliana",
    role: "Sekretaris",
    avatar: "/images/pengurus/bph/gladys.png",
  },
  {
    id: "t9",
    quoteText:
      "HIMSI bukan sekadar organisasi, tapi ruang tumbuh bagi mahasiswa Sistem Informasi.",
    name: "Angelia Oktarini",
    role: "Staff Publikasi",
    avatar: "/images/pengurus/kominfo/angel.png",
  },
  {
    id: "t10",
    quoteText:
      "Bersama HIMSI, saya belajar arti tanggung jawab, kerja sama, dan profesionalitas. HIMSI mengajarkan bahwa kolaborasi adalah kunci untuk mencapai tujuan bersama. HIMSI memberi saya pengalaman, relasi, dan kenangan yang tak terlupakan. Terima kasih HIMSI, telah menjadi wadah pembentuk karakter dan kepemimpinan.",
    name: "Rizky Apryandi Triadmojo",
    role: "Staff Kreatif",
    avatar: "/images/pengurus/kominfo/mojo.png",
  },
  {
    id: "t11",
    quoteText:
      "Masuk HIMSI bukan sekadar hadir untuk belajar. Tapi, berbagi dan berdampak.",
    name: "Ariadne Clarissa D. O.",
    role: "Koordinator Pemberdayaan dan Perkembangan Teknologi",
    avatar: "/images/pengurus/litbang/risa.png",
  },
  {
    id: "t12",
    quoteText:
      "to the best crew ever,  Being in the core team can be a lot, but y’all make it look easy. Love you guys for always keeping it real🤍",
    name: "Alya Putri Rizaldy",
    role: "Bendahara",
    avatar: "/images/pengurus/bph/alya.png",
  },
  {
    id: "t13",
    quoteText:
      "​HIMSI bukan hanya organisasi, tapi HIMSI juga merupakan ekosistem digital yang hidup, tempat di mana logika bertemu dengan kreativitas untuk mengompilasi masa depan yang lebih bermakna.",
    name: "Sri Ayu Agustini",
    role: "Staff Kolaborasi dan Kemitraan Sosial",
    avatar: "/images/pengurus/sosial/sri.png",
  },
  {
    id: "t14",
    quoteText:
      "Himsi tempat tumbuh, belajar, dan saling menguatkan💪🏻💪🏻💪🏻",
    name: "Rika Rahmawati",
    role: "Staff Eksternal",
    avatar: "/images/pengurus/psdm/rika.png",
  },
  {
    id: "t15",
    quoteText:
      "Semoga HIMSI tetap berjalan dengan baik, tetap aktif, dan tetap jadi tempat berkembangnya setiap orang yang pernah ada di dalamnya. Bukan cuma soal kegiatan, tapi juga soal kebersamaan dan proses yang dijalani bareng.",
    name: "Aqila Nike Indriani",
    role: "Staff Dana Usaha",
    avatar: "/images/pengurus/sosial/qila.png",
  },
];

const HOME_FAQS: FaqItem[] = [
  {
    q: "Gimana cara daftar HIMSI?",
    a: "Kamu bisa daftar saat Open Recruitment (Oprec) yang diumumkan di media sosial HIMSI UMDP. Isi formulir pendaftaran, selanjutnya ikuti seleksi yang ada.",
  },
  {
    q: "Apakah ada syarat semester?",
    a: "Umumnya terbuka untuk mahasiswa Sistem Informasi UMDP dari 2 - 4. Saat Oprec.",
  },
  {
    q: "Kegiatannya seberapa sering?",
    a: "Kegiatan rutin biasanya mingguan/bulanan sesuai program kerja divisi. Selain itu ada event tahunan seperti seminar, workshop, dan kegiatan sosial.",
  },
  {
    q: "Bisa ikut walau belum punya pengalaman?",
    a: "Bisa banget. Kamu akan dibimbing dari dasar, ikut pelatihan internal, dan belajar langsung lewat kepanitiaan & program kerja.",
  },
  {
    q: "Apa benefit jadi anggota?",
    a: "Relasi lebih luas, skill organisasi & teamwork, pengalaman event, peluang pelatihan/sertifikasi, dan portofolio untuk karir.",
  },
  {
    q: "Kontak admin siapa?",
    a: "Silakan hubungi admin HIMSI via Instagram resmi atau WhatsApp yang dicantumkan saat Open Recruitment.",
  },
];

const HOME_CONTACT_CARDS: ContactCard[] = [
  {
    title: "Linkedin",
    value: "HIMSI MDP",
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/himpunan-mahasiswa-sistem-informasi-universitas-multi-data-palembang/",
    tint: "from-blue-600/20",
    iconColor: "text-blue-600",
  },
  {
    title: "Email",
    value: "himsi@mhs.mdp.ac.id",
    Icon: Mail,
    href: "mailto:himsi@mhs.mdp.ac.id",
    tint: "from-sky-500/15",
    iconColor: "text-sky-500",
  },
  {
    title: "Instagram",
    value: "@himsi.umdp",
    Icon: Instagram,
    href: "https://www.instagram.com/himsi.umdp/",
    tint: "from-pink-500/15",
    iconColor: "text-pink-500",
  },
  {
    title: "Github",
    value: "Himsi-UMDP",
    Icon: Github,
    href: "https://github.com/Himsi-UMDP",
    tint: "from-slate-800/20",
    iconColor: "text-slate-800",
  },
];

const ABOUT_STATS: AboutStat[] = [
  { value: "50+", label: "Anggota Aktif", Icon: Users },
  { value: "4", label: "Bidang", Icon: Layers3 },
  { value: "10", label: "Divisi", Icon: Boxes },
  { value: "15+", label: "Program Kerja", Icon: ClipboardList },
];

const ABOUT_GALLERY: GalleryItem[] = [
  {
    src: "/images/dokumentasi/ldo.jpg",
    alt: "Kegiatan HIMSI 1",
    title: "Latihan Dasar Kepemimpinan & Organisasi (LDO)",
    proker: "Proker: PSDM",
    purpose: "Meningkatkan wawasan mahasiswa lewat pelatihan kepemimpinan dan organisasi.",
  },
  {
    src: "/images/dokumentasi/ksi.jpg",
    alt: "Kegiatan HIMSI 2",
    title: "Kampung Sistem Informasi (KSI)",
    proker: "Proker: Umum",
    purpose: "Meningkatan solidaritas dan kebersamaan antar mahasiswa Sistem Informasi.",
  },
  {
    src: "/images/dokumentasi/pkkmb.png",
    alt: "Kegiatan HIMSI 3",
    title: "Perkenalan Kehidupan Kampus Mahasiswa Baru (PKKMB)",
    proker: "Proker: Umum",
    purpose:
      "Memperkenalkan kehidupan kampus kepada mahasiswa baru terutama Mahasiswa Prodi Sistem Informasi.",
  },
  {
    src: "/images/dokumentasi/safari.jpg",
    alt: "Kegiatan HIMSI 4",
    title: "Safari Ormawa",
    proker: "",
    purpose:
      "Sharing & Evaluasi antar ormawa untuk meningkatkan sinergi dan kolaborasi di lingkungan kampus.",
  },
  {
    src: "/images/dokumentasi/lomba.png",
    alt: "Kegiatan HIMSI 5",
    title: "Lomba & Kompetisi Antar Mahasiswa",
    proker: "",
    purpose:
      "Meningkatkan semangat persaingan dan keterampilan mahasiswa melalui berbagai lomba dan kompetisi.",
  },
  {
    src: "/images/dokumentasi/podcast.jpeg",
    alt: "Kegiatan HIMSI 6",
    title: "Kupas KSI",
    proker: "Proker: Kominfo",
    purpose:
      "Menyelenggarakan acara diskusi dan pembahasan topik-topik menarik dalam dunia sistem informasi.",
  },
];

const KABINET_BPI_DATA: BPI[] = [
  {
    name: "Muhammad Akbar",
    role: "Ketua",
    avatar: "/images/pengurus/bph/akbar.png",
  },
  {
    name: "Tria Nanda Mughny",
    role: "Wakil Ketua",
    avatar: "/images/pengurus/bph/tria.png",
  },
  {
    name: "Putri Fathonah",
    role: "Sekretaris 1",
    avatar: "/images/pengurus/bph/puput.png",
  },
  {
    name: "Gledys Apriliana",
    role: "Sekretaris 2",
    avatar: "/images/pengurus/bph/gladys.png",
  },
  {
    name: "Marselyna Fitri M.",
    role: "Bendahara 1",
    avatar: "/images/pengurus/bph/marsel.png",
  },
  {
    name: "Alya Putri Rizaldy ",
    role: "Bendahara 2",
    avatar: "/images/pengurus/bph/alya.png",
  },
];

const KABINET_BIDANG: BidangDetail[] = [
  {
    id: "psdm",
    name: "PSDM",
    logo: "/images/bidang/psdm.png",
    desc: "Mengembangkan sumber daya anggota, membangun budaya organisasi, serta mengelola program pengembangan internal dan eksternal.",
    leaders: [
      {
        name: "Wasilah Maulia",
        role: "Kepala Bidang PSDM",
        avatar: "/images/pengurus/psdm/sila.png"
      },
      { 
        name: "Achmad Syamiri", 
        role: "Sekretaris Bidang PSDM",
        avatar: "/images/pengurus/psdm/syam.png"
      },
      { 
        name: "Olivia", 
        role: "Koordinator Eksternal",
        avatar: "/images/pengurus/psdm/oliv.png"
      },
      { 
        name: "Aulia Syalsabila R.", 
        role: "Koordinator Internal",
        avatar: "/images/pengurus/psdm/aca.png"
      },
    ],
    divisions: [
      {
        name: "Eksternal",
        members: [
          { name: "Aprillyani Rokky", 
            role: "Staff Eksternal", 
            avatar: "/images/pengurus/psdm/april.png" 
          },
          { name: "Yuan Ramatullah", 
            role: "Staff Eksternal", 
            avatar: "/images/pengurus/psdm/yuan.png" 
          },
          { name: "Rika Rahmawati", 
            role: "Staff Eksternal", 
            avatar: "/images/pengurus/psdm/rika.png" 
          },
          { name: "Agus Firman", 
            role: "Staff Eksternal", 
            avatar: "/images/pengurus/psdm/agus.png" 
          },
        ],
      },
      {
        name: "Internal",
        members: [
          { name: "Joy Syukur T. B. D.", 
            role: "Staff Internal", 
            avatar: "/images/pengurus/psdm/joy.png" 
          },
          { name: "M. Doni Pranata", 
            role: "Staff Internal", 
            avatar: "/images/pengurus/psdm/doni.png" 
          },
          { name: "Nabila Salwa Z.", 
            role: "Staff Internal", 
            avatar: "/images/pengurus/psdm/salwa.png" 
          },
        ],
      },
    ],
    workPrograms: [
      {
        title: "Musyawarah Besar",
        image: "/images/dokumentasi/mubes.png",
        description:
          "Forum tertinggi organisasi untuk laporan pertanggungjawaban, evaluasi, pembahasan AD/ART, dan pemilihan kepengurusan periode berikutnya.",
      },
      {
        title: "BUKBER INCLUDE MEET & GREET HIMSI",
        image: "/images/dokumentasi/psdm1.jpg",
        description:
          "Kegiatan buka puasa bersama sekaligus sesi perkenalan dan keakraban antar anggota untuk mempererat silaturahmi dan kekompakan.",
      },
      {
        title: "Latihan Dasar Kepemimpinan & Organisasi (LDO)",
        image: "/images/dokumentasi/ldo.jpg",
        description:
          "Pelatihan dasar untuk membekali anggota dengan mindset kepemimpinan, etika organisasi, kedisiplinan, dan kerja tim.",
      },
      {
        title: "Carrer Preparation with HIMSI",
        image: "/images/dokumentasi/psdm3.jpeg",
        description:
          "Program pengembangan karier berisi sharing, mentoring, dan persiapan CV/LinkedIn, interview, serta insight dunia kerja dan magang.",
      },
      {
        title: "KUNJUNGAN EKSTERNAL PSDM",
        image: "/images/dokumentasi/eksternal.png",
        description:
          "Kegiatan kunjungan/benchmarking ke organisasi eksternal untuk memperluas relasi, bertukar wawasan, dan belajar sistem pengembangan SDM.",
      },
    ],
  },
  {
    id: "litbang",
    name: "Litbang IT",
    logo: "/images/bidang/litbang.png",
    desc: "Fokus pada riset, pengembangan, dan inovasi teknologi untuk mendukung kebutuhan organisasi dan pengembangan skill anggota.",
    leaders: [
      { 
        name: "Adit Jansa", 
        role: "Kepala Bidang Litbang IT",
        avatar: "/images/pengurus/litbang/adit.png" 
      },
      { 
        name: "Achmad Faiz Yudha Ramadhan", 
        role: "Sekretaris Bidang Litbang IT",
        avatar: "/images/pengurus/litbang/faiz.png" 
      },
      { 
        name: "M. Rifqan Zalbina", 
        role: "Koordinator Desain Interaktif dan Rekayasa Web Aplikasi",
        avatar: "/images/pengurus/litbang/rifqan.png" 
      },
      { 
        name: "Ariadne Clarissa D. O.", 
        role: "Koordinator Pemberdayaan dan Perkembangan Teknologi",
        avatar: "/images/pengurus/litbang/risa.png" 
      },
    ],
    divisions: [
      {
        name: "Pemberdayaan & Perkembangan Teknologi",
        members: [
          { 
            name: "Erika", 
            role: "Staff Pemberdayaan dan Perkembangan Teknologi",
            avatar: "/images/pengurus/litbang/erika.png" 
          },
          { 
            name: "Ardelia Lona D.", 
            role: "Staff Pemberdayaan dan Perkembangan Teknologi",
            avatar: "/images/pengurus/litbang/ardelia.png" 
          },
          { 
            name: "Wahyu Putra Satrio", 
            role: "Staff Pemberdayaan dan Perkembangan Teknologi",
            avatar: "/images/pengurus/litbang/wahyu.png" 
          },
        ],
      },
      {
        name: "Desain Interaktif dan Rekayasa Web Aplikasi",
        members: [
          { 
            name: "Citra Fadilah H.", 
            role: "Staff Desain Interaktif dan Rekayasa Web Aplikasi",
            avatar: "/images/pengurus/litbang/citra.png" 
          },
          { 
            name: "Angelica Izabella", 
            role: "Staff Desain Interaktif dan Rekayasa Web Aplikasi",
            avatar: "/images/pengurus/litbang/angel.png" 
          },
        ],
      },
    ],
    workPrograms: [
      {
        title: "Redesign Web HIMSI",
        image: "/images/dokumentasi/web.png",
        description:
          "Proyek perombakan tampilan dan struktur website HIMSI agar lebih modern, responsif, dan mudah digunakan, mulai dari desain hingga implementasi.",
      },
      {
        title: "TRIKOLOGI",
        image: "/images/dokumentasi/trikologi.png",
        description:
          "Kegiatan publikasi dan dokumentasi media HIMSI melalui konten informasi, desain visual, dan kreativitas branding di berbagai platform.",
      },
      {
        title: "TRIKOLOGI",
        image: "/images/dokumentasi/trikologi1.png",
        description:
          "Kegiatan publikasi dan dokumentasi media HIMSI melalui konten informasi, desain visual, dan kreativitas branding di berbagai platform.",
      },
      {
        title: "Manage Discord",
        image: "/images/dokumentasi/discord.png",
        description:
          "Pengelolaan Discord HIMSI sebagai pusat komunikasi, informasi, dan koordinasi anggota, termasuk struktur channel, roles, dan moderasi.",
      },
      {
        title: "Pelatihan OBS",
        image: "/images/dokumentasi/obs.png",
        description:
          "Pelatihan penggunaan OBS untuk kebutuhan streaming dan produksi acara, mencakup setup scene, audio, overlay, dan teknis siaran.",
      },
      {
        title: "Hack-Hati",
        image: "/images/soon.png",
        description:
          "Seminar dan workshop berbasis AI untuk siswa SMA, berfokus pada pengenalan teknologi, praktik langsung, dan pengembangan kreativitas digital.",
      },
    ],
  },
  {
    id: "sosial",
    name: "Sosial",
    logo: "/images/bidang/sosial.png",
    desc: "Menjalankan program sosial, pemberdayaan, serta kolaborasi yang berdampak bagi mahasiswa dan masyarakat.",
    leaders: [
      { 
        name: "Muhammad Tegar R.", 
        role: "Kepala Bidang Sosial",
        avatar: "/images/pengurus/sosial/tegar.png"
      },
      { 
        name: "Inaya Yeltama", 
        role: "Sekretaris Bidang Sosial",
        avatar: "/images/pengurus/sosial/naya.png"
      },
      { 
        name: "Muhammad Nasrudin", 
        role: "Koordinator Sosial Kemasyarakatan",
        avatar: "/images/pengurus/sosial/nasrudin.png"
      },
      { 
        name: "Nabila Syahwalrani", 
        role: "Koordinator Dana Usaha",
        avatar: "/images/pengurus/sosial/bila.png"
      },
      { 
        name: "M. Ilham Bintang", 
        role: "Koordinator Kolaborasi dan Kemitraan Sosial",
        avatar: "/images/pengurus/sosial/ilham.png"
      },
    ],
    divisions: [
      {
        name: "Sosial Kemasyarakatan",
        members: [
          { 
            name: "Fira Ramaita",
            role: "Staff Sosial Kemasyarakatan",
            avatar: "/images/pengurus/sosial/fira.png"
          },
          { 
            name: "Cindy Aulia",
            role: "Staff Sosial Kemasyarakatan",
            avatar: "/images/pengurus/sosial/cindy.png"
          },
          { 
            name: "Muhammad Adhe Fathan",
            role: "Staff Sosial Kemasyarakatan",
            avatar: "/images/pengurus/sosial/fathan.png"
          },
        ],
      },
      {
        name: "Dana Usaha",
        members: [
          { 
            name: "Aqila Nike Indriani", 
            role: "Staff Dana Usaha",
            avatar: "/images/pengurus/sosial/qila.png"
          },
          { 
            name: "Siti Chairunisah Suyta", 
            role: "Staff Dana Usaha",
            avatar: "/images/pengurus/sosial/nisa.png"
          },
        ],
      },
      {
        name: "Kolaborasi & Kemitraan Sosial",
        members: [
          { 
            name: "Sri Ayu Agustini", 
            role: "Staff Kolaborasi dan Kemitraan Sosial",
            avatar: "/images/pengurus/sosial/sri.png"
          },
          // { 
          //   name: "Muhammad Arsya P.", 
          //   role: "Staff Kolaborasi dan Kemitraan Sosial",
          //   avatar: "/images/pengurus/sosial/arsya.png"
          // },
        ],
      },
    ],
    workPrograms: [
      {
        title: "HIMSI Berbagi",
        image: "/images/dokumentasi/sosial1.png",
        description:
          "Kegiatan berbagi dan aksi sosial untuk membantu masyarakat sekitar, seperti penyaluran donasi dan program kepedulian HIMSI.",
      },
      {
        title: "Bazar Sosial",
        image: "/images/soon.png",
        description:
          "Kegiatan berjualan produk takjil selama Ramadan sebagai bentuk penggalangan dana untuk mendukung program sosial dan kegiatan HIMSI.",
},
      {
        title: "Dana Pembuatan Baju & Lanyard",
        image: "/images/dokumentasi/sosial2.jpeg",
        description:
          "Program pengadaan dana untuk produksi atribut HIMSI (baju & lanyard) sebagai identitas anggota dan penunjang kegiatan organisasi.",
      },
      {
        title: "Hack-Hati",
        image: "/images/soon.png",
        description:
          "Seminar dan workshop berbasis AI untuk siswa SMA, berfokus pada pengenalan teknologi, praktik langsung, dan pengembangan kreativitas digital.",
      },
    ],
  },
  {
    id: "kominfo",
    name: "Kominfo",
    logo: "/images/bidang/kominfo.png",
    desc: "Mengelola komunikasi informasi, publikasi, dokumentasi, dan konten kreatif untuk meningkatkan citra HIMSI.",
    leaders: [
      { 
        name: "Abiyyu Al Thoriq Z.", 
        role: "Kepala Bidang Kominfo",
        avatar: "/images/pengurus/kominfo/abi.png"
      },
      { 
        name: "Balqis Mutmainnah T.", 
        role: "Sekretaris Bidang Kominfo",
        avatar: "/images/pengurus/kominfo/balqis.png"
      },
      { 
        name: "Mutiara Astri", 
        role: "Koordinator Dokumentasi",
        avatar: "/images/pengurus/kominfo/astri.png"
      },
      { 
        name: "Muthia Syakirah", 
        role: "Koordinator Kreatif",
        avatar: "/images/pengurus/kominfo/mutia.png"
      },
      { 
        name: "M. Frendi R.", 
        role: "Koordinator Publikasi",
        avatar: "/images/pengurus/kominfo/frendi.png"
      },
    ],
    divisions: [
      {
        name: "Dokumentasi",
        members: [
          { 
            name: "Athallah Zaki C. A.", 
            role: "Staff Dokumentasi",
            avatar: "/images/pengurus/kominfo/ata.png"
          },
          { 
            name: "Sherafli Rusli", 
            role: "Staff Dokumentasi",
            avatar: "/images/pengurus/kominfo/kipli.png"
          },
        ],
      },
      {
        name: "Kreatif",
        members: [
          { 
            name: "Rizky Apryandi T.", 
            role: "Staff Kreatif",
            avatar: "/images/pengurus/kominfo/mojo.png"
          },
          { 
            name: "Nada Salsabilah", 
            role: "Staff Kreatif",
            avatar: "/images/pengurus/kominfo/nada.png"
          },
        ],
      },
      {
        name: "Publikasi",
        members: [
          { 
            name: "Angelia Oktarini", 
            role: "Staff Publikasi",
            avatar: "/images/pengurus/kominfo/angel.png"
          },
          { 
            name: "Taqiyya Safira S.", 
            role: "Staff Publikasi",
            avatar: "/images/pengurus/kominfo/qiya.png"
          },
          { 
            name: "Mikhael Vito W.", 
            role: "Staff Publikasi",
            avatar: "/images/pengurus/kominfo/vito.png"
          },
        ],
      },
    ],
    workPrograms: [
      {
        title: "Kupas KSI",
        image: "/images/dokumentasi/podcast.jpeg",
        description:
          "Program diskusi/podcast yang membahas seputar kegiatan Kampung Sistem Informasi (KSI), termasuk persiapan, rundown, highlight acara",
      },
      {
        title: "HimPost",
        image: "/images/dokumentasi/himpost.jpeg",
        description:
          "Konten informatif untuk menyampaikan pengumuman, informasi kegiatan, dan update internal HIMSI secara jelas di media sosial.",
      },
      {
        title: "Dokumentasi Kegiatan Internal & Eksternal",
        image: "/images/dokumentasi/internal.jpeg",
        description:
          "Pendokumentasian foto dan video seluruh kegiatan sebagai arsip himpunan sekaligus materi publikasi dan laporan.",
      },
      {
        title: "HimPromote",
        image: "/images/dokumentasi/lomba.png",
        description:
          "Pembuatan materi promosi untuk meningkatkan awareness kegiatan HIMSI, seperti poster, teaser, dan publikasi lomba/event.",
      },
      {
        title: "HimFeed",
        image: "/images/dokumentasi/himfeed.jpeg",
        description:
          "Pembuatan dan penjadwalan konten feed media sosial HIMSI (informasi, edukasi, dan dokumentasi) agar tampilan rapi, konsisten, dan mudah dipahami.",
      },
      {
        title: "Design Lanyard",
        image: "/images/dokumentasi/lanyard.jpeg",
        description:
          "Perancangan desain lanyard sebagai identitas resmi HIMSI yang selaras dengan branding, warna, dan kebutuhan atribut kegiatan.",
      },
    ],
  },
];

export const CONTENT = {
    home: {
        aboutStats: HOME_ABOUT_STATS,
        testimonials: HOME_TESTIMONIALS,
        faqs: HOME_FAQS,
        contactCards: HOME_CONTACT_CARDS,
    },
    about: {
        stats: ABOUT_STATS,
        gallery: ABOUT_GALLERY,
    },
    kabinet: {
        bpi: KABINET_BPI_DATA,
        bidang: KABINET_BIDANG,
    },
    aspirasi: {},
} as const;

export type Content = typeof CONTENT;
