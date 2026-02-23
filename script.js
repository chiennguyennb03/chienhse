let currentLang = 'en'; // Ngôn ngữ mặc định khởi tạo

// Hàm chuyển đổi ngôn ngữ
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'vi' : 'en';
    updateContent();
    updateToggleUI();
}

// Cập nhật giao diện nút gạt ngôn ngữ
function updateToggleUI() {
    const thumb = document.getElementById('toggle-thumb');
    const flagIcon = document.getElementById('flag-icon');
    const labelEn = document.getElementById('label-en');
    const labelVi = document.getElementById('label-vi');
    const toggleBtn = document.getElementById('lang-toggle-btn');

    if (currentLang === 'vi') {
        thumb.classList.remove('translate-x-0');
        thumb.classList.add('translate-x-7');
        flagIcon.src = "https://flagcdn.com/vn.svg";
        flagIcon.alt = "Vietnamese";
        
        labelEn.classList.replace('text-secondary', 'text-gray-400');
        labelVi.classList.replace('text-gray-400', 'text-secondary');
        toggleBtn.classList.replace('bg-gray-200', 'bg-primary/20');
    } else {
        thumb.classList.remove('translate-x-7');
        thumb.classList.add('translate-x-0');
        flagIcon.src = "https://flagcdn.com/gb.svg";
        flagIcon.alt = "English";
        
        labelVi.classList.replace('text-secondary', 'text-gray-400');
        labelEn.classList.replace('text-gray-400', 'text-secondary');
        toggleBtn.classList.replace('bg-primary/20', 'bg-gray-200');
    }
}

// Hàm render dữ liệu từ data.js vào HTML
function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

// Khởi chạy khi DOM tải xong
document.addEventListener('DOMContentLoaded', () => {
    // 1. Tải báo cáo Power BI
    const powerbiIframe = document.getElementById('powerbi-iframe');
    if(powerbiIframe) {
        powerbiIframe.src = POWERBI_URL;
    }
    
    // 2. Render ngôn ngữ mặc định
    updateContent();

    // 3. Logic cho nút Logo (Cuộn lên đầu và làm sạch URL)
    const logoBtn = document.getElementById('logo-btn');
    if (logoBtn) {
        logoBtn.addEventListener('click', () => {
            // Navigate (điều hướng) về vị trí đầu trang
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // Loại bỏ bất kỳ dấu # nào trên URL nếu có
            history.replaceState(null, null, window.location.pathname);
        });
    }

    // 4. Logic cho các thẻ <a> (Cuộn mượt mà không đổi URL)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Intercept (đánh chặn) hành vi mặc định của trình duyệt
            e.preventDefault(); 
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});