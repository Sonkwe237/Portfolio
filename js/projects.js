// Données des projets (à personnaliser)
const projectsData = [
    {
        id: 1,
        title: "Etat Civil",
        description: "Plateforme de gestion en ligne des actes d'Etat civils.",
        image: "images/camer.png",
        category: "web",
        tags: ["HTML", "JavaScript", "CSS", "Laravel"],
        liveUrl: "https://demo-ecommerce.com",
        githubUrl: "https://github.com/Sonkwe237/etat-civil"
    },
    {
        id: 2,
        title: "Générateur de Calendrier",
        description: "site web de generation de mini Calendrier pour une annee X.",
        image: "images/calendar.jpeg",
        category: "web",
        tags: ["JavaScript", "CSS", "HTML"],
        liveUrl: "https://calendar-pearl-delta.vercel.app/",
        githubUrl: "https://github.com/Sonkwe237/Calendar"
    },
    {
        id: 3,
        title: "Convertisseur",
        description: "Système de conversion des devises.",
        image: "images/convertisseur.jpeg",
        category: "design",
        tags: ["JS", "CSS", "HTML"],
        liveUrl: "https://convertisseur-monnaie.vercel.app/",
        githubUrl: "https://github.com/Sonkwe237/convertisseur_monnaie"
    },
    // {
    //     id: 4,
    //     title: "Réseau Social",
    //     description: "Plateforme sociale avec chat en temps réel et partage de contenu.",
    //     image: "images/projets/social.jpg",
    //     category: "web",
    //     tags: ["Vue.js", "Socket.io", "PostgreSQL"],
    //     liveUrl: "https://social-app.demo",
    //     githubUrl: "https://github.com/votrecompte/social-app"
    // },
    // {
    //     id: 5,
    //     title: "Jeu Vidéo 2D",
    //     description: "Jeu de plateforme développé avec Unity.",
    //     image: "images/projets/game.jpg",
    //     category: "mobile",
    //     tags: ["Unity", "C#", "Photoshop"],
    //     liveUrl: "https://play.google.com/store/apps/details?id=com.game",
    //     githubUrl: "https://github.com/votrecompte/game"
    // },
    // {
    //     id: 6,
    //     title: "Dashboard Analytics",
    //     description: "Tableau de bord analytique avec visualisations de données.",
    //     image: "images/projets/dashboard.jpg",
    //     category: "web",
    //     tags: ["D3.js", "Express", "MySQL", "Chart.js"],
    //     liveUrl: "https://analytics.demo",
    //     githubUrl: "https://github.com/votrecompte/analytics-dashboard"
    // }
];

// Charger les projets dynamiquement
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    if (!projectsGrid) return;
    
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card reveal';
        projectCard.setAttribute('data-category', project.category);
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i> Voir le projet
                    </a>
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> Code source
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Observer pour l'animation des cartes
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.project-card').forEach(card => {
        projectObserver.observe(card);
    });
}

// Charger les projets au démarrage
document.addEventListener('DOMContentLoaded', loadProjects);
