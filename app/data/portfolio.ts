export const personalInfo = {
  name: "Msy Rizkia Yuniandari, S.Kom",
  shortName: "Rizkia",
  role: "Front-End Developer",
  tagline: "Front-End Developer & UI/UX Enthusiast",
  email: "msyrizkiayuniandari1@gmail.com",
  phone: "+62 82248472562",
  location: "Palembang, South Sumatera",
  linkedin:
    "https://www.linkedin.com/in/msy-rizkia-yuniandari-a01938295",
  cvLink:"https://drive.google.com/file/d/1j3DqVwnSPXD8wTEwT20M_KgBERuBLLzS/view?usp=drive_link",
};

export const about = {
  greeting: "Hi, I'm Rizkia!",
  description:
    "Saya lulusan S1 Teknik Informatika dari Universitas Sriwijaya dengan minat yang kuat pada Front-End Development, Web Development, dan UI/UX Design. Saya memiliki pengalaman merancang dan mengembangkan aplikasi web responsif menggunakan Next.js, termasuk mengintegrasikannya dengan REST API, MQTT, dan WebSocket. Memiliki kemampuan analisis yang baik, teliti, problem-solving serta mampu bekerja secara terstruktur baik secara individu maupun tim. Saya selalu antusias mempelajari teknologi baru dan siap memberikan kontribusi terbaik di setiap proyek yang saya jalani.",
};

export const educations = [
  {
    institution: "Universitas Sriwijaya",
    location: "Inderalaya, Indonesia",
    period: "Agu 2021 – Jul 2025",
    degree: "Sarjana Ilmu Komputer",
    gpa: "3.90 / 4.00",
    thesis:
      "Perbandingan Metode Naive Bayes Classifier dan Random Forest untuk Klasifikasi Film Berdasarkan Usia Penonton",
    logo:"/unsri.png"
  },
  {
    institution: "SMA Negeri 1 Palembang",
    location: "Palembang, Indonesia",
    period: "Jul 2018 – Mei 2021",
    degree: "IPA",
    logo:"/smansa.jpg"
  },
];

export const experience = [
  {
    company: "PT. Venambak Kail Dipantara",
    location: "Sidoarjo, Indonesia",
    period: "Des 2025 – Jun 2026",
    position:
      "Front-End Engineer Intern – Maganghub Kemnaker Internship Program",
    description: [
      "Melakukan re-design tampilan aplikasi mobile Venambak untuk platform Android, termasuk penambahan fitur marketplace dan kontrol device guna memperluas fungsionalitas aplikasi.",
      "Merancang dan mengimplementasikan website real-time monitoring, company profile, dan web CRM guna mendukung kebutuhan operasional perusahaan.",
      "Mengembangkan dan memelihara website perusahaan menggunakan Next.js guna meningkatkan fungsionalitas, performa, dan pengalaman pengguna secara keseluruhan.",
      "Mengintegrasikan REST API, MQTT, dan WebSocket ke dalam arsitektur front-end untuk mendukung pembaruan data secara real-time.",
      "Menangani debugging pada sisi front-end serta membantu proses deployment website, termasuk menyelesaikan berbagai bug penting dan mendukung konfigurasi server.",
    ],
  },
];

export const projects = [
  {
    slug: "project-1",
    title: "SerenePath",

    description:
      "SerenePath adalah aplikasi pendukung kesehatan mental yang dirancang khusus untuk remaja yang menghadirkan berbagai fitur seperti Daily Conditions untuk memantau suasana hati, Serene Article untuk konten edukatif, Hotline untuk akses cepat ke layanan konseling, Music Therapy untuk relaksasi, serta About Mental Health yang menyediakan informasi penting seputar kesehatan mental. Seluruh fitur ini dirancang untuk membantu remaja menjaga kesehatan mental mereka secara mandiri dan berkelanjutan.",

    role: "Cloud Computing",

    category:
      "Final Project at Bangkit Led by Google, GoTo and Traveloka",

    responsibilities: [
      "Membantu tim dalam merancang aplikasi mobile.",
      "Membuat dan mengelola basis data serta layanan penyimpanan.",
      "Melakukan deployment model machine learning menggunakan Vertex AI dan NodeJS untuk membangun API endpoint.",
      "Mengelola layanan logging, monitoring, dan alerting.",
      "Melakukan diskusi dan review bersama tim untuk memastikan fitur berjalan sesuai kebutuhan.",
    ],

    collaboration: [
      "Mobile Development Cohort.",
      "Machine Learning Cohort",
    ],

    prototype: {
      images: [
        "/projects/project-1/serene1.png",
        "/projects/project-1/serene2.png",
        "/projects/project-1/serene3.png",
        "/projects/project-1/serene4.png",
        "/projects/project-1/serene5.png",
        "/projects/project-1/serene6.png",
        "/projects/project-1/serene7.png",
        "/projects/project-1/serene8.png",
      ],

    },

    image: "/projects/project-1/logo.jpg",

    technologies: [
      "Cloud",
      "Debugging",
    ],
  },

  {
    slug: "project-2",
    title: "RevoU Coding Camp Project",

    description:
      "RevoU merupakan platform edukasi daring asal Indonesia yang menghadirkan bootcamp dan kursus berbasis kebutuhan industri di bidang keterampilan digital, seperti Digital Marketing, Data Analytics, Software Engineering, dan lainnya, guna mempersiapkan individu untuk berkarier di era ekonomi digital.",

    role: "Participants",

    category: "Coding Camp Project",

    responsibilities: [
      "Melakukan slicing layout berdasarkan mockup serta melengkapi halaman profil dengan banner foto, gambaran umum perusahaan, serta visi dan misi.",
      "Menerapkan responsif desain pada seluruh halaman, baik untuk tampilan desktop maupun mobile."
    ],

    collaboration: [
    ],

    prototype: {
      images: [
        "/projects/project-2/revou1.png",
        "/projects/project-2/revou2.png",
        "/projects/project-2/revou3.png",
        "/projects/project-2/revou4.png",
        "/projects/project-2/revou5.png",
      ],
      link: "https://github.com/rizkiayuniandari/CodingCamp-17Nov2025-Msy-Rizkia-Yuniandari.git",
    },

    image: "/projects/project-2/revou1.png",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },

  {
    slug: "project-3",
    title: "Website CRM",

    description:
      "Membangun website Admin CRM yang dilengkapi peta interaktif untuk memvisualisasikan sebaran perangkat Venambak di seluruh Indonesia. Platform ini juga mencakup dashboard analitik penjualan, pengelolaan data pelanggan (CRUD), serta pencatatan riwayat pesanan secara lengkap guna mendukung pengelolaan data pelanggan dan pemantauan transaksi.",

    role: "Frontend Engineer Intern",

    category:
      "Intern Project at PT. Venambak Kail Dipantara",

    responsibilities: [
      "Merancang UI/UX responsif untuk website Admin CRM guna memastikan pengalaman pengguna yang optimal, baik pada perangkat desktop maupun mobile.",
      "Mengimplementasikan desain antarmuka menggunakan Next.js dan TypeScript.",
      "Menerapkan fungsi CRUD untuk mendukung pengelolaan data secara efisien.",
      "Mengintegrasikan REST API untuk mengelola data pelanggan, mencakup proses pembuatan, pengambilan, pembaruan, dan penghapusan data.",
      "Melakukan debugging, troubleshooting, dan optimasi performa guna menjaga stabilitas dan keandalan aplikasi.",
      "Membantu proses deployment serta troubleshooting sisi server untuk mendukung rilis ke tahap produksi.",
    ],

    collaboration: [
      "Backend Engineer",
      "Project Manager",
    ],

    prototype: {
      images: [
        "/projects/project-3/crm1.png",
        "/projects/project-3/crm2.png",
        "/projects/project-3/crm3.png",
        "/projects/project-3/crm4.png",
        "/projects/project-3/crm5.png",
        "/projects/project-3/crm6.png",
        "/projects/project-3/crm7.png",
      ],
      link: "https://www.figma.com/proto/vCMhrY1ZmZ3WaiwLclhsYX/web-admin-FIX?node-id=317-1049&p=f&t=bKjjvMsRQr6Ls8rF-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=317%3A1049",
    },

    image: "/projects/project-3/crm1.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "React.js",
      "REST API",
    ],
  },

  {
    slug: "project-4",
    title: "IoT Monitoring Dashboard",

    description:
      "Mengembangkan dashboard monitoring IoT berbasis web untuk manajemen perangkat secara real-time. Platform ini memungkinkan pengguna untuk memantau berbagai perangkat, melihat status online/offline, mengendalikan perangkat dari jarak jauh, mengatur jadwal operasional, serta memantau data spesifik dari masing-masing perangkat. Perangkat Venjet menampilkan data konsumsi energi, sementara perangkat Sensor menyediakan parameter kualitas air secara real-time, meliputi pH, suhu, salinitas, ORP, DO, dan TDS.",

    role: "Frontend Engineer Intern",

    category:
      "Intern Project at PT. Venambak Kail Dipantara",

    responsibilities: [
      "Merancang UI/UX responsif guna memastikan pengalaman pengguna yang optimal, baik pada perangkat desktop maupun mobile.",
      "Mengimplementasikan desain antarmuka menggunakan Next.js dan TypeScript.",
      "Mengintegrasikan REST API, MQTT, dan WebSocket untuk mendukung komunikasi data secara real-time serta pemantauan perangkat.",
      "Melakukan debugging, troubleshooting, dan optimasi performa guna menjaga stabilitas dan keandalan aplikasi.",
    ],

    collaboration: [
      "Backend Engineer",
      "Software Engineer",
      "Project Manager",
    ],

    confidentialNote: 
      "*Karena adanya perjanjian kerahasiaan, hasil akhir dari proyek ini tidak dapat dipublikasikan.",

    prototype: {
      images: [],
      link: "#",
    },

    image: "/projects/project-4/monitoring.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "REST API",
      "MQTT",
      "WebSocket",
    ],

  },

  {
    slug: "project-5",
    title: "Company Profile Website",

    description:
      "Mengembangkan dan mengimplementasikan website company profile yang responsif menggunakan Next.js dan TypeScript, menghadirkan tampilan modern dan mudah digunakan pada perangkat desktop maupun mobile. Membangun dan mengoptimalkan halaman-halaman utama, termasuk Products, Services, Media, Gallery, Careers, dan Team, serta bekerja sama secara langsung dengan tim konten untuk memastikan integrasi konten yang akurat, konsistensi desain, dan pengalaman pengguna yang intuitif.",

    role: "Frontend Engineer Intern",

    category:
      "Intern Project at PT. Venambak Kail Dipantara",

    responsibilities: [
      "Membangun dan memelihara website company profile yang responsif menggunakan Next.js dan TypeScript, dengan fokus pada optimasi performa dan kemudahan penggunaan di perangkat desktop maupun mobile.",
      "Melakukan re-design pada beberapa halaman website guna meningkatkan kemudahan penggunaan, konsistensi visual, dan pengalaman pengguna.",
      "Membangun dan mengoptimalkan halaman-halaman utama, termasuk Products, Services, Media, Gallery, Careers, dan Team.",
      "Bekerja sama secara langsung dengan tim konten untuk mengintegrasikan dan menyajikan konten secara akurat sambil menjaga konsistensi desain.",
      "Melakukan debugging, troubleshooting, dan perbaikan bug pada sisi front-end guna meningkatkan stabilitas dan performa aplikasi.",
      "Berperan aktif dalam code review dan pengujian aplikasi untuk menjaga kualitas kode serta performa sistem secara berkelanjutan.",
    ],

    collaboration: [
      "Tim Konten",
      "Backend Engineer",
      "Fullstack Developer",
      "Project Manager",
    ],

    prototype: {
      images: [],
      link: "#",
    },

    image: "/projects/project-5/venambak.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "React.js",
    ],
  },
];

export const certifications = [
  {
    title: "Program Pemagangan Lulusan Perguruan Tinggi Maganghub",
    organization: "Kemnaker",
    date: "Jun 2026",
  },
  {
    title: "Intro to Software Engineering",
    organization: "RevoU",
    date: "Nov 2025",
  },
  {
    title: "Training MSIB as Cloud Computing Cohort",
    organization:
      "Bangkit Academy by Google, GoTo and Traveloka",
    date: "Jan 2024",
  },
  {
    title: "English for Business Communication",
    organization: "The British Institute",
    date: "Jan 2024",
  },
  {
    title:
      "Seminar Opening Ceremony Universities Virtual Career Expo 2024",
    organization: "CDC Sriwijaya University",
    date: "Okt 2024",
  },
  {
    title:
      "Seminar Digital Transformation: Elevating Customer Experience in a Changing World",
    organization: "Tugu Insurance",
    date: "Okt 2024",
  },
  {
    title: "Seminar Start, Grow and Manage a Tech Startup",
    organization: "Geek Academy",
    date: "Sep 2023",
  },
  {
    title: "Certificate of Participation in The 9th English Competition",
    organization: "ALSA Sriwijaya University",
    date: "Okt 2018",
  },
];

export const hardSkills = [
  "HTML",
  "CSS",
  "Next.js",
  "React.js",
  "TypeScript",
  "Python",
  "JavaScript",
  "MySQL",
  "Microsoft Office",
];

export const softSkills = [
  "Kemampuan Analitis",
  "Manajemen Waktu",
  "Kerja Sama Tim",
  "Ketelitian",
  "Kemampuan Beradaptasi",
];

export const languages = [
  {
    name: "Bahasa Indonesia",
    level: "Mahir",
  },
  {
    name: "Bahasa Inggris",
    level: "B1 Menengah",
  },
];