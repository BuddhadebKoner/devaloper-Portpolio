const projects = [
    // (Projects array remains unchanged)
    {
        image: 'projectDetails/project1.jpg',
        title: 'Project 1',
        details: 'This is the details text for Project 1.',
        skills: ['HTML', 'CSS', 'JS']
    },
    {
        image: 'projectDetails/project2.jpg',
        title: 'Project 2',
        details: 'This is the details text for Project 2.',
        skills: ['python', 'c++']
    },
    {
        image: 'projectDetails/project3.jpg',
        title: 'Project 3',
        details: 'This is the details text for Project 3.',
        skills: ['HTml', 'c#']
    },
    // ... (repeat for other projects)
];

let currentProjectIndex = 0;
const projectBox = document.getElementById('project');

function showProject(index) {
    projectBox.innerHTML = getProjectHTML(index);
    currentProjectIndex = index;
}

function showNextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    showProject(currentProjectIndex);
}

function showPreviousProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    showProject(currentProjectIndex);
}

function getProjectHTML(index) {
    const project = projects[index];
    const skillsHTML = project.skills.map(skill => `<li>${skill}</li>`).join('');
    return `
    <div class="feature-section">
        <div class="project-box" id="project">
            <img src="${project.image}" alt="${project.title}" class="project-image">
        </div>
        <div class="project-details">
            <h2>${project.title}</h2>
            <p>${project.details}</p>
            <p>Skills:</p>
            <ul>${skillsHTML}</ul>
        </div>
    </div>
    `;
}


// Initial project display
showProject(currentProjectIndex);
