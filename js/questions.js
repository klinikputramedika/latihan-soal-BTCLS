const questions = [

    // =====================================================
    // A. BLS & CARDIAC ARREST
    // =====================================================

    {
        id: 1,
        topic: "BLS & Cardiac Arrest",
        question: "Seorang pasien ditemukan tidak responsif. Setelah memastikan keamanan penolong, tindakan berikutnya yang paling tepat adalah...",
        options: {
            A: "Memasang infus",
            B: "Memeriksa tekanan darah",
            C: "Menilai respons pasien dan mengaktifkan bantuan sesuai sistem kegawatdaruratan",
            D: "Memberikan oksigen 15 L/menit",
            E: "Melakukan pemeriksaan pupil"
        },
        answer: "C",
        explanation: "Pastikan keselamatan penolong, nilai respons, lalu aktifkan bantuan sesuai sistem kegawatdaruratan."
    },

    {
        id: 2,
        topic: "BLS & Cardiac Arrest",
        question: "Pada pasien dewasa yang tidak responsif dan dicurigai mengalami henti jantung, penilaian nadi dilakukan pada...",
        options: {
            A: "Radialis",
            B: "Brachialis",
            C: "Femoral",
            D: "Karotis",
            E: "Dorsalis pedis"
        },
        answer: "D",
        explanation: "Pada dewasa tidak responsif dengan kecurigaan cardiac arrest, nadi dinilai pada karotis."
    },

    {
        id: 3,
        topic: "BLS & Cardiac Arrest",
        question: "Dalam pelaksanaan RJP, salah satu prinsip utama adalah...",
        options: {
            A: "Memaksimalkan jeda kompresi",
            B: "Memberikan kompresi dengan recoil dada yang baik",
            C: "Menghentikan kompresi setiap kali memberikan ventilasi selama mungkin",
            D: "Mengutamakan pemasangan infus sebelum kompresi",
            E: "Menunggu hasil EKG sebelum memulai RJP"
        },
        answer: "B",
        explanation: "RJP berkualitas membutuhkan kompresi efektif dan recoil dada yang baik."
    },

    {
        id: 4,
        topic: "BLS & Cardiac Arrest",
        question: "Pada RJP dua penolong dewasa, rasio kompresi dan ventilasi yang digunakan dalam skenario dasar adalah...",
        options: {
            A: "5:1",
            B: "10:1",
            C: "15:2",
            D: "30:2",
            E: "50:2"
        },
        answer: "D",
        explanation: "Rasio dasar kompresi dan ventilasi yang digunakan adalah 30:2."
    },

    {
        id: 5,
        topic: "BLS & Cardiac Arrest",
        question: "Pasien tidak sadar, tidak bernapas normal dan tidak terdapat nadi. Tindakan paling tepat adalah...",
        options: {
            A: "Observasi",
            B: "Memberikan cairan IV",
            C: "Memulai RJP",
            D: "Melakukan pemeriksaan CT scan",
            E: "Memberikan analgesik"
        },
        answer: "C",
        explanation: "Tidak sadar, napas tidak normal/tidak bernapas, dan tidak ada nadi merupakan indikasi memulai RJP."
    },

    {
        id: 6,
        topic: "BLS & Cardiac Arrest",
        question: "Saat menggunakan AED, setelah alat menganalisis irama, penolong harus...",
        options: {
            A: "Memegang pasien selama analisis",
            B: "Memastikan tidak ada yang menyentuh pasien",
            C: "Memberikan kompresi saat shock diberikan",
            D: "Melepaskan pad",
            E: "Memberikan ventilasi selama shock"
        },
        answer: "B",
        explanation: "Saat AED menganalisis atau memberikan shock, pasien tidak boleh disentuh."
    },

    {
        id: 7,
        topic: "BLS & Cardiac Arrest",
        question: "Tujuan utama penggunaan AED pada pasien henti jantung adalah...",
        options: {
            A: "Mengukur tekanan darah",
            B: "Mengukur saturasi oksigen",
            C: "Menganalisis irama dan memberikan defibrilasi bila diindikasikan",
            D: "Memberikan ventilasi",
            E: "Mengukur GCS"
        },
        answer: "C",
        explanation: "AED menganalisis irama dan memberikan defibrilasi bila ritmenya shockable."
    },

    {
        id: 8,
        topic: "BLS & Cardiac Arrest",
        question: "Dalam algoritme cardiac arrest, evaluasi irama dilakukan secara berkala. Menurut modul, interval evaluasi irama adalah...",
        options: {
            A: "Setiap 30 detik",
            B: "Setiap 1 menit",
            C: "Setiap 2 menit",
            D: "Setiap 5 menit",
            E: "Setiap 10 menit"
        },
        answer: "C",
        explanation: "Modul mencantumkan evaluasi irama setiap 2 menit."
    },

    {
        id: 9,
        topic: "BLS & Cardiac Arrest",
        question: "Saat melakukan evaluasi irama pada cardiac arrest, penghentian RJP untuk analisis sebaiknya...",
        options: {
            A: "Selama 30–60 detik",
            B: "Selama 20–30 detik",
            C: "Tidak lebih dari sekitar 10 detik",
            D: "Selama 2 menit",
            E: "Sampai dokter datang"
        },
        answer: "C",
        explanation: "Jeda untuk analisis irama harus diminimalkan, sekitar tidak lebih dari 10 detik."
    },

    {
        id: 10,
        topic: "BLS & Cardiac Arrest",
        question: "Irama berikut yang termasuk shockable rhythm adalah...",
        options: {
            A: "Asystole",
            B: "PEA",
            C: "VF",
            D: "Sinus bradikardia",
            E: "Sinus takikardia"
        },
        answer: "C",
        explanation: "VF termasuk shockable rhythm."
    },

    {
        id: 11,
        topic: "BLS & Cardiac Arrest",
        question: "Irama berikut yang termasuk shockable rhythm adalah...",
        options: {
            A: "Pulseless VT",
            B: "PEA",
            C: "Asystole",
            D: "Sinus rhythm",
            E: "AF dengan nadi"
        },
        answer: "A",
        explanation: "Pulseless VT termasuk shockable rhythm."
    },

    {
        id: 12,
        topic: "BLS & Cardiac Arrest",
        question: "Pasien menunjukkan irama terorganisasi pada monitor tetapi nadi tidak teraba. Kondisi ini paling sesuai dengan...",
        options: {
            A: "VF",
            B: "Pulseless VT",
            C: "PEA",
            D: "ROSC",
            E: "Sinus rhythm"
        },
        answer: "C",
        explanation: "Aktivitas listrik terorganisasi tanpa nadi sesuai dengan PEA."
    },

    {
        id: 13,
        topic: "BLS & Cardiac Arrest",
        question: "Pada PEA, tindakan utama adalah...",
        options: {
            A: "Defibrilasi segera",
            B: "RJP berkualitas tinggi dan mencari penyebab reversibel",
            C: "Menunggu irama berubah spontan",
            D: "Kardioversi sinkron",
            E: "Menghentikan RJP"
        },
        answer: "B",
        explanation: "PEA merupakan non-shockable rhythm; lakukan RJP berkualitas tinggi dan cari penyebab reversibel."
    },

    {
        id: 14,
        topic: "BLS & Cardiac Arrest",
        question: "Pasien mengalami asistol. Langkah penting sebelum memastikan asistol adalah...",
        options: {
            A: "Langsung melakukan defibrilasi",
            B: "Memastikan elektroda dan lead serta memastikan bukan fine VF",
            C: "Memberikan kardioversi",
            D: "Memberikan adenosin",
            E: "Memberikan amiodaron sebagai tindakan pertama"
        },
        answer: "B",
        explanation: "Pada asistol, pastikan elektroda/lead baik dan bukan fine VF."
    },

    {
        id: 15,
        topic: "BLS & Cardiac Arrest",
        question: "Pada asistol, terapi utama dalam algoritme cardiac arrest adalah...",
        options: {
            A: "Defibrilasi",
            B: "Kardioversi sinkron",
            C: "RJP dan epinefrin sesuai algoritme",
            D: "Adenosin",
            E: "Digoksin"
        },
        answer: "C",
        explanation: "Asistol merupakan non-shockable rhythm; lanjutkan RJP dan epinefrin sesuai algoritme."
    },


    // =====================================================
    // B. EKG & MEGACODE
    // =====================================================

    {
        id: 16,
        topic: "EKG & Megacode",
        question: "Praktikum ECG Interpretation terutama bertujuan agar peserta mampu...",
        options: {
            A: "Membaca hasil laboratorium",
            B: "Membaca EKG strip dan irama monitor",
            C: "Melakukan CT scan",
            D: "Melakukan echocardiography",
            E: "Melakukan kateterisasi jantung"
        },
        answer: "B",
        explanation: "Praktikum ECG Interpretation mencakup kemampuan membaca ECG strip dan irama monitor."
    },

    {
        id: 17,
        topic: "EKG & Megacode",
        question: "Hal yang paling penting dalam menilai VT pada pasien henti jantung adalah...",
        options: {
            A: "Warna kulit saja",
            B: "Ada atau tidaknya nadi",
            C: "Suhu tubuh",
            D: "GCS saja",
            E: "Frekuensi napas saja"
        },
        answer: "B",
        explanation: "VT dibedakan menjadi pulseless atau dengan nadi karena tata laksananya berbeda."
    },

    {
        id: 18,
        topic: "EKG & Megacode",
        question: "VF pada monitor menunjukkan...",
        options: {
            A: "Aktivitas listrik yang kacau tanpa kontraksi efektif",
            B: "Irama sinus normal",
            C: "Aktivitas listrik terorganisasi dengan nadi kuat",
            D: "Bradikardia sinus",
            E: "PEA"
        },
        answer: "A",
        explanation: "VF merupakan aktivitas listrik yang kacau dan tidak menghasilkan kontraksi efektif."
    },

    {
        id: 19,
        topic: "EKG & Megacode",
        question: "Dalam megacode, seorang anggota tim menerima instruksi dari team leader. Tindakan yang menunjukkan closed-loop communication adalah...",
        options: {
            A: "Diam dan langsung pergi",
            B: "Mengulangi instruksi secara lisan",
            C: "Mengabaikan instruksi",
            D: "Menunggu instruksi berikutnya",
            E: "Menyerahkan tugas kepada orang lain tanpa komunikasi"
        },
        answer: "B",
        explanation: "Closed-loop communication mencakup pengulangan instruksi oleh penerima."
    },

    {
        id: 20,
        topic: "EKG & Megacode",
        question: "Setelah menyelesaikan tugas dalam megacode, anggota tim sebaiknya...",
        options: {
            A: "Meninggalkan ruangan",
            B: "Tidak perlu melapor",
            C: "Memberitahu team leader bahwa tugas telah selesai",
            D: "Mengganti tugas sendiri",
            E: "Menghentikan RJP"
        },
        answer: "C",
        explanation: "Setelah tugas selesai, anggota tim melaporkannya kepada leader."
    },


    // =====================================================
    // C. AIRWAY & BREATHING
    // =====================================================

    {
        id: 21,
        topic: "Airway & Breathing",
        question: "Prioritas utama pada pasien trauma dengan masalah jalan napas adalah...",
        options: {
            A: "Pemeriksaan laboratorium",
            B: "Memastikan airway terbuka",
            C: "Pemeriksaan radiologi",
            D: "Pemasangan kateter urin",
            E: "Pemeriksaan abdomen"
        },
        answer: "B",
        explanation: "Airway merupakan prioritas awal dalam pendekatan ABCDE."
    },

    {
        id: 22,
        topic: "Airway & Breathing",
        question: "Dalam BTCLS, airway management mencakup...",
        options: {
            A: "Hanya intubasi",
            B: "Hanya suction",
            C: "Penanganan airway tanpa alat, alat sederhana hingga definitif",
            D: "Hanya pemberian oksigen",
            E: "Hanya pemasangan NGT"
        },
        answer: "C",
        explanation: "Modul mencakup airway tanpa alat, alat sederhana, sampai definitive airway."
    },

    {
        id: 23,
        topic: "Airway & Breathing",
        question: "Pasien trauma mengalami sumbatan jalan napas total dan tidak mampu bernapas. Prioritas tindakan adalah...",
        options: {
            A: "Mengatasi obstruksi jalan napas",
            B: "Mengukur suhu",
            C: "Pemeriksaan abdomen",
            D: "Mengukur urin output",
            E: "Melakukan secondary survey terlebih dahulu"
        },
        answer: "A",
        explanation: "Obstruksi total adalah ancaman langsung terhadap kehidupan dan harus segera ditangani."
    },

    {
        id: 24,
        topic: "Airway & Breathing",
        question: "Dalam penilaian breathing pada pasien trauma, pemeriksaan dada dapat mencakup...",
        options: {
            A: "Inspeksi dan auskultasi saja",
            B: "Inspeksi, palpasi, perkusi, dan auskultasi",
            C: "Palpasi abdomen saja",
            D: "Pemeriksaan GCS saja",
            E: "Pemeriksaan pupil saja"
        },
        answer: "B",
        explanation: "Pemeriksaan dada pada trauma mencakup inspeksi, palpasi, perkusi, dan auskultasi."
    },

    {
        id: 25,
        topic: "Airway & Breathing",
        question: "Distensi vena jugularis pada trauma dada dapat mengarah pada kecurigaan...",
        options: {
            A: "Gastritis",
            B: "Tension pneumothorax atau tamponade jantung",
            C: "Fraktur femur",
            D: "Hipoglikemia",
            E: "Stroke"
        },
        answer: "B",
        explanation: "Distensi vena jugularis dapat mengarah pada tension pneumothorax atau tamponade."
    },

    {
        id: 26,
        topic: "Airway & Breathing",
        question: "Bunyi jantung yang jauh disertai nadi lemah pada pasien trauma dada dapat mengarah pada...",
        options: {
            A: "Pneumonia",
            B: "Cardiac tamponade",
            C: "Fraktur pelvis",
            D: "Hipotermia",
            E: "Hiperglikemia"
        },
        answer: "B",
        explanation: "Bunyi jantung jauh dan nadi lemah dapat mengarah pada cardiac tamponade."
    },

    {
        id: 27,
        topic: "Airway & Breathing",
        question: "Pada trauma dada, inspeksi dilakukan untuk mencari antara lain...",
        options: {
            A: "Open pneumothorax dan flail chest",
            B: "Fraktur radius saja",
            C: "Hipoglikemia",
            D: "Hematuria",
            E: "Meningismus"
        },
        answer: "A",
        explanation: "Inspeksi dada mencari antara lain open pneumothorax dan flail chest."
    },

    {
        id: 28,
        topic: "Airway & Breathing",
        question: "Tujuan pemberian oksigen pada pasien dengan gangguan breathing adalah...",
        options: {
            A: "Menurunkan GCS",
            B: "Memperbaiki oksigenasi sesuai kondisi klinis",
            C: "Menghentikan perdarahan",
            D: "Mengobati fraktur",
            E: "Mengurangi edema tungkai"
        },
        answer: "B",
        explanation: "Oksigen diberikan untuk memperbaiki oksigenasi sesuai kondisi klinis."
    },


    // =====================================================
    // D. INITIAL ASSESSMENT
    // =====================================================

    {
        id: 29,
        topic: "Initial Assessment",
        question: "Urutan primary survey yang digunakan dalam modul adalah...",
        options: {
            A: "ABCDE",
            B: "BACDE",
            C: "CABED",
            D: "DCBAE",
            E: "EDCBA"
        },
        answer: "A",
        explanation: "Primary survey menggunakan pendekatan ABCDE."
    },

    {
        id: 30,
        topic: "Initial Assessment",
        question: "Tujuan primary survey adalah...",
        options: {
            A: "Menentukan diagnosis definitif",
            B: "Menemukan dan menangani masalah yang mengancam nyawa",
            C: "Menyelesaikan seluruh pemeriksaan laboratorium",
            D: "Menentukan diagnosis penyakit kronis",
            E: "Menentukan terapi rawat jalan"
        },
        answer: "B",
        explanation: "Primary survey bertujuan menemukan dan menangani masalah yang mengancam nyawa."
    },

    {
        id: 31,
        topic: "Initial Assessment",
        question: "Pada primary survey, setelah masalah ditemukan...",
        options: {
            A: "Selalu tunggu secondary survey",
            B: "Tangani masalah sesuai prioritas",
            C: "Abaikan jika pasien masih sadar",
            D: "Tunggu hasil radiologi",
            E: "Pulangkan pasien"
        },
        answer: "B",
        explanation: "Temuan yang mengancam nyawa ditangani sesuai prioritas, tidak ditunda sampai secondary survey."
    },

    {
        id: 32,
        topic: "Initial Assessment",
        question: "Pada bagian Disability, pemeriksaan yang penting adalah...",
        options: {
            A: "GCS dan pupil",
            B: "Lingkar perut",
            C: "Suhu kulit saja",
            D: "Berat badan",
            E: "Tinggi badan"
        },
        answer: "A",
        explanation: "Disability mencakup evaluasi neurologis seperti GCS dan pupil."
    },

    {
        id: 33,
        topic: "Initial Assessment",
        question: "GCS terdiri dari...",
        options: {
            A: "Eye, Verbal, Motor",
            B: "Eye, Voice, Pulse",
            C: "Glasgow, Voice, Motor",
            D: "Eye, Reflex, Motor",
            E: "Verbal, Pulse, Motor"
        },
        answer: "A",
        explanation: "GCS terdiri dari Eye, Verbal, dan Motor."
    },

    {
        id: 34,
        topic: "Initial Assessment",
        question: "Pada bagian Exposure, prinsip yang benar adalah...",
        options: {
            A: "Membiarkan pasien terbuka tanpa perlindungan",
            B: "Membuka pakaian untuk mencari cedera dan mencegah hipotermia",
            C: "Tidak perlu memeriksa bagian tubuh lain",
            D: "Hanya memeriksa wajah",
            E: "Hanya memeriksa ekstremitas"
        },
        answer: "B",
        explanation: "Exposure membantu mencari cedera sekaligus mencegah hipotermia."
    },

    {
        id: 35,
        topic: "Initial Assessment",
        question: "Dalam primary survey pasien trauma, reevaluasi dilakukan...",
        options: {
            A: "Hanya setelah pasien pulang",
            B: "Setiap tahapan intervensi",
            C: "Sekali saja",
            D: "Hanya setelah CT scan",
            E: "Hanya jika pasien meminta"
        },
        answer: "B",
        explanation: "Modul menekankan reevaluasi pada setiap tahapan intervensi."
    },

    {
        id: 36,
        topic: "Initial Assessment",
        question: "Secondary survey bertujuan terutama untuk...",
        options: {
            A: "Menilai masalah potensial yang belum ditemukan pada primary survey",
            B: "Menggantikan primary survey",
            C: "Menghentikan RJP",
            D: "Mengganti pemeriksaan airway",
            E: "Menentukan administrasi pasien"
        },
        answer: "A",
        explanation: "Secondary survey mengevaluasi masalah lain yang belum ditemukan atau ditangani pada primary survey."
    },


    // =====================================================
    // E. SHOCK
    // =====================================================

    {
        id: 37,
        topic: "Shock",
        question: "Salah satu tanda syok adalah...",
        options: {
            A: "Akral hangat dan perfusi sangat baik",
            B: "Akral dingin",
            C: "Nadi selalu lambat",
            D: "Kesadaran selalu normal",
            E: "Kulit selalu merah"
        },
        answer: "B",
        explanation: "Akral dingin merupakan tanda perfusi perifer buruk yang dapat ditemukan pada syok."
    },

    {
        id: 38,
        topic: "Shock",
        question: "Tanda lain yang dapat ditemukan pada syok adalah...",
        options: {
            A: "Nadi lemah",
            B: "Nafsu makan meningkat",
            C: "Penglihatan semakin tajam",
            D: "Suhu selalu meningkat",
            E: "Kesadaran selalu meningkat"
        },
        answer: "A",
        explanation: "Nadi lemah merupakan salah satu tanda perfusi buruk pada syok."
    },

    {
        id: 39,
        topic: "Shock",
        question: "Pada pasien trauma dengan perdarahan hebat, prioritas utama adalah...",
        options: {
            A: "Mengontrol perdarahan dan menangani gangguan sirkulasi",
            B: "Pemeriksaan kulit",
            C: "Memberikan makanan",
            D: "Pemeriksaan mata",
            E: "Menunggu hasil laboratorium"
        },
        answer: "A",
        explanation: "Perdarahan harus dikontrol dan sirkulasi ditangani segera."
    },

    {
        id: 40,
        topic: "Shock",
        question: "Dalam modul, pemasangan akses IV pada pasien syok trauma dapat menggunakan...",
        options: {
            A: "Dua jalur IV berukuran besar sesuai kondisi vena",
            B: "Satu jalur kecil saja",
            C: "Tidak perlu akses IV",
            D: "Hanya akses intraarterial",
            E: "Hanya akses subkutan"
        },
        answer: "A",
        explanation: "Modul mencantumkan dua jalur IV berukuran besar sesuai kondisi vena."
    },

    {
        id: 41,
        topic: "Shock",
        question: "Salah satu pemantauan penting pada pasien trauma adalah...",
        options: {
            A: "Urine output",
            B: "Warna rambut",
            C: "Lingkar kepala",
            D: "Berat badan harian",
            E: "Tinggi badan"
        },
        answer: "A",
        explanation: "Urine output merupakan parameter pemantauan perfusi."
    },

    {
        id: 42,
        topic: "Shock",
        question: "Menurut modul, urine output normal pada dewasa yang dicantumkan dalam konteks monitoring adalah sekitar...",
        options: {
            A: "0,1 cc/kgBB/jam",
            B: "0,2 cc/kgBB/jam",
            C: "0,5 cc/kgBB/jam",
            D: "2 cc/kgBB/jam",
            E: "5 cc/kgBB/jam"
        },
        answer: "C",
        explanation: "Modul mencantumkan sekitar 0,5 cc/kgBB/jam pada dewasa."
    },


    // =====================================================
    // F. STOP BLEEDING
    // =====================================================

    {
        id: 43,
        topic: "Stop Bleeding",
        question: "Tujuan utama stop bleeding adalah...",
        options: {
            A: "Mengurangi nyeri saja",
            B: "Mengendalikan perdarahan dan menjaga sirkulasi",
            C: "Menurunkan suhu",
            D: "Meningkatkan nafsu makan",
            E: "Mengobati infeksi"
        },
        answer: "B",
        explanation: "Stop bleeding bertujuan mengendalikan perdarahan dan menjaga sirkulasi."
    },

    {
        id: 44,
        topic: "Stop Bleeding",
        question: "Pada luka dengan perdarahan aktif, tindakan awal yang tepat adalah...",
        options: {
            A: "Membiarkan darah keluar",
            B: "Melakukan kontrol perdarahan secara cepat dan tepat",
            C: "Menutup mata pasien",
            D: "Melakukan pemeriksaan CT terlebih dahulu",
            E: "Memberikan makanan"
        },
        answer: "B",
        explanation: "Perdarahan aktif harus dikontrol secara cepat dan tepat."
    },

    {
        id: 45,
        topic: "Stop Bleeding",
        question: "Stop bleeding, splinting and bandaging dalam modul merupakan...",
        options: {
            A: "Materi teori saja",
            B: "Salah satu materi praktik",
            C: "Materi administrasi",
            D: "Materi farmakologi saja",
            E: "Materi radiologi"
        },
        answer: "B",
        explanation: "Stop Bleeding, Splinting and Bandaging tercantum sebagai materi praktik."
    },

    {
        id: 46,
        topic: "Stop Bleeding",
        question: "Pada amputasi traumatik, salah satu prioritas adalah...",
        options: {
            A: "Membiarkan perdarahan",
            B: "Mengendalikan perdarahan dan melakukan pembalutan yang sesuai",
            C: "Langsung melakukan latihan gerak",
            D: "Mengabaikan bagian amputasi",
            E: "Memberikan makanan"
        },
        answer: "B",
        explanation: "Pada amputasi, kontrol perdarahan dan pembalutan merupakan prioritas."
    },


    // =====================================================
    // G. MUSCULOSKELETAL & SPLINTING
    // =====================================================

    {
        id: 47,
        topic: "Musculoskeletal & Splinting",
        question: "Tujuan utama splinting pada fraktur adalah...",
        options: {
            A: "Menambah gerakan tulang",
            B: "Mengurangi pergerakan dan membantu stabilisasi",
            C: "Menghilangkan kebutuhan pemeriksaan",
            D: "Menambah perdarahan",
            E: "Memperburuk deformitas"
        },
        answer: "B",
        explanation: "Splinting membatasi pergerakan dan membantu stabilisasi."
    },

    {
        id: 48,
        topic: "Musculoskeletal & Splinting",
        question: "Pada ekstremitas yang mengalami fraktur, pemeriksaan penting sebelum dan sesudah splint adalah...",
        options: {
            A: "Status neurovaskular",
            B: "Status rambut",
            C: "Lingkar pinggang",
            D: "Berat badan",
            E: "Tinggi badan"
        },
        answer: "A",
        explanation: "Status neurovaskular dinilai sebelum dan sesudah splint."
    },

    {
        id: 49,
        topic: "Musculoskeletal & Splinting",
        question: "Trauma musculoskeletal dalam modul mencakup...",
        options: {
            A: "Fraktur, luka robek dan amputasi",
            B: "Hipertensi saja",
            C: "Diabetes saja",
            D: "Pneumonia saja",
            E: "Stroke saja"
        },
        answer: "A",
        explanation: "Materi musculoskeletal mencakup fraktur, luka robek, dan amputasi."
    },

    {
        id: 50,
        topic: "Musculoskeletal & Splinting",
        question: "Pada fraktur terbuka, salah satu masalah penting yang harus diperhatikan adalah...",
        options: {
            A: "Perdarahan dan kontaminasi luka",
            B: "Nafsu makan",
            C: "Gangguan penglihatan",
            D: "Hiperkolesterolemia",
            E: "Nyeri kepala kronis"
        },
        answer: "A",
        explanation: "Fraktur terbuka berisiko perdarahan dan kontaminasi luka."
    },


    // =====================================================
    // H. HEAD & SPINAL TRAUMA
    // =====================================================

    {
        id: 51,
        topic: "Head & Spinal Trauma",
        question: "Pada trauma kepala, salah satu parameter neurologis penting adalah...",
        options: {
            A: "GCS",
            B: "Berat badan",
            C: "Lingkar pinggang",
            D: "Suhu ruangan",
            E: "Tinggi badan"
        },
        answer: "A",
        explanation: "GCS merupakan parameter penting dalam evaluasi trauma kepala."
    },

    {
        id: 52,
        topic: "Head & Spinal Trauma",
        question: "Perubahan ukuran dan kesimetrisan pupil merupakan bagian dari evaluasi...",
        options: {
            A: "Neurologis",
            B: "Abdomen",
            C: "Musculoskeletal",
            D: "Respirasi saja",
            E: "Sirkulasi perifer saja"
        },
        answer: "A",
        explanation: "Pupil merupakan bagian dari evaluasi neurologis."
    },

    {
        id: 53,
        topic: "Head & Spinal Trauma",
        question: "Pasien trauma dicurigai mengalami cedera cervical spine. Prinsip penting adalah...",
        options: {
            A: "Memaksa leher ke posisi hiperfleksi",
            B: "Memaksa leher ke posisi hiperekstensi",
            C: "Menghindari gerakan leher yang tidak perlu",
            D: "Memutar leher untuk mencari nyeri",
            E: "Mengabaikan posisi kepala"
        },
        answer: "C",
        explanation: "Pada kecurigaan cedera servikal, hindari gerakan leher yang tidak perlu."
    },

    {
        id: 54,
        topic: "Head & Spinal Trauma",
        question: "Imobilisasi spinal harus memperhatikan...",
        options: {
            A: "Kepala, leher, torso dan pelvis",
            B: "Tangan saja",
            C: "Kaki saja",
            D: "Kepala saja",
            E: "Leher saja"
        },
        answer: "A",
        explanation: "Imobilisasi spinal memperhatikan kepala, leher, torso, dan pelvis."
    },

    {
        id: 55,
        topic: "Head & Spinal Trauma",
        question: "Tujuan utama spinal stabilization adalah...",
        options: {
            A: "Membuat pasien nyaman saja",
            B: "Mencegah pergerakan yang dapat menyebabkan cedera sekunder",
            C: "Mempercepat pasien berjalan",
            D: "Mengurangi kebutuhan monitoring",
            E: "Mengurangi suhu tubuh"
        },
        answer: "B",
        explanation: "Stabilisasi bertujuan mencegah gerakan yang dapat menyebabkan cedera sekunder."
    },

    {
        id: 56,
        topic: "Head & Spinal Trauma",
        question: "Pada pasien trauma dengan paraparesis atau tetraparesis, kondisi tersebut dapat menjadi petunjuk awal adanya...",
        options: {
            A: "Instabilitas servikal",
            B: "Hipertensi",
            C: "Gastritis",
            D: "Hipoglikemia",
            E: "Pneumonia"
        },
        answer: "A",
        explanation: "Paraparesis atau tetraparesis dapat menjadi petunjuk cedera atau instabilitas servikal."
    },


    // =====================================================
    // I. THORACIC TRAUMA
    // =====================================================

    {
        id: 57,
        topic: "Thoracic Trauma",
        question: "Trauma dada dapat berupa...",
        options: {
            A: "Tumpul dan tembus",
            B: "Hanya tembus",
            C: "Hanya tumpul",
            D: "Hanya thermal",
            E: "Hanya kimia"
        },
        answer: "A",
        explanation: "Trauma dada dapat berupa tumpul maupun tembus."
    },

    {
        id: 58,
        topic: "Thoracic Trauma",
        question: "Pada tension pneumothorax, masalah utama berkaitan dengan...",
        options: {
            A: "Gangguan ventilasi dan sirkulasi akibat tekanan intratorakal",
            B: "Fraktur tangan",
            C: "Gangguan ginjal",
            D: "Hipoglikemia",
            E: "Infeksi kulit"
        },
        answer: "A",
        explanation: "Tension pneumothorax dapat mengganggu ventilasi dan sirkulasi."
    },

    {
        id: 59,
        topic: "Thoracic Trauma",
        question: "Open pneumothorax merupakan...",
        options: {
            A: "Cedera dada yang menyebabkan komunikasi antara rongga pleura dan lingkungan luar",
            B: "Fraktur kepala",
            C: "Cedera abdomen",
            D: "Cedera pelvis",
            E: "Luka bakar"
        },
        answer: "A",
        explanation: "Open pneumothorax adalah komunikasi rongga pleura dengan lingkungan luar."
    },

    {
        id: 60,
        topic: "Thoracic Trauma",
        question: "Flail chest berkaitan dengan...",
        options: {
            A: "Cedera dinding dada dengan instabilitas segmen dada",
            B: "Fraktur tengkorak",
            C: "Cedera abdomen",
            D: "Luka bakar",
            E: "Cedera mata"
        },
        answer: "A",
        explanation: "Flail chest merupakan cedera dinding dada dengan segmen yang tidak stabil."
    },


    // =====================================================
    // J. ABDOMINAL & PELVIC TRAUMA
    // =====================================================

    {
        id: 61,
        topic: "Abdominal & Pelvic Trauma",
        question: "Trauma abdomen dapat berupa...",
        options: {
            A: "Tumpul dan tembus",
            B: "Hanya tumpul",
            C: "Hanya thermal",
            D: "Hanya kimia",
            E: "Hanya listrik"
        },
        answer: "A",
        explanation: "Trauma abdomen dapat berupa tumpul maupun tembus."
    },

    {
        id: 62,
        topic: "Abdominal & Pelvic Trauma",
        question: "Pasien trauma dengan hipotensi yang tidak jelas penyebabnya harus dicurigai mengalami...",
        options: {
            A: "Perdarahan internal",
            B: "Gastritis ringan",
            C: "Flu biasa",
            D: "Dermatitis",
            E: "Rhinitis"
        },
        answer: "A",
        explanation: "Hipotensi pada trauma tanpa penyebab jelas harus menimbulkan kecurigaan perdarahan internal."
    },

    {
        id: 63,
        topic: "Abdominal & Pelvic Trauma",
        question: "Salah satu tanda yang dapat mengarah pada fraktur pelvis adalah...",
        options: {
            A: "Ekimosis pada daerah pelvis/perineum",
            B: "Batuk",
            C: "Nyeri tenggorokan",
            D: "Sakit kepala ringan",
            E: "Hidung tersumbat"
        },
        answer: "A",
        explanation: "Ekimosis pelvis/perineum merupakan temuan yang perlu dicari pada trauma pelvis."
    },

    {
        id: 64,
        topic: "Abdominal & Pelvic Trauma",
        question: "Pada trauma abdomen dan pelvis, pemeriksaan harus mempertimbangkan...",
        options: {
            A: "Cedera internal dan perdarahan",
            B: "Hanya luka kulit",
            C: "Hanya nyeri",
            D: "Hanya suhu",
            E: "Hanya tekanan darah"
        },
        answer: "A",
        explanation: "Trauma abdomen/pelvis dapat menyebabkan cedera internal dan perdarahan."
    },


    // =====================================================
    // K. BURN / THERMAL TRAUMA
    // =====================================================

    {
        id: 65,
        topic: "Burn / Thermal Trauma",
        question: "Penilaian luka bakar mencakup...",
        options: {
            A: "Luas dan kedalaman",
            B: "Warna rambut",
            C: "Tinggi badan",
            D: "Berat badan saja",
            E: "Lingkar kepala"
        },
        answer: "A",
        explanation: "Penilaian luka bakar mencakup luas dan kedalaman."
    },

    {
        id: 66,
        topic: "Burn / Thermal Trauma",
        question: "Dalam penanganan trauma thermal, salah satu prioritas adalah...",
        options: {
            A: "Airway",
            B: "Diet",
            C: "Latihan fisik",
            D: "Pemeriksaan mata",
            E: "Pemeriksaan pendengaran"
        },
        answer: "A",
        explanation: "Airway merupakan prioritas penting pada trauma thermal."
    },

    {
        id: 67,
        topic: "Burn / Thermal Trauma",
        question: "Luas luka bakar biasanya dinilai sebagai...",
        options: {
            A: "Persentase luas permukaan tubuh",
            B: "Berat badan",
            C: "Tekanan darah",
            D: "GCS",
            E: "Frekuensi nadi saja"
        },
        answer: "A",
        explanation: "Luas luka bakar dinyatakan sebagai persentase luas permukaan tubuh."
    },

    {
        id: 68,
        topic: "Burn / Thermal Trauma",
        question: "Modul BTCLS membahas penggunaan rumus...",
        options: {
            A: "Parkland/Baxter",
            B: "Apgar",
            C: "Glasgow",
            D: "Wells",
            E: "Child-Pugh"
        },
        answer: "A",
        explanation: "Modul mencantumkan rumus Baxter untuk resusitasi cairan luka bakar."
    },

    {
        id: 69,
        topic: "Burn / Thermal Trauma",
        question: "Salah satu prinsip penting pada pasien luka bakar adalah...",
        options: {
            A: "Mencegah hipotermia",
            B: "Membiarkan pasien hipotermia",
            C: "Tidak perlu monitoring",
            D: "Mengabaikan airway",
            E: "Tidak perlu resusitasi"
        },
        answer: "A",
        explanation: "Pencegahan hipotermia merupakan prinsip penting pada pasien luka bakar."
    },

    {
        id: 70,
        topic: "Burn / Thermal Trauma",
        question: "Trauma thermal dapat disebabkan oleh...",
        options: {
            A: "Suhu ekstrem dan bahan kimia",
            B: "Hanya trauma tumpul",
            C: "Hanya fraktur",
            D: "Hanya infeksi",
            E: "Hanya hipertensi"
        },
        answer: "A",
        explanation: "Trauma thermal dapat berkaitan dengan suhu ekstrem dan bahan kimia."
    },


    // =====================================================
    // L. BIOMECHANICAL TRAUMA
    // =====================================================

    {
        id: 71,
        topic: "Biomechanical Trauma",
        question: "Biomekanik trauma digunakan untuk...",
        options: {
            A: "Memprediksi kemungkinan cedera berdasarkan mekanisme kejadian",
            B: "Mengukur kadar gula",
            C: "Mengukur berat badan",
            D: "Menentukan golongan darah",
            E: "Menentukan status imunisasi"
        },
        answer: "A",
        explanation: "Biomekanik membantu memperkirakan cedera berdasarkan mekanisme kejadian."
    },

    {
        id: 72,
        topic: "Biomechanical Trauma",
        question: "Contoh informasi penting dalam biomekanik trauma adalah...",
        options: {
            A: "Kecepatan kendaraan dan ketinggian jatuh",
            B: "Makanan terakhir",
            C: "Warna pakaian",
            D: "Hobi pasien",
            E: "Riwayat pendidikan"
        },
        answer: "A",
        explanation: "Kecepatan kendaraan dan ketinggian jatuh merupakan informasi penting tentang energi trauma."
    },

    {
        id: 73,
        topic: "Biomechanical Trauma",
        question: "Klasifikasi mekanisme trauma yang dibahas meliputi...",
        options: {
            A: "Tumpul, tembus, thermal dan blast",
            B: "Infeksi, alergi dan autoimun",
            C: "Metabolik dan endokrin",
            D: "Neurologis saja",
            E: "Kardiologis saja"
        },
        answer: "A",
        explanation: "Modul membahas trauma tumpul, tembus, thermal, dan blast."
    },

    {
        id: 74,
        topic: "Biomechanical Trauma",
        question: "Mengapa mekanisme trauma penting?",
        options: {
            A: "Membantu memperkirakan cedera yang mungkin terjadi",
            B: "Hanya untuk dokumentasi",
            C: "Tidak memiliki manfaat",
            D: "Hanya untuk menentukan biaya",
            E: "Hanya untuk administrasi"
        },
        answer: "A",
        explanation: "Mekanisme trauma membantu memperkirakan pola cedera."
    },


    // =====================================================
    // M. TRIAGE
    // =====================================================

    {
        id: 75,
        topic: "Triage",
        question: "Tujuan utama triage pada mass casualty adalah...",
        options: {
            A: "Menangani pasien berdasarkan siapa yang datang pertama",
            B: "Menentukan prioritas berdasarkan kegawatan dan sumber daya",
            C: "Menunggu semua pasien terkumpul",
            D: "Mengutamakan pasien yang paling banyak berbicara",
            E: "Mengutamakan pasien yang paling muda"
        },
        answer: "B",
        explanation: "Triage menentukan prioritas berdasarkan kegawatan dan sumber daya."
    },

    {
        id: 76,
        topic: "Triage",
        question: "Dalam kondisi bencana dengan banyak korban, petugas harus...",
        options: {
            A: "Menghabiskan seluruh sumber daya pada satu pasien",
            B: "Memprioritaskan pasien berdasarkan tingkat kegawatan dan kemungkinan manfaat tindakan",
            C: "Mengabaikan pasien ringan",
            D: "Tidak melakukan triage",
            E: "Menunggu rumah sakit"
        },
        answer: "B",
        explanation: "Pada mass casualty, sumber daya diprioritaskan untuk memaksimalkan manfaat."
    },

    {
        id: 77,
        topic: "Triage",
        question: "Triage merupakan bagian penting dari...",
        options: {
            A: "Sistem penanggulangan kegawatdaruratan",
            B: "Administrasi keuangan",
            C: "Pelayanan rawat jalan rutin",
            D: "Program imunisasi",
            E: "Pemeriksaan laboratorium"
        },
        answer: "A",
        explanation: "Triage merupakan bagian dari sistem penanggulangan kegawatdaruratan."
    },


    // =====================================================
    // N. LIFTING, MOVING & EXTRICATION
    // =====================================================

    {
        id: 78,
        topic: "Lifting, Moving & Extrication",
        question: "Tujuan ekstrikasi pasien trauma adalah...",
        options: {
            A: "Mengeluarkan pasien dari situasi berbahaya dengan memperhatikan cedera",
            B: "Membuat pasien berjalan",
            C: "Mengurangi kebutuhan stabilisasi",
            D: "Mempercepat pemeriksaan laboratorium",
            E: "Menghentikan monitoring"
        },
        answer: "A",
        explanation: "Ekstrikasi mengeluarkan pasien dari situasi berbahaya dengan memperhatikan cedera."
    },

    {
        id: 79,
        topic: "Lifting, Moving & Extrication",
        question: "Sebelum transportasi pasien trauma, hal penting adalah...",
        options: {
            A: "Stabilisasi sesuai kondisi",
            B: "Melepaskan semua imobilisasi",
            C: "Membiarkan pasien bergerak bebas",
            D: "Menghentikan oksigen",
            E: "Menghentikan monitoring"
        },
        answer: "A",
        explanation: "Pasien perlu distabilkan sesuai kondisi sebelum transportasi."
    },

    {
        id: 80,
        topic: "Lifting, Moving & Extrication",
        question: "Pada pasien yang dicurigai mengalami cedera servikal, stabilisasi terutama bertujuan...",
        options: {
            A: "Mencegah gerakan yang memperburuk cedera",
            B: "Membuat pasien mengantuk",
            C: "Meningkatkan perdarahan",
            D: "Mengurangi GCS",
            E: "Meningkatkan nyeri"
        },
        answer: "A",
        explanation: "Stabilisasi servikal mencegah gerakan yang dapat memperburuk cedera."
    },


    // =====================================================
    // O. SPECIAL POPULATION
    // =====================================================

    {
        id: 81,
        topic: "Special Population",
        question: "Special population dalam modul mencakup pasien...",
        options: {
            A: "Hamil, pediatrik dan lanjut usia",
            B: "Hanya dewasa",
            C: "Hanya lansia",
            D: "Hanya anak",
            E: "Hanya ibu hamil"
        },
        answer: "A",
        explanation: "Special population mencakup hamil, pediatrik, dan lansia."
    },

    {
        id: 82,
        topic: "Special Population",
        question: "Pada populasi khusus, pendekatan trauma tetap berlandaskan...",
        options: {
            A: "Initial Assessment",
            B: "Pemeriksaan laboratorium terlebih dahulu",
            C: "CT scan terlebih dahulu",
            D: "Diagnosis definitif terlebih dahulu",
            E: "Rawat jalan"
        },
        answer: "A",
        explanation: "Pendekatan pada populasi khusus tetap berlandaskan Initial Assessment."
    },


    // =====================================================
    // P. TEAM DYNAMIC
    // =====================================================

    {
        id: 83,
        topic: "Team Dynamic",
        question: "Dalam team dynamic, komunikasi yang baik harus...",
        options: {
            A: "Panjang dan rumit",
            B: "Ringkas dan jelas",
            C: "Menggunakan istilah yang tidak dipahami tim",
            D: "Dilakukan dengan berteriak",
            E: "Tidak perlu dikonfirmasi"
        },
        answer: "B",
        explanation: "Komunikasi tim harus ringkas dan jelas."
    },

    {
        id: 84,
        topic: "Team Dynamic",
        question: "Closed-loop communication berarti...",
        options: {
            A: "Instruksi diberikan tanpa konfirmasi",
            B: "Anggota tim mengulang instruksi untuk memastikan pemahaman",
            C: "Semua anggota berbicara bersamaan",
            D: "Team leader bekerja sendiri",
            E: "Tidak perlu laporan"
        },
        answer: "B",
        explanation: "Closed-loop communication berarti penerima mengulang instruksi untuk memastikan pemahaman."
    },

    {
        id: 85,
        topic: "Team Dynamic",
        question: "Setelah resusitasi selesai, debriefing berguna untuk...",
        options: {
            A: "Menyalahkan anggota tim",
            B: "Mengevaluasi proses dan mengidentifikasi hal yang dapat diperbaiki",
            C: "Menghentikan pelatihan",
            D: "Menghindari diskusi",
            E: "Menghapus dokumentasi"
        },
        answer: "B",
        explanation: "Debriefing mengevaluasi proses dan mengidentifikasi hal yang dapat diperbaiki."
    },


    // =====================================================
    // Q. SOAL KASUS TERINTEGRASI
    // =====================================================

    {
        id: 86,
        topic: "Kasus Terintegrasi",
        question: "Seorang korban kecelakaan motor ditemukan tidak responsif. Tidak bernapas normal dan nadi karotis tidak teraba. Tindakan paling tepat adalah...",
        options: {
            A: "Secondary survey",
            B: "RJP",
            C: "CT scan",
            D: "Pemeriksaan abdomen",
            E: "Pemasangan kateter urin"
        },
        answer: "B",
        explanation: "Tidak responsif + tidak bernapas normal + tidak ada nadi → RJP."
    },

    {
        id: 87,
        topic: "Kasus Terintegrasi",
        question: "Pasien trauma mengalami perdarahan ekstremitas aktif dan tanda syok. Prioritas Anda adalah...",
        options: {
            A: "Pemeriksaan radiologi",
            B: "Kontrol perdarahan dan resusitasi sesuai prioritas",
            C: "Menanyakan riwayat penyakit dahulu secara lengkap",
            D: "Memberikan makanan",
            E: "Menunggu hasil laboratorium"
        },
        answer: "B",
        explanation: "Perdarahan aktif dan syok ditangani segera sesuai prioritas."
    },

    {
        id: 88,
        topic: "Kasus Terintegrasi",
        question: "Pasien trauma dada mengalami sesak berat, suara napas menurun unilateral dan kondisi hemodinamik memburuk. Diagnosis yang harus sangat dicurigai adalah...",
        options: {
            A: "Tension pneumothorax",
            B: "Gastritis",
            C: "Fraktur tangan",
            D: "Hipoglikemia",
            E: "Stroke"
        },
        answer: "A",
        explanation: "Sesak berat, suara napas unilateral menurun, dan perburukan hemodinamik sangat mencurigakan tension pneumothorax."
    },

    {
        id: 89,
        topic: "Kasus Terintegrasi",
        question: "Pasien kecelakaan memiliki GCS menurun dan pupil tidak simetris. Prioritas evaluasi adalah...",
        options: {
            A: "Neurologis sambil tetap memastikan ABC",
            B: "Pemeriksaan kulit",
            C: "Pemeriksaan nutrisi",
            D: "Pemeriksaan mata rutin",
            E: "Pemeriksaan ortopedi saja"
        },
        answer: "A",
        explanation: "Penurunan GCS dan pupil tidak simetris adalah masalah neurologis, dengan ABC tetap dipastikan."
    },

    {
        id: 90,
        topic: "Kasus Terintegrasi",
        question: "Pasien jatuh dari ketinggian dan mengalami nyeri leher serta kelemahan keempat ekstremitas. Tindakan paling tepat adalah...",
        options: {
            A: "Meminta pasien memutar leher",
            B: "Mempertahankan stabilisasi spinal dan menghindari pergerakan yang tidak perlu",
            C: "Meminta pasien berdiri",
            D: "Melakukan latihan ROM",
            E: "Memijat leher"
        },
        answer: "B",
        explanation: "Nyeri leher dan kelemahan empat ekstremitas memerlukan proteksi spinal dan menghindari gerakan tidak perlu."
    },

    {
        id: 91,
        topic: "Kasus Terintegrasi",
        question: "Pada megacode, monitor menunjukkan VF. Nadi tidak teraba. Tindakan utama adalah...",
        options: {
            A: "Defibrilasi sesuai algoritme dan lanjutkan RJP",
            B: "Memberikan adenosin",
            C: "Menghentikan semua tindakan",
            D: "Memberikan cairan oral",
            E: "Melakukan kardioversi elektif"
        },
        answer: "A",
        explanation: "VF tanpa nadi adalah shockable rhythm → defibrilasi sesuai algoritme dan lanjutkan RJP."
    },

    {
        id: 92,
        topic: "Kasus Terintegrasi",
        question: "Pada megacode, monitor menunjukkan PEA dan nadi tidak teraba. Tindakan yang tepat adalah...",
        options: {
            A: "Defibrilasi",
            B: "RJP dan mencari penyebab reversibel",
            C: "Kardioversi",
            D: "Menghentikan RJP",
            E: "Observasi"
        },
        answer: "B",
        explanation: "PEA adalah non-shockable rhythm → RJP dan pencarian penyebab reversibel."
    },

    {
        id: 93,
        topic: "Kasus Terintegrasi",
        question: "Pasien luka bakar luas datang dengan tanda gangguan jalan napas. Prioritas adalah...",
        options: {
            A: "Menghitung luas luka bakar terlebih dahulu",
            B: "Menilai dan mengelola airway",
            C: "Mengukur berat badan",
            D: "Memberikan makanan",
            E: "Mengobati luka kulit dahulu"
        },
        answer: "B",
        explanation: "Gangguan airway pada luka bakar merupakan prioritas segera."
    },

    {
        id: 94,
        topic: "Kasus Terintegrasi",
        question: "Pasien trauma mengalami penurunan kesadaran. Dalam primary survey, setelah airway dan breathing dinilai, berikutnya adalah...",
        options: {
            A: "Circulation",
            B: "CT scan",
            C: "Secondary survey",
            D: "Riwayat lengkap",
            E: "X-ray"
        },
        answer: "A",
        explanation: "Setelah airway dan breathing, primary survey berlanjut ke circulation."
    },

    {
        id: 95,
        topic: "Kasus Terintegrasi",
        question: "Pasien trauma setelah dilakukan tindakan menunjukkan kondisi memburuk. Prinsip BTCLS yang harus diterapkan adalah...",
        options: {
            A: "Menunggu sampai pemeriksaan selesai",
            B: "Melakukan reevaluasi ABCD dan intervensi kembali sesuai temuan",
            C: "Menghentikan monitoring",
            D: "Memulangkan pasien",
            E: "Mengabaikan perubahan"
        },
        answer: "B",
        explanation: "Perburukan pasien menuntut reevaluasi ABCD dan intervensi kembali sesuai temuan."
    },

    {
        id: 96,
        topic: "Kasus Terintegrasi",
        question: "Pasien dengan fraktur ekstremitas telah dipasang bidai. Hal yang penting dilakukan setelah pembidaian adalah...",
        options: {
            A: "Mengevaluasi kembali status neurovaskular",
            B: "Membuka bidai segera",
            C: "Memijat ekstremitas",
            D: "Meminta pasien berjalan",
            E: "Mengabaikan ekstremitas"
        },
        answer: "A",
        explanation: "Setelah splint, status neurovaskular perlu dievaluasi kembali."
    },

    {
        id: 97,
        topic: "Kasus Terintegrasi",
        question: "Dalam skenario kecelakaan mobil dengan deformitas kendaraan berat, informasi tersebut terutama berguna untuk...",
        options: {
            A: "Biomekanik trauma dan prediksi cedera",
            B: "Menentukan kadar gula",
            C: "Menentukan diet",
            D: "Menentukan status imunisasi",
            E: "Menentukan diagnosis infeksi"
        },
        answer: "A",
        explanation: "Deformitas kendaraan dan mekanisme benturan membantu prediksi pola cedera."
    },

    {
        id: 98,
        topic: "Kasus Terintegrasi",
        question: "Dalam sebuah megacode, team leader memberikan instruksi: 'Pasang monitor.' Anggota menjawab, 'Siap, saya pasang monitor.' Hal tersebut merupakan contoh...",
        options: {
            A: "Closed-loop communication",
            B: "Triage",
            C: "Secondary survey",
            D: "Debridement",
            E: "Exposure"
        },
        answer: "A",
        explanation: "Penerima mengulang instruksi → closed-loop communication."
    },

    {
        id: 99,
        topic: "Kasus Terintegrasi",
        question: "Setelah monitor terpasang dalam skenario cardiac arrest, team leader meminta evaluasi irama. RJP dihentikan sementara untuk analisis dan segera dilanjutkan. Prinsip yang benar adalah...",
        options: {
            A: "Analisis irama dilakukan selama mungkin",
            B: "Jeda RJP harus diminimalkan",
            C: "RJP dihentikan sampai diagnosis pasti",
            D: "Kompresi tidak diperlukan",
            E: "Evaluasi cukup setiap 30 menit"
        },
        answer: "B",
        explanation: "Analisis irama harus dilakukan dengan jeda RJP seminimal mungkin."
    },

    {
        id: 100,
        topic: "Kasus Terintegrasi",
        question: "Seorang pasien trauma datang dengan perdarahan aktif, sesak, dan penurunan kesadaran. Prinsip paling tepat dalam BTCLS adalah...",
        options: {
            A: "Menentukan diagnosis definitif terlebih dahulu",
            B: "Melakukan tindakan berdasarkan prioritas masalah yang mengancam nyawa",
            C: "Melakukan secondary survey lengkap sebelum tindakan",
            D: "Menunggu pemeriksaan penunjang",
            E: "Menunggu dokter spesialis"
        },
        answer: "B",
        explanation: "Prinsip BTCLS adalah menangani masalah yang mengancam nyawa berdasarkan prioritas."
    }

];


// =====================================================
// VALIDASI BANK SOAL
// =====================================================

console.log(`BTCLS Quiz: ${questions.length} soal berhasil dimuat.`);

if (questions.length !== 100) {
    console.error(
        `PERINGATAN: Jumlah soal bukan 100. Saat ini: ${questions.length}`
    );
}
