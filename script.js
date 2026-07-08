const toggle = document.getElementById("menu-toggle");

if (toggle) {
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("no-scroll", toggle.checked);
  });
}

// home-section

const words = ["Frontend Developer", "Web Developer", "JavaScript Enthusiast"];

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, nextWordDelay);
    } else {
      setTimeout(type, typingDelay);
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, erasingDelay);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (words?.length) type();
});

// showing tabs navlink

const navlink = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    navlink.forEach((l) => {
      if (l === link) {
        l.classList.add("active");
      } else {
        l.classList.remove("active");
      }
    });

    const tabName = link.dataset.tab;

    tabs.forEach((tab) => {
      if (tab.id === tabName) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  });
});

// About section

const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
  if (aboutTabs) {
    aboutTabs[0].click();
  }
});

aboutTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    aboutTabs.forEach((a) => {
      a.classList.remove("active");
    });

    tab.classList.add("active");

    aboutContent.forEach((c) => {
      c.classList.remove("active");
    });

    const activeTab = tab.dataset.section;

    document.getElementById(activeTab).classList.add("active");

    if (activeTab === "education") {
      const educations = document.querySelector(".education-list");

      const educationList = [
        {
          id: 1,
          date: "2020 - 2021",
          degree: "Secondary School (10th)",
          institution: "Yogi Mangalnath S.V.M Inter College, Roorkee",
          details:
            "Establised a strong foundation in academics and core subjects.",
        },
        {
          id: 2,
          date: "2022 - 2023",
          degree: "Higher Secondary (12th)",
          institution: "Yogi Mangalnath S.V.M Inter College, Roorkee",
          details:
            "Completed higher secondary education with a Science background.",
        },
        {
          id: 3,
          date: "2023 - 2026 (Result Await)",
          degree: "Bachelor of Computer Applications (BCA)",
          institution: "BRD Group of Institution, Roorkee",
          details:
            "Built a foundation in computer applications and web technologies.",
        },
      ];

      const educationContent = educationList
        .map((ele) => {
          return `
        <div class="education-box"
        key =${ele?.id}>
              <h4>${ele?.date}</h4>
              <h3>${ele?.degree}</h3>
              <div class="institute-name">
                <span></span>
                <p>${ele?.institution}</p>
              </div>
              <p>${ele?.details}</p>
            </div>
        `;
        })
        .join("");

      if (educations) {
        educations.innerHTML = educationContent;
      }
    } else if (activeTab === "skills") {
      const skills = document.querySelector(".skill-list");

      const skillList = [
        {
          id: 1,
          name: "HTML - Hyper Text Markup Language",
          src: "assets/skills/html.png",
        },
        {
          id: 2,
          name: "CSS - Cascading Style Sheets",
          src: "assets/skills/css.png",
        },
        {
          id: 3,
          name: "JS-JavaScript",
          src: "assets/skills/js.png",
        },
      ];

      const skillContent = skillList
        .map((ele) => {
          return `
        <div class="skill-box" key=${ele?.id}>
              <img src=${ele?.src} alt=${ele?.name} tittle=${ele?.name} loading="lazy"/>
            </div>
        `;
        })
        .join("");

      if (skills) {
        skills.innerHTML = skillContent;
      }
    } else if (activeTab === "about-me") {
      const myInfo = document.querySelector(".my-info");

      const infoList = [
        {
          id: 1,
          key: "Name : ",
          value: "Uma Shanker",
        },
        { id: 2, key: "Country : ", value: "India" },
        {
          id: 3,
          key: "Industry : ",
          value: "Computer Science & Technology",
        },

        { id: 4, key: "Experience : ", value: "Fresher" },
        {
          id: 5,
          key: "Address : ",
          value: "Purva Deen Dayal, Roorkee - Uttrakhand",
        },
      ];

      const infoContent = infoList
        .map((ele) => {
          return `
        <div class="info-box" key=${ele?.id}>
           <span>${ele?.key}</span>
           <span>${ele?.value}</span>
        </div>   
        `;
        })
        .join("");

      if (myInfo) {
        myInfo.innerHTML = infoContent;
      }
    }
  });
});

// project section

const projectList = [
  {
    id: 1,
    number: "01",
    title: "Current weather App",
    discription:
      "Current Weather App is a responsive web application developed using HTML, CSS, and JavaScript. It provides real-time weather information by integrating a weather API, allowing users to search for any city and view details such as temperature, Feels like,and weather conditions. The project focuses on API integration, responsive design, and creating a clean and user-friendly interface.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "assets/projects/project1B.png",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    number: "02",
    title: "Tic-Tac-Toe Game",
    discription:
      "Tic Tac Toe is an interactive web-based game developed using HTML, CSS, and JavaScript. It allows two players to play alternately on a 3×3 grid while automatically detecting winning combinations and draw situations. The project demonstrates DOM manipulation, game logic implementation, event handling, and responsive user interface design.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "assets/projects/project2.png",
    liveLink: "#",
    githubLInk: "#",
  },
];

const projects = document.querySelector(".projects");

let currentIndex = 0;

const renderProjects = (index) => {
  const projectContent = projectList[index];

  const previousDisabled = currentIndex === 0;
  const nextDisabled = currentIndex === projectList.length - 1;

  projects.innerHTML = `<div class="project-info">
            <h3>${projectContent?.number}</h3>
            <h4>${projectContent?.title}</h4>
            <p>
              ${projectContent?.discription}
            </p>
            <div class="tech-stack">
              ${projectContent?.techStack
                ?.map((tech, i) => {
                  return `
                <span key= ${i}>${tech}</span>
                `;
                })
                .join(",")}
            </div>
            <hr />
            <div class="links">
              <a href=${projectContent?.liveLink}><i class="fas fa-long-arrow-alt-up"></i></a>
              <a href=${projectContent?.githubLink}><i class="fab fa-github"></i></a>
            </div>
          </div> 
           <div class="carousel">
            <img src= ${projectContent?.image} alt="${projectContent?.title}" />

            <div class="arrow">
              <a href="#" id="previous" class="${previousDisabled ? "disbaled-btn" : ""}"><i class="fas fa-chevron-left"></i></a>
              <a href="#" id="next" class="${nextDisabled ? "disbaled-btn" : ""}"><i class="fas fa-chevron-right"></i></a>
            </div>
          </div>
 `;

  document.getElementById("previous").addEventListener("click", (e) => {
    e.preventDefault();

    if (currentIndex > 0) {
      currentIndex--;
      renderProjects(currentIndex);
    }
  });

  document.getElementById("next").addEventListener("click", (e) => {
    e.preventDefault();

    if (currentIndex < projectList.length - 1) {
      currentIndex++;
      renderProjects(currentIndex);
    }
  });
};

renderProjects(currentIndex);

// contact section

const media = document.querySelector(".contact-media");

const contactList = [
  {
    id: 1,
    icon: "fas fa-phone-alt",
    name: "Phone",
    value: "+91 9675297568",
    herf: "tel:+919675297568",
  },
  {
    id: 2,
    icon: "far fa-envelope",
    name: "E-mail",
    value: "Shankeruma261@gmail.com",
    herf: "mailto:Shankeruma261@gmail.com",
  },
  {
    id: 3,
    icon: "fas fa-globe-asia",
    name: "Country",
    value: "India",
    herf: "#",
  },
];

const contactContent = contactList
  .map((ele) => {
    return `
  <div class="media" key=${ele?.id}>
              <span>
                <i class="${ele?.icon}"></i>
              </span>
              <div class="contact-value">
                <p>${ele?.name}</p>
                <a href=${ele?.herf}>${ele?.value}</a>
              </div>
            </div>
  `;
  })
  .join("");

if (media) media.innerHTML = contactContent;

// send contact message
document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !phone || !message) {
    return alert("All Fields Are Mandatory!");
  }

  emailjs
    .send("service_1pcxwjj", "template_v8ff6zi", {
      name,
      email,
      phone,
      message,
    })
    .then(
      () => {
        alert("Message Sent!");
      },
      (error) => {
        alert("Message Failed!");
        console.log("FAILED...", error);
      },
    );
});
