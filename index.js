console.log("JS File load successfully");
const projects = [
    {
        id: 1,
        category: "News",
        title: "Technology Blog",
        image: "assets/image/hello.jpg",
        description: "Welcome to a blog dedicated to the world of technology,",
        details: "This project explores technology news, digital innovation, and useful information for technology enthusiasts.",
        technologies: ["HTML", "CSS", "JavaScript"],
        features: [
            "Technology news and articles",
            "Simple and clear presentation",
            "Responsive website design"
        ]
    },
    {
        id: 2,
        category: "Programming",
        title: "Becoming a Frontend Developer",
        image: "assets/image/become_dev.jfif",
        description: "Discover the journey of becoming a frontend developer,",
        details: "This project presents the fundamentals of frontend development and the technologies used to create interactive websites.",
        technologies: ["HTML", "CSS", "JavaScript"],
        features: [
            "Learn web development fundamentals",
            "Understand responsive design",
            "Discover frontend tools"
        ]
    },
    {
        id: 3,
        category: "Mobile Development",
        title: "Flutter Applications",
        image: "assets/image/flutter.jfif",
        description: "Explore the world of mobile application development,",
        details: "This project focuses on mobile development with Flutter and the creation of applications with a smooth user experience.",
        technologies: ["Flutter", "Dart"],
        features: [
            "Cross-platform development",
            "Modern user interfaces",
            "Reusable components"
        ]
    }
];

const projectContainer = document.getElementById("project-container");

console.log("Container:", projectContainer);
console.log("Number of projects:", projects.length);

if (projectContainer) {
    projectContainer.innerHTML = projects.map(project => `
        <div class="card-box">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <span>${project.category}</span>
            <h3>${project.title}</h3>
            <h4>${project.description}</h4>
            <a href="details.html?id=${project.id}" class="full-width-btn">
                See More
            </a>
        </div>
    `).join("");
}

// Display details on details.html
const detailsContainer = document.getElementById("project-details");

if (detailsContainer) {
    const params = new URLSearchParams(window.location.search);
    const projectId = Number(params.get("id"));

    const project = projects.find(p => p.id === projectId);

    if (project) {
        detailsContainer.innerHTML = `
            <div class="project-detail">
                <img
                    src="${project.image}"
                    alt="${project.title}"
                    class="project-image"
                >

                <span>${project.category}</span>
                <h1>${project.title}</h1>
                <p>${project.details}</p>

                <h3>Technologies Used</h3>
                <div class="skills-list">
                    ${project.technologies.map(tech =>
                        `<span>${tech}</span>`
                    ).join("")}
                </div>

                <h3>Key Features</h3>
                <ul>
                    ${project.features.map(feature =>
                        `<li>${feature}</li>`
                    ).join("")}
                </ul>
            </div>
        `;
    } else {
        detailsContainer.innerHTML = `
            <h1>Project Not Found</h1>
            <p>This project does not exist.</p>
        `;
    }
}



function myCv() {
    window.open("assets/cv/CV_Omar_Dembele_English.pdf", "_blank");
}


function downloadCv() {
    const link = document.createElement("a");

    link.href = "assets/cv/CV_Omar_Dembele_English.pdf";
    link.download = "CV_Omar_Dembele_English.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

