/*------------------ Current Path ------------------------- */
let currentPage = window.location.pathname;

if (currentPage.includes("index.html") || currentPage === "/") {
    document.getElementById("home").classList.add("active");
}
else if (currentPage.includes("explore.html")) {
    document.getElementById("explore").classList.add("active");
}
else if (currentPage.includes("blog.html")) {
    document.getElementById("blog").classList.add("active");
}
else if (currentPage.includes("contact.html")) {
    document.getElementById("contact").classList.add("active");
}

/*------------------ List of classes ------------------------- */

const courseList = [
    {
        id: 1,
        course: "CIS-1440",
        description: "Front-End Web Technologies",
        link: "#"
    },
    {
        id: 2,
        course: "CIS-1200",
        description: "Intro to Database Systems",
        link: "#"
    },
    {
        id: 3,
        course: "CIS-1050",
        description: "Personal Comp Prod Tools",
        link: "#"
    },
    {
        id: 4,
        course: "ESL-2520",
        description: "Writing/Reading IV Acad IV",
        link: "#"
    },
    {
        id: 5,
        course: "ESL-2510",
        description: "Write/Read for Acad Purp III",
        link: "#"
    },
    {
        id: 6,
        course: "ESL-2410",
        description: "Int Eng Gram & List Comm Skil",
        link: "#"
    }
];

const classesContainer = document.getElementById("classes-container");

console.log("Classes container:", classesContainer);

if (classesContainer) {
    classesContainer.innerHTML = courseList.map(item => {
        return `
            <tr>
                <td>${item.course}</td>
                <td>${item.description}</td>
                <td>
                    <a href="${item.link}">View Details</a>
                </td>
            </tr>
        `;
    }).join("");
}

/*------------------ List of education & skills -----------------**/

/* ================= EDUCATION DATA ================= */

const educationData = [
    {
        date: "2025 – Present",
        school: "Oakland Community College (OCC)",
        degree: "Computer Information Systems",
        specialization: "Software Engineering",
        website: "https://www.oaklandcc.edu/"
    },
    {
        date: "2022 – 2023",
        school: "ESMT Dakar, Senegal",
        degree: "Bachelor's Degree in Telecommunications and Information Technology",
        specialization: "Development of Distributed Applications",
        website: "https://www.esmt.sn/"
    },
    {
        date: "2017 – 2022",
        school: "University Cheikh Anta Diop, DK, Senegal",
        degree: "Bachelor's Degree in Physics, Chemistry, and Materials Science",
        specialization: "",
        website: "https://www.ucad.sn/"
    },
    {
        date: "2016",
        school: "Les Pédagogues (CMTM), Dakar, Senegal",
        degree: "Senior Secondary Education Diploma",
        specialization: "",
        website: "https://groupelespedagogues.com/"
    }
];


/* ================= DISPLAY EDUCATION ================= */

const educationContainer = document.getElementById("education-container");

if (educationContainer) {
    educationData.forEach(education => {
        educationContainer.innerHTML += `
            <div class="education-card">
                <h3>
                    <span>${education.date} → </span>
                    ${education.school}
                </h3>

                <p>
                    <strong>Degree:</strong> ${education.degree}
                </p>

                ${education.specialization ? `
                    <p>
                        <strong>Specialization:</strong>
                        ${education.specialization}
                    </p>
                ` : ""}

                <p>
                    <a href="${education.website}" target="_blank"
                       rel="noopener noreferrer">
                        Visit
                    </a>
                </p>
            </div>
        `;
    });
}


/* ================= SKILLS DATA ================= */

const skillsData = [
    { name: "HTML & CSS", percentage: 85, className: "html" },
    { name: "JavaScript", percentage: 70, className: "javascript" },
    { name: "TypeScript", percentage: 80, className: "javascript" },
    { name: "Dart", percentage: 70, className: "javascript" },
    { name: "Java", percentage: 62, className: "java" },
    { name: "Angular", percentage: 75, className: "javascript" },
    { name: "Flutter & Ionic", percentage: 65, className: "frameworks" },
    { name: "SQL & Databases", percentage: 60, className: "sql" }
];


/* ================= DISPLAY SKILLS ================= */

const skillsContainer = document.getElementById("skills-container");

if (skillsContainer) {
    skillsData.forEach(skill => {
        skillsContainer.innerHTML += `
            <div class="skill">
                <div class="skill-info">
                    <span>${skill.name}</span>
                    <span>${skill.percentage}%</span>
                </div>

                <div class="skill-bar">
                    <div class="skill-progress ${skill.className}"
                         data-progress="${skill.percentage}">
                    </div>
                </div>
            </div>
        `;
    });
}


/* ================= SKILLS ANIMATION ================= */

const skillsSection = document.querySelector(".academic-skills");

if (skillsSection) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll(".skill-progress").forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.width = bar.dataset.progress + "%";
                    }, index * 150);
                });

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(skillsSection);
}


/*------------------ List of information in the blog ------------------------- */

const blogs = [
    {
        id: 1,
        category: "News",
        title: "Hello",
        image: "assets/image/hello.jpg",

        author: "Omar Dembele",
        date: "October 22, 2026",
        readTime: "5 min read",
        status: "Published",

        description: "Welcome to a blog dedicated to the world of technology, programming, and innovation.",

        details: "Welcome to a blog dedicated to the world of technology, an essential resource for software engineers, developers, IT professionals, students, and anyone passionate about the digital world. This blog is created by Omar Dembele, a software developer with a strong interest in web and mobile application development, programming, and emerging technologies. Through this platform, I aim to share my knowledge, experiences, and discoveries while exploring the constantly evolving world of technology. Here, you will find valuable insights, in-depth analyses, practical tutorials, and useful tips covering different areas of software development. From frontend technologies such as HTML, CSS, JavaScript, and Angular to backend development with Java and Spring Boot, this blog explores the tools and technologies used to build modern applications. You will also discover articles about mobile application development, database management, software engineering principles, problem-solving techniques, and best coding practices. Whether you are a beginner taking your first steps into programming or an experienced developer looking to expand your knowledge, there will always be something useful to explore. Beyond technical tutorials, this blog is also a place to share ideas, discuss challenges, explore new technologies, and learn from real-world development experiences. Technology is constantly changing, and continuous learning is essential to staying up to date and improving our skills. My goal is simple: to learn, grow, and share knowledge with others who have the same passion for technology and innovation. Let's explore, learn, and build the future of technology together!",

        technologies: ["HTML5", "CSS3", "JavaScript"],

        tags: [
            "Technology",
            "Programming",
            "Web Development",
            "Innovation"
        ],

        features: [
            "Technology news and articles",
            "Programming tutorials and practical tips",
            "Web and mobile development topics",
            "Software engineering and best practices",
            "Emerging technologies and innovation",
            "Knowledge sharing and continuous learning"
        ]
    },

    {
        id: 2,
        category: "Programming",
        title: "Becoming a Frontend Developer",
        image: "assets/image/become_dev.jfif",

        author: "Omar Dembele",
        date: "October 25, 2026",
        readTime: "4 min read",
        status: "Published",

        description: "Discover the journey of becoming a frontend developer and the technologies used to build modern websites.",

        details: "This article presents the fundamentals of frontend development and the technologies used to create modern, interactive, and user-friendly websites. It explores the role of a frontend developer and explains how frontend development contributes to the overall user experience of a website or web application. It introduces the three core technologies of web development: HTML, CSS, and JavaScript. HTML provides the structure and content of a webpage, CSS controls its appearance and layout, while JavaScript adds interactivity and dynamic functionality. Together, these technologies form the foundation of frontend development. The article also explores important concepts such as responsive web design, website navigation, user interface development, browser compatibility, and accessibility. It highlights the importance of creating websites that work smoothly across different devices, including desktop computers, tablets, and smartphones. In addition, it discusses useful frontend frameworks and libraries such as Angular, React, and Vue.js, which help developers build more organized, reusable, and maintainable applications. It also introduces essential development practices, including writing clean code, debugging errors, organizing project files, and using version control tools like Git and GitHub. Whether you are a beginner learning your first programming languages or someone looking to improve their web development skills, this article provides a starting point for understanding frontend development and building a strong foundation for a career in web development.",

        technologies: ["HTML", "CSS", "JavaScript"],

        tags: [
            "Frontend",
            "Web Development",
            "HTML",
            "JavaScript"
        ],

        features: [
            "Learn web development fundamentals",
            "Understand responsive design",
            "Discover frontend tools",
            "Explore interactive web development"
        ]
    },
    

    {
        id: 3,
        category: "Backend Development",
        title: "Understanding Backend Development",
        image: "assets/image/backend.jpg",

        author: "Omar Dembele",
        date: "November 2, 2026",
        readTime: "8 min read",
        status: "Published",

        description: "Explore backend development and discover how servers, databases, APIs, and programming languages work together to power modern applications.",

        details: "This article explores the fundamentals of backend development and its essential role in building modern web and mobile applications. Backend development focuses on the server-side operations that users do not directly see but that make applications function properly. It explains how backend systems process requests, manage application logic, communicate with databases, and deliver information to frontend interfaces. The article introduces popular backend programming languages such as Java, Python, PHP, JavaScript (Node.js), C#, and Ruby, as well as frameworks that help developers build efficient and scalable applications. It also explores important concepts such as servers, clients, HTTP requests and responses, RESTful APIs, authentication, authorization, and data validation. In addition, it discusses database management, including relational databases such as MySQL and PostgreSQL, as well as NoSQL databases such as MongoDB. Readers will discover how frontend applications communicate with backend services through APIs to exchange and process data. Other important topics include application architecture, error handling, security, performance optimization, testing, deployment, and cloud hosting. The article also highlights the importance of writing clean, reusable, maintainable, and secure code when developing backend systems. Whether you are a beginner exploring server-side programming or an aspiring software developer looking to expand your technical knowledge, this article provides a solid introduction to backend development and the technologies used to build reliable and scalable applications.",

        technologies: [
            "Java",
            "Python",
            "PHP",
            "Node.js",
            "C#",
            "MySQL",
            "PostgreSQL",
            "MongoDB"
        ],

        tags: [
            "Backend",
            "Server-side Development",
            "APIs",
            "Databases",
            "Web Development",
            "Software Engineering"
        ],

        features: [
            "Understand backend development fundamentals",
            "Explore backend programming languages and frameworks",
            "Learn how servers and APIs work",
            "Understand database management and data persistence",
            "Explore authentication and application security",
            "Discover application architecture and design",
            "Learn about testing, deployment, and cloud hosting",
            "Understand performance optimization and scalability"
        ]
    },

    {
        id: 4,
        category: "Database Development",
        title: "Understanding Database Management",
        image: "assets/image/database.jpeg",

        author: "Omar Dembele",
        date: "November 5, 2026",
        readTime: "6 min read",
        status: "Published",

        description: "Explore database concepts, SQL queries, relational models, and the importance of managing data efficiently.",

        details: "This article introduces the fundamentals of database management and explains how databases are used to store, organize, retrieve, and manage information. It explores the concept of a Database Management System (DBMS) and its importance in modern software applications. The article presents essential database terminology, including tables, rows, columns, fields, records, attributes, primary keys, and foreign keys. It also introduces the relational database model and explains how relationships between tables help organize information and maintain data integrity. In addition, it covers Structured Query Language (SQL), including basic operations such as SELECT, INSERT, UPDATE, and DELETE. Readers will discover how to retrieve information using filtering conditions, sorting, joins, and aggregate functions. The article also explores database design concepts such as entity-relationship diagrams, normalization, and relationships between entities. Finally, it highlights the importance of data security, consistency, and efficient database design. Whether you are a beginner studying databases or a developer looking to strengthen your SQL skills, this article provides a practical introduction to understanding and working with relational databases.",

        technologies: ["SQL", "MySQL", "SQL Server"],

        tags: [
            "Database",
            "SQL",
            "DBMS",
            "Data Management"
        ],

        features: [
            "Understand database fundamentals",
            "Explore relational database models",
            "Learn basic and advanced SQL queries",
            "Understand primary and foreign keys",
            "Discover database relationships and normalization",
            "Explore data integrity and security"
        ]
    },

    {
        id: 5,
        category: "Mobile Technology",
        title: "Exploring the World of Mobile Apps",
        image: "assets/image/flutter.jfif",

        author: "Omar Dembele",
        date: "October 28, 2026",
        readTime: "6 min read",
        status: "Published",

        description: "Discover mobile applications, their features, technologies, and how they are transforming our everyday lives.",

        details: "Mobile applications have become an essential part of our everyday lives. From communication and entertainment to education, shopping, banking, and productivity, mobile apps make many daily activities easier and more accessible. This blog explores the different types of mobile applications, their purposes, and the technologies behind them. It discusses how mobile apps are designed, developed, and maintained, while highlighting important concepts such as user interface design, user experience, performance, security, and data management. It also explores the differences between native and cross-platform applications, popular mobile development frameworks, and the latest trends shaping the mobile industry. Whether you are interested in discovering useful applications, understanding how they work, or learning about mobile development, this blog provides insights into the constantly evolving world of mobile technology.",

        technologies: [
            "Mobile Technology",
            "Android",
            "iOS",
            "Flutter",
            "React Native"
        ],

        tags: [
            "Mobile Apps",
            "Technology",
            "Android",
            "iOS",
            "App Development",
            "Innovation"
        ],

        features: [
            "Explore different types of mobile applications",
            "Discover popular mobile technologies",
            "Understand native and cross-platform apps",
            "Learn about mobile app design and development",
            "Discover the latest mobile technology trends"
        ]
    },

    {
    id: 6,
    category: "Artificial Intelligence",
    title: "How Artificial Intelligence Is Changing Our Daily Lives",
    image: "assets/image/ai.jpg",

    author: "Omar Dembele",
    date: "November 22, 2026",
    readTime: "7 min read",
    status: "Published",

    description: "Discover how artificial intelligence is transforming the way we work, learn, communicate, and interact with technology.",

    details: "Artificial Intelligence (AI) is becoming an important part of our everyday lives. From virtual assistants and smart devices to online recommendations, healthcare, education, and transportation, AI is changing how people interact with technology. This blog explores what artificial intelligence is, how it works, and how it is used in different industries. It also introduces important concepts such as machine learning, natural language processing, automation, and generative AI. Furthermore, it discusses the benefits and challenges of AI, including productivity, privacy, security, and ethical concerns. As technology continues to evolve, understanding artificial intelligence can help us prepare for the future and discover new opportunities in the digital world.",

    technologies: [
        "Artificial Intelligence",
        "Machine Learning",
        "Python",
        "ChatGPT",
        "Automation"
    ],

    tags: [
        "Artificial Intelligence",
        "Machine Learning",
        "Technology",
        "Innovation",
        "Future",
        "Digital World"
    ],

    features: [
        "Understand what artificial intelligence is",
        "Discover how AI works in everyday life",
        "Explore machine learning and automation",
        "Learn about the benefits and challenges of AI",
        "Discover how AI is shaping the future"
    ]
}
];

/*------------------Display blog ------------------------- */

const blogContainer = document.getElementById("blog-container");

if (blogContainer) {
    blogContainer.innerHTML = blogs.map(blog => `
        <div class="card-box">
            <img src="${blog.image}" alt="${blog.title}" class="project-image-blog">
            <span>${blog.category}</span>
            <h3>${blog.title}</h3>
            <h4>${blog.description}</h4>
            <a href="details.html?id=${blog.id}" class="full-width-btn">
                See More
            </a>
        </div>
    `).join("");
}

/*------------------Display details of blog ------------------------- */
const detailsContainer = document.getElementById("section-details");

if (detailsContainer) {

    const params = new URLSearchParams(window.location.search);
    const projectId = Number(params.get("id"));

    const project = blogs.find(p => p.id === projectId);

    if (project) {

        detailsContainer.innerHTML = `
            <div class="project-details">

                <div class="project-header">
                    <h4>
                        By ${project.author}
                        in <span>${project.category}</span>
                        – ${project.date}
                    </h4>

                    <h1>${project.title}</h1>

                    <div class="project-meta">
                        <span>
                            <i class="fa-regular fa-clock"></i>
                            ${project.readTime}
                        </span>

                        <span>
                            <i class="fa-regular fa-circle-check"></i>
                            ${project.status}
                        </span>
                    </div>
                </div>

                <div class="project-image-container">
                    <img
                        src="${project.image}"
                        alt="${project.title}"
                        class="project-image"
                    >
                </div>

                <div class="project-content">

                    <p>${project.details}</p>

                    <h3>Technologies Used</h3>

                    <div class="skills-list">
                        ${project.technologies.map(tech =>
                            `<span>${tech}</span>`
                        ).join("")}
                    </div>

                    <h3>Topics Covered</h3>

                    <ul>
                        ${project.features.map(feature =>
                            `<li>${feature}</li>`
                        ).join("")}
                    </ul>

                    <h3>Tags</h3>

                    <div class="tags-list">
                        ${project.tags.map(tag =>
                            `<span>#${tag}</span>`
                        ).join("")}
                    </div>

                </div>

            </div>
        `;

    } else {

        detailsContainer.innerHTML = `
            <div class="project-not-found">
                <h1>Article Not Found</h1>
                <p>Sorry, this article does not exist.</p>

                <a href="index.html#projects" class="btn">
                    Back to Projects
                </a>
            </div>
        `;
    }
}

/*------------------ function to open or download cv ------------------------- */
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

/*------------------List of information of my personal projects ------------------------- */

const personal_projects = [
    {
        id: 1,
        image: "assets/image/tache.png",
        category: "HTML-CSS & JS",
        title: "Expense Tracker",
        description: "App designed to track income, manage expenses, and monitor spending.",
        link: "expense_tracker.html"
    },

    {
        id: 2,
        image: "assets/image/produit.jpg",
        category: "HTML-CSS & JS",
        title: "Todo List",
        description: "App designed to create, organize, and manage daily tasks.",
        link: "todo_list.html"
    },

    {
    id: 3,
    image: "assets/image/weather.avif",
    category: "HTML-CSS & JS",
    title: "Weather App",
    description: "App designed to display current weather conditions and forecasts for different locations.",
    link: "weather.html"
    }
];

const container = document.getElementById("project-box");

if(container) {
    container.innerHTML = personal_projects.map(project => `
        <div class="card-box">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <span>${project.category}</span>
            <h3>${project.title}</h3>
            <h4>${project.description}</h4>
            <a href="${project.link}" class="full-width-btn">
                See More
            </a>
        </div>
    `).join("");
}


/*------------------ Expense Tracker ------------------------- */

const balance = document.getElementById("balance");
const money_plus= document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
);

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : []

function addTransaction (e) {
    e.preventDefault();

    if(text.value.trim() === "" || amount.value.trim() === "") {
        alert("Please add an expense and amount");
    }
    else {
        const transaction = {
            id: generateId(),
            text: text.value,
            amount: +amount.value
        };
        transactions.push(transaction);
        addTransactionToDOM(transaction);

        updateLocalStorage();
        updateValue();

        text.value = "";
        amount.value = "";
    }
}

/// Add transaction to the DOM list
function addTransactionToDOM(transaction) {

    /////// Get the sign plus or minus
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");

       // Add classes based on the value
    item.classList.add(transaction.amount < 0 ? "minus" : "plus");

    item.innerHTML = `
        ${transaction.text}
        <span class="transaction-value">${sign}$${Math.abs(transaction.amount)}</span>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">
            <i class="fa-solid fa-trash"></i>
        </button>
    `;

    list.appendChild(item);
}

// Generate a random ID
function generateId() {
    return Math.floor(Math.random() * 100000);
}

function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);

    updateLocalStorage();
    init();
}


function updateValue() {

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => acc + item, 0);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => acc + item, 0);

    const expense = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => acc + item, 0);

    balance.innerText = `$${total.toFixed(2)}`;
    money_plus.innerText = `+$${income.toFixed(2)}`;
    money_minus.innerText = `-$${Math.abs(expense).toFixed(2)}`;
}


// Update localStorage
function updateLocalStorage() {
    localStorage.setItem("transaction", JSON.stringify(transactions));
}

function init() {
    list.innerHTML = "";

    transactions.forEach(addTransactionToDOM);

    updateValue();
}

if (list && form) {
    init();
    form.addEventListener("submit", addTransaction);
}


/*------------------ TODO LIST ------------------------- */

// Get elements
const total_products = document.getElementById("total");
const list_todo = document.getElementById("list-todo");
const form_todo = document.getElementById("form_todo");
const name_product = document.getElementById("name_product");
const amount_product = document.getElementById("amount_product");

// Array
let products = [];

// Add product
function addProduct(e) {
    e.preventDefault();

    if (name_product.value.trim() === "" || amount_product.value.trim() === "") {
        alert("Please add a product name and price");
    }
    else {
        const product = {
            id: generateProductId(),
            name: name_product.value,
            price: Number(amount_product.value)
        };

        products.push(product);

        addProductToDOM(product);
        updateTotal();

        name_product.value = "";
        amount_product.value = "";
    }
}

// Add product to DOM
function addProductToDOM(product) {
    const item = document.createElement("li");

    item.innerHTML = `
        ${product.name}
        <span class="product-value">$${product.price.toFixed(2)}</span>
        <button class="delete-btn" onclick="removeProduct(${product.id})">
            <i class="fa-solid fa-trash"></i>
        </button>
    `;

    list_todo.appendChild(item);
}

// Generate ID
function generateProductId() {
    return Math.floor(Math.random() * 1000000);
}

// Remove product
function removeProduct(id) {
    products = products.filter(product => product.id !== id);

    list_todo.innerHTML = "";

    products.forEach(addProductToDOM);

    updateTotal();
}

// Calculate total
function updateTotal() {
    const total = products.reduce((acc, product) => acc + product.price, 0);

    total_products.innerText = total.toFixed(2);
}

// Event listener
if (list_todo && form_todo) {
    form_todo.addEventListener("submit", addProduct);
}


const bookButton = document.getElementById("bookButton");
const bookHint = document.getElementById("hint");

if(bookButton && bookHint) {
    bookButton.addEventListener("click", () => {
    bookButton.classList.toggle("book-active");

    if (bookButton.classList.contains("book-active")) {
        bookHint.textContent = "Web Development — Connolly & Hoar";
    } else {
        bookHint.textContent = "Click the book to discover it ↗";
    }
});
}




///////////// SEND AN EMAIL THROUGH CONTACT SECTION

const btn = document.getElementById("send_btn");
console.log("Button:", btn);

if(btn) {
    btn.addEventListener("click", function () {

    const name = document.getElementById("name_contact").value.trim();
    const email = document.getElementById("email_contact").value.trim();
    const message = document.getElementById("message_contact").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    const data = {
        name: name,
        email: email,
        message: message
    };

    fetch("https://formsubmit.co/ajax/omardembele821@gmail.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to send the message.");
        }
        return response.json();
    })
    .then(result => {
        console.log("FormSubmit response:", result);
        alert("Your message has been sent successfully!");

        document.getElementById("name_contact").value = "";
        document.getElementById("email_contact").value = "";
        document.getElementById("message_contact").value = "";

    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Your message was not sent.");
    });

});
}

/* =====================================================================
                                            RESPONSIVE
   ==================================================================== */

const navRight = document.getElementById("navRight");
const navbar = document.getElementById("navbar");

if (navRight && navbar) {

    const navIcon = navRight.querySelector("i");

    // Initial state when page loads
    navbar.classList.remove("active");
    navIcon.classList.replace("uil-times", "uil-bars");

    navRight.addEventListener("click", function () {

        navbar.classList.toggle("active");

        if (navbar.classList.contains("active")) {
            navIcon.classList.replace("uil-bars", "uil-times");
            navRight.setAttribute("aria-label", "Close navigation");
        } else {
            navIcon.classList.replace("uil-times", "uil-bars");
            navRight.setAttribute("aria-label", "Open navigation");
        }

    });
}