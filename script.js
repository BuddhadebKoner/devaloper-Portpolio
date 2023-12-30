const projects = [
    // (Projects array remains unchanged)
    {
        image: 'projectDetails/project2.jpg',
        title: 'Travel vlog webapp',
        details: 'This is the details text for Project 2.',
        skills: ['python', 'c++'],
        link: 'https://github.com/BuddhadebKoner/TravelVlogerWebapp'
    },
    {
        image: 'projectDetails/project1.jpg',
        title: 'Calculater',
        details: 'An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion. ',
        skills: ['HTML', 'CSS', 'JS'],
        link: 'https://github.com/BuddhadebKoner/stylelist-calculater'
    },
    {
        image: 'projectDetails/project3.jpg',
        title: 'Advance portpoilo',
        details: 'This is the details text for Project 3.',
        skills: ['HTML', 'c#'],
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
            <button class="swap-button" onclick="showNextProject()"><img src="svgItems/Frame.svg" alt=""></button>
        </div>
        
        <div class="project-details">
            <h2>${project.title}</h2>
            <p class="DetailsInAboutSectionHeading3">${project.details}</p>
            <ul>${skillsHTML}</ul>
            <a href="${project.link}" target="_blank"><a href="#" target="_blank">
            <img src="icons/github.svg" alt="" class="githubiconworksection">
        </a></a>
        </div>
    `;
}

// Initial project display
showProject(currentProjectIndex);
