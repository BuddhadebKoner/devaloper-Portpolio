const projects = [
    // (Projects array remains unchanged)
    {
        image: 'projectDetails/advance-portpolio-webapp-project.webp',
        title: '1. Travel vlog webapp',
        details: 'This website is a clone of yatridoctor.graphy. It has a login popup and many other features. Click on the GitHub icon to access the code.',
        skills: ['HTML','CSS','JS'],
        link: 'https://github.com/BuddhadebKoner/TravelVlogerWebapp'
    },
    {
        image: 'projectDetails/travelvlog-webapp-project.webp',
        title: '2. Advance portpoilo',
        details: 'This is a portfolio website that is fully responsive for any device. There is a section showcasing YouTube videos. Click on the GitHub icon to access the code.',
        skills: ['HTML', 'CSS','JS'],
        link: 'https://github.com/BuddhadebKoner/advance-portpolio'
    },
    // ... (repeat for other projects)
];

let currentProjectIndex = 0;
const projectContainer = document.querySelector('.section.worksection');

function showProject(index) {
    projectContainer.innerHTML = getProjectHTML(index);
    currentProjectIndex = index;
}

function showNextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    showProject(currentProjectIndex);
}

function getProjectHTML(index) {
    const project = projects[index];
    const skillsHTML = project.skills.map(skill => `<li>${skill}</li>`).join('');
    return `
        <div class="project-box" id="project">
        <h3 id="worksectionheading">Works</h3>
        <p class="DetailsInAboutSectionHeading3">${project.title}</p>
        <img src="img/laptopFream.png" alt="" class="laptopFream">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <button class="swap-button" onclick="showNextProject()"><img src="svgItems/Frame.svg" alt="" class="arrowIconBtn"></button>
        </div>
        
        <div class="project-details">
            <h2>${project.title}</h2>
            <p class="DetailsInAboutSectionHeading3 worksectiondetailstext">${project.details}</p>
            <a href="${project.link}" target="_blank">
            <img src="icons/github.svg" alt="" class="githubiconworksection">
            </a>
            <ul>${skillsHTML}</ul>
        </div>
    `;
}

// Initial project display
showProject(currentProjectIndex);
