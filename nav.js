// Komponen Sidebar Navigasi Dinamis
const syllabus = [
    { id: 'index.html', title: 'Beranda Bootcamp', fase: 'Pendahuluan' },
    { id: 'pertemuan_1.html', title: '1. Konsep Dasar Web & HTML', fase: 'Fase 1: Front-End UI' },
    { id: 'pertemuan_2.html', title: '2. HTML Lanjutan & Form', fase: 'Fase 1: Front-End UI' },
    { id: 'pertemuan_3.html', title: '3. Pemrograman CSS', fase: 'Fase 1: Front-End UI' },
    { id: 'pertemuan_4.html', title: '4. Javascript', fase: 'Fase 1: Front-End UI' },
    { id: 'pertemuan_5.html', title: '5. Dasar PHP & Tools Server', fase: 'Fase 2: Backend Logic' },
    { id: 'pertemuan_6.html', title: '6. Percabangan (If/Else)', fase: 'Fase 2: Backend Logic' },
    { id: 'pertemuan_7.html', title: '7. Perulangan + Array Dasar', fase: 'Fase 2: Backend Logic' },
    { id: 'pertemuan_8.html', title: '8. Fungsi + Form Processing (GET/POST)', fase: 'Fase 2: Backend Logic' },
    { id: 'pertemuan_9.html', title: '9. Project Pendataan Siswa (Mulai)', fase: 'Fase 2: Backend Logic' },
    { id: 'pertemuan_10.html', title: '10. Pendataan Siswa (Penyempurnaan)', fase: 'Fase 2: Backend Logic' },
    { id: 'pertemuan_11.html', title: '11. MySQL, phpMyAdmin, dan Struktur CRUD', fase: 'Fase 3: Database & Integrasi' },
    { id: 'pertemuan_12.html', title: '12. Simulasi CRUD & Persiapan Ujian', fase: 'Fase 3: Database & Integrasi' },
    { id: 'pertemuan_13.html', title: '13. Ujian 1: Website Pribadi', fase: 'Fase Ujian Output' },
    { id: 'pertemuan_14.html', title: '14. Ujian 2: Pendataan Siswa Sederhana', fase: 'Fase Ujian Output' },
    { id: 'pertemuan_15.html', title: '15. Ujian 3: Sistem Informasi Sekolah CRUD', fase: 'Fase Ujian Output' }
];

function renderSidebar() {
    const sidebarHtml = `
        <div class="logo-container">
            <h1>BLK <span>Code</span></h1>
            <p style="font-size: 0.8rem; color: #6B7280; font-weight: 600; margin-top: 4px;">Programmer Komputer</p>
        </div>
        <ul class="nav-menu" id="nav-list">
        </ul>
    `;

    // Inject ke dokumen
    const sidebarElement = document.createElement('aside');
    sidebarElement.className = 'sidebar';
    sidebarElement.innerHTML = sidebarHtml;
    document.body.prepend(sidebarElement);

    const navList = document.getElementById('nav-list');
    let currentFase = '';

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    syllabus.forEach(item => {
        if (item.fase !== currentFase) {
            currentFase = item.fase;
            const faseLi = document.createElement('li');
            faseLi.className = 'nav-fase';
            faseLi.textContent = currentFase;
            navList.appendChild(faseLi);
        }

        const li = document.createElement('li');
        li.className = 'nav-item';
        const isActive = currentPath === item.id ? 'active' : '';

        li.innerHTML = `<a href="${item.id}" class="nav-link ${isActive}">${item.title}</a>`;
        navList.appendChild(li);
    });
}

// Jalankan saat dokumen siap
document.addEventListener('DOMContentLoaded', renderSidebar);
