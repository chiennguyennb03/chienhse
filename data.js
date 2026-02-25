// ==========================================
// 🎨 1. CÀI ĐẶT MÀU SẮC (THEME COLORS)
// ==========================================
const THEME_COLORS = {
    primary: '##BCDFFF',   // Màu chủ đạo xanh
    // primary: '#FF6B00',    // Màu chủ đạo (Cam)
    secondary: '#0A192F',  // Màu nền tối/nhấn (Xanh Navy)
    lightgray: '#F3F4F6'   // Màu nền xám nhạt
};

// ==========================================
// 📊 2. LINK BẢNG ĐIỀU KHIỂN POWER BI
// ==========================================
const POWERBI_URL = "https://app.powerbi.com/view?r=eyJrIjoiMjVkNjNmYzgtMzdjYi00NTZmLTgxNGUtZGE2ZjQ2NGNkMmVjIiwidCI6IjVlOGJjYjNiLTlhN2UtNDgzNi04N2FiLWNlYmJkNGNiM2I4MSIsImMiOjEwfQ%3D%3D";

// ==========================================
// 🌍 3. TỪ ĐIỂN NỘI DUNG (TRANSLATIONS)
// ==========================================
const translations = {
    en: {
        logo_text: 'CHIENHSE<span class="text-primary">.VN</span>',
        nav_about: "About",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_contact: "Contact",
        
        hero_tagline: '<i class="fas fa-hard-hat mr-2"></i>Safety First. Data Driven.',
        hero_name: "NGUYEN NGOC CHIEN",
        hero_role: "Valedictorian | HSE Supervisor | Data-Driven Safety",
        hero_desc: "Transforming traditional safety management into digital intelligence using Power BI & ISO 45001.",
        btn_dashboard: 'View Dashboard <i class="fas fa-arrow-right"></i>',
        btn_learn_more: "Learn More",
        
        about_title: "About Me",
        about_content: "Graduated as the <strong>Top 1 Safety Engineering Student</strong> (GPA 3.66/4.0). With a strong foundation in legislation and risk assessment, I am bridging the gap between field safety and data analytics to minimize incidents in manufacturing environments.",
        
        project_title: "Interactive Safety Dashboard",
        project_desc: "An interactive Power BI report tracking Key Performance Indicators (KPIs) like LTIFR, Near-misses, and Training Hours.",
        
        skills_title: "Core Competencies",
        skill_1_title: "Safety Management",
        skill_1_list: `
            <li class="flex items-center"><i class="fas fa-check-circle text-primary/70 mr-3 text-sm"></i> ISO 45001</li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary/70 mr-3 text-sm"></i> OSHA 1910</li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary/70 mr-3 text-sm"></i> HIRA</li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary/70 mr-3 text-sm"></i> JSA</li>`,
        skill_2_title: "Data Analytics",
        skill_2_list: `
            <li class="flex items-center"><i class="fas fa-check-circle text-secondary/70 mr-3 text-sm"></i> Microsoft Power BI</li>
            <li class="flex items-center"><i class="fas fa-check-circle text-secondary/70 mr-3 text-sm"></i> DAX Functions</li>
            <li class="flex items-center"><i class="fas fa-check-circle text-secondary/70 mr-3 text-sm"></i> Advanced Excel</li>`,
        skill_3_title: "Soft Skills",
        skill_3_list: `
            <li class="flex items-center"><i class="fas fa-check-circle text-primary/70 mr-3 text-sm"></i> Training & Coaching</li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary/70 mr-3 text-sm"></i> English (B2)</li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary/70 mr-3 text-sm"></i> Leadership</li>`,
        
        footer_connect: "Let's Connect",
        footer_desc: "Ready to elevate safety standards through data-driven insights in your manufacturing facility?",
        footer_copyright: "&copy; 2026 Nguyen Ngoc Chien. Built for Safety.",
        footer_slogan: '<i class="fas fa-hard-hat text-primary mr-1"></i> Data-Driven HSE'
    },
    vi: {
        logo_text: 'CHIENHSE<span class="text-primary">.VN</span>',
        nav_about: "Giới thiệu",
        nav_projects: "Dự án",
        nav_skills: "Kỹ năng",
        nav_contact: "Liên hệ",
        
        hero_tagline: '<i class="fas fa-hard-hat mr-2"></i>An toàn là trên hết. Định hướng dữ liệu.',
        hero_name: "NGUYỄN NGỌC CHIẾN",
        hero_role: "Thủ khoa | Giám sát HSE | An toàn hướng dữ liệu",
        hero_desc: "Chuyển đổi quản lý an toàn truyền thống sang trí tuệ số sử dụng Power BI & ISO 45001.",
        btn_dashboard: 'Xem Dashboard <i class="fas fa-arrow-right"></i>',
        btn_learn_more: "Tìm hiểu thêm",
        
        about_title: "Về tôi",
        about_content: "Tốt nghiệp <strong>Thủ khoa ngành Kỹ thuật Bảo hộ lao động</strong> (GPA 3.66/4.0). Với nền tảng vững chắc về luật pháp và đánh giá rủi ro, tôi kết nối an toàn hiện trường với phân tích dữ liệu để giảm thiểu tai nạn trong môi trường sản xuất.",
        
        project_title: "Bảng dữ liệu An toàn tương tác",
        project_desc: "Báo cáo Power BI tương tác theo dõi các Chỉ số Hiệu suất Chính (KPI) như LTIFR, Cận nguy (Near-misses) và Giờ đào tạo.",
        
        skills_title: "Năng lực cốt lõi",
        skill_1_title: "Quản lý An toàn",
        skill_1_list: `
            <li class="flex items-center"><i class="fas fa-check-circle text-primary/70 mr-3 text-sm"></i> ISO 45001</li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary/70 mr-3 text-sm"></i> OSHA 1910</li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary/70 mr-3 text-sm"></i> HIRA</li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary/70 mr-3 text-sm"></i> JSA</li>`,
        skill_2_title: "Phân tích dữ liệu",
        skill_2_list: `
            <li class="flex items-center"><i class="fas fa-check-circle text-secondary/70 mr-3 text-sm"></i> Microsoft Power BI</li>
            <li class="flex items-center"><i class="fas fa-check-circle text-secondary/70 mr-3 text-sm"></i> DAX Functions</li>
            <li class="flex items-center"><i class="fas fa-check-circle text-secondary/70 mr-3 text-sm"></i> Advanced Excel</li>`,
        skill_3_title: "Kỹ năng mềm",
        skill_3_list: `
            <li class="flex items-center"><i class="fas fa-check-circle text-primary/70 mr-3 text-sm"></i> Đào tạo & Huấn luyện</li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary/70 mr-3 text-sm"></i> Tiếng Anh (B2)</li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary/70 mr-3 text-sm"></i> Lãnh đạo</li>`,
        
        footer_connect: "Kết nối",
        footer_desc: "Sẵn sàng nâng cao tiêu chuẩn an toàn thông qua dữ liệu tại nhà máy của bạn?",
        footer_copyright: "&copy; 2026 Nguyễn Ngọc Chiến. Tận tâm vì An toàn.",
        footer_slogan: '<i class="fas fa-hard-hat text-primary mr-1"></i> Data-Driven HSE'
    }

};
