# 👨‍💻 Manjeet Kumar Singh — Developer Portfolio

[![Java](https://img.shields.io/badge/Java-17-orange?style=flat&logo=java)](https://www.java.com/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.x-brightgreen?style=flat&logo=springboot)](https://spring.io/projects/spring-boot)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?style=flat&logo=bootstrap)](https://getbootstrap.com/)
[![Fly.io](https://img.shields.io/badge/Deployed%20on-Fly.io-blueviolet?style=flat&logo=fly.io)](https://fly.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A professional, modern, and recruiter-friendly developer portfolio built with **Java Spring Boot**, **Thymeleaf**, **Bootstrap 5**, and **jQuery**.

---

## 🌐 Live Demo

🔗 **[manjeet-portfolio.fly.dev](https://manjeet-portfolio.fly.dev)**

---

## ✨ Features

- 🎯 **Typing Hero Animation** — powered by Typed.js
- 📊 **Animated Skill Progress Bars** — scroll-triggered
- 🔢 **Stats Counter** — Years of experience, projects, deployments
- 🃏 **Glassmorphism Project Cards** with image carousel
- 🖼️ **DevIcon Tech Logos** in project showcase
- 📬 **Live Contact Form** — wired to Spring Boot REST API
- ⬆️ **Back-to-Top** floating button
- 📱 **Fully Responsive** — mobile-first design
- ⬇️ **Resume Download** button in navbar

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | Java 17, Spring Boot, Spring MVC, REST APIs |
| **Template Engine** | Thymeleaf |
| **Frontend** | HTML5, CSS3, Bootstrap 5, jQuery, AJAX |
| **Animations** | Typed.js, Custom CSS Keyframes |
| **Icons** | FontAwesome 6, DevIcon |
| **Deployment** | Docker, Fly.io |

---

## 🚀 Run Locally

### Prerequisites
- Java 17+
- Maven 3.8+

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/manjeet-kr-singh/manjeet-singh-portfolio.git
cd manjeet-singh-portfolio

# 2. Add your personal assets (optional)
# - src/main/resources/static/img/profile.jpg  (your photo)
# - src/main/resources/static/img/budget1.jpg  (project screenshots)
# - src/main/resources/static/img/budget2.jpg
# - src/main/resources/static/img/budget3.jpg
# - src/main/resources/static/pdf/Manjeet_Kumar_Singh_Resume.pdf

# 3. Run the app
./mvnw spring-boot:run
```

Open your browser at: **http://localhost:8080**

---

## 🐳 Deploy with Docker

```bash
# Build the Docker image
docker build -t manjeet-portfolio .

# Run the container
docker run -p 8080:8080 manjeet-portfolio
```

---

## ☁️ Deploy to Fly.io

```bash
# Install flyctl CLI and login
flyctl auth login

# Deploy (reads Dockerfile + fly.toml automatically)
flyctl deploy
```

---

## 📁 Project Structure

```
src/
├── main/
│   ├── java/com/manjeetsingh/portfolio/
│   │   ├── PortfolioApplication.java
│   │   ├── controller/
│   │   │   ├── PortfolioController.java   # Serves the main page
│   │   │   └── ContactController.java     # REST API for contact form
│   │   └── dto/
│   │       └── ContactRequest.java
│   └── resources/
│       ├── templates/
│       │   └── index.html                 # Thymeleaf main template
│       ├── static/
│       │   ├── css/style.css              # Custom dark theme styles
│       │   ├── js/main.js                 # Animations & AJAX logic
│       │   ├── img/                       # (gitignored — add locally)
│       │   └── pdf/                       # (gitignored — add locally)
│       └── application.properties
├── Dockerfile
└── fly.toml
```

---

## 📬 Contact

**Manjeet Kumar Singh**
- 📧 [manjeet.kr.singh007@gmail.com](mailto:manjeet.kr.singh007@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/manjeetks007/)
- 🐙 [GitHub](https://github.com/manjeet-kr-singh)

---

<p align="center">Designed & Built with ❤️ by <strong>Manjeet Kumar Singh</strong></p>
