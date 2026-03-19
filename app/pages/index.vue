<script setup lang="ts">

useSeoMeta({
  title: 'Muhammad Ardan Hilal — Frontend & Mobile Developer',
  description: 'Frontend and Mobile Developer with 2+ years of experience in Vue.js, React.js, Flutter, and Kotlin.',
})

const profile = {
    name: 'Muhammad Ardan Hilal',
    role: 'Frontend & Mobile Developer',
    location: 'Menteng, Central Jakarta',
    email: 'ardn.h79@gmail.com',
    phone: '(+62) 8953-5765-3808',
    linkedin: 'https://linkedin.com/in/ardnh',
    github: 'https://github.com/Ardnh',
    summary: 'Frontend and Mobile Developer with 2+ years of experience crafting high-quality web and mobile applications using Vue.js, React.js, Flutter, and Kotlin. Strong background in building scalable, performant, and user-centric UIs, collaborating effectively within cross-functional teams.',

    experience: [
        {
            title: 'Frontend Developer',
            company: 'PT. The Master Steel Manufactory',
            period: '2023 — Present',
            highlights: [
                'Developed ERP-like internal web and mobile applications using Vue.js, TypeScript, and Flutter.',
                'Integrated RESTful APIs and performed comprehensive UI debugging to enhance stability.',
                'Built mobile apps with Flutter; integrated Firebase Cloud Messaging for real-time notifications.',
                'Oversaw full mobile deployment cycle from development to Play Store release.',
                'Designed UI/UX prototypes in Figma and prepared comprehensive technical documentation.',
                'Migrated legacy APIs including endpoint updates, response adaptation, and integration testing.',
            ],
        },
        {
            title: 'Freelance Frontend Developer',
            company: 'PT. Allin Karya Nusantara',
            period: 'Freelance',
            highlights: [
                'Frontend development for a Hospital Information System using Vue.js and Element Plus.',
                'Built a government livestock statistics application with Vuex, Vue Router, and REST API integration.',
            ],
        },
        {
            title: 'Backend Developer Intern',
            company: 'Department of Informatics Engineering',
            period: 'Internship',
            highlights: [
                'Backend development using Go (Golang) with RESTful API design and implementation.',
                'Integration with Telegram Bot API and Web Push Notification systems.',
            ],
        },
    ],

    projects: [
        {
            name: 'Couple Planner',
            role: 'Frontend Developer',
            stack: ['Vue.js', 'TypeScript', 'PrimeVue', 'Pinia'],
            description: 'Wedding planning app with budgeting tools, vendor management, and payment gateway integration.',
        },
        {
            name: 'Q Projects',
            role: 'Fullstack Developer',
            stack: ['Kotlin', 'Golang', 'GitHub Actions'],
            description: 'Project management app with multi-project support, task tracking, and expense management with CI/CD to VPS.',
        },
        {
            name: 'Catsu App',
            role: 'Frontend Developer',
            stack: ['React.js', 'Redux Toolkit'],
            description: 'Entertainment web app for cat enthusiasts integrating The Cat API with modern state management.',
        },
        {
            name: 'Go-Todolist',
            role: 'Backend Developer',
            stack: ['Golang', 'JWT', 'MySQL'],
            description: 'RESTful API with full CRUD, JWT authentication, and a four-layer repository architecture.',
        },
        {
            name: 'Majalengka E-Gov App',
            role: 'Frontend Developer',
            stack: ['Vue.js', 'Vuex', 'Bootstrap'],
            description: 'Internal information system for Majalengka Regency Government.',
        },
        {
            name: 'Sinarmas Dashboard',
            role: 'UI Developer',
            stack: ['Vue.js', 'Quasar'],
            description: 'Interactive internal dashboard for Sinarmas Group with data visualization support.',
        },
        {
            name: 'Travelio',
            role: 'Frontend Developer',
            stack: ['React', 'TypeScript', 'RTK', 'Tailwind CSS'],
            description: 'Forum and article management app with auto-loading threads, CRUD, and commenting system.',
        },
        {
            name: 'E-Quran',
            role: 'Frontend Developer',
            stack: ['Nuxt.js', 'TypeScript', 'PWA'],
            description: "Progressive Web App for reading Qur'an surahs and tafsir with offline caching strategies.",
        },
    ],

    skills: [
        { category: 'Languages', items: ['TypeScript', 'Kotlin', 'Dart', 'Golang'] },
        { category: 'Frontend', items: ['Vue.js', 'React.js', 'Nuxt.js', 'Jetpack Compose'] },
        { category: 'Mobile', items: ['Flutter', 'Android (Kotlin)'] },
        { category: 'Backend', items: ['Golang Fiber', 'RESTful API', 'JWT'] },
        { category: 'State Management', items: ['Pinia', 'Vuex', 'Redux Toolkit', 'Provider'] },
        { category: 'Tools', items: ['Git', 'GitHub', 'Figma', 'Docker', 'Firebase'] },
    ],

    certifications: [
        'Basic Web Programming — Dicoding',
        'Frontend Development for Beginners — Dicoding',
        'Basic JavaScript Programming — Dicoding',
        'Building Web Applications with React — Dicoding',
        'Vue – The Complete Guide (Including Router & Composition API)',
    ],

    education: {
        degree: 'Bachelor of Informatics Engineering',
        school: 'State Islamic University Sunan Gunung Djati',
        location: 'Bandung',
        period: '2018 – 2023',
    },

    languages: [
        { lang: 'Indonesian', level: 'Native' },
        { lang: 'English', level: 'Passive — technical documentation' },
    ],
}
</script>

<template>
    <div class="min-h-screen bg-white dark:bg-neutral-950">

        <!-- ── NAVBAR ── -->
        <Navbar :email="profile.email" />

        <main class="max-w-3xl mx-auto px-6">

            <!-- ── HERO ── -->
            <HeroSection
                :name="profile.name"
                :role="profile.role"
                :location="profile.location"
                :summary="profile.summary"
                :email="profile.email"
                :github="profile.github"
                :linkedin="profile.linkedin"
            />

            <!-- ── EXPERIENCE ── -->
            <ExperienceSection :experience="profile.experience"/>

            <!-- ── PROJECTS ── -->
            <ProjectsSection :projects="profile.projects" />

            <!-- ── SKILLS ── -->
            <SkillsSection :skills="profile.skills" />

            <!-- ── EDUCATION + CERTS + LANG ── -->
            <section class="py-14 border-b border-neutral-100 dark:border-neutral-900">
                <div class="grid md:grid-cols-3 gap-10">

                    <!-- Education -->
                    <EducationSection :education="profile.education" />

                    <!-- Certifications -->
                    <CertificationsSection :certifications="profile.certifications" />

                    <!-- Languages -->
                    <LanguagesSection :languages="profile.languages" />
                    
                </div>
            </section>

            <!-- ── FOOTER ── -->
            <FooterSection
                :github="profile.github"
                :linkedin="profile.linkedin"
                :email="profile.email"
            />

        </main>
    </div>
</template>