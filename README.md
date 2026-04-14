# 👨‍💻 Manjeet Kumar Singh — Developer Portfolio

[![Java](https://img.shields.io/badge/Java-17-orange?style=flat&logo=openjdk)](https://www.java.com/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.x-brightgreen?style=flat&logo=springboot)](https://spring.io/projects/spring-boot)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?style=flat&logo=bootstrap)](https://getbootstrap.com/)
[![Render](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?style=flat&logo=render)](https://render.com)
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=flat&logo=docker)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A professional, modern, and recruiter-friendly developer portfolio built with **Java Spring Boot**, **Thymeleaf**, **Bootstrap 5**, and **jQuery**. Containerized with Docker and deployed on Render.

---

## 🌐 Live Demo

🔗 **[manjeet-singh-portfolio.onrender.com](https://manjeet-singh-portfolio.onrender.com/)**

> ⚠️ Running on Render free tier — may take ~30 seconds to wake up on first visit.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎯 **Typing Hero Animation** | Rotating taglines powered by Typed.js |
| 📊 **Animated Skill Progress Bars** | Scroll-triggered, gradient-filled bars |
| 🔢 **Stats Counter** | Animated number counter for experience & projects |
| 🃏 **Glassmorphism Project Cards** | Frosted-glass effect with Bootstrap carousel |
| 🖼️ **DevIcon Tech Logos** | Real technology icons in project showcase |
| 📬 **Live Contact Form** | AJAX form wired to Spring Boot REST API |
| ⬆️ **Back-to-Top Button** | Floating accent-colored scroll button |
| 📱 **Fully Responsive** | Mobile-first layout with Bootstrap grid |
| ⬇️ **Resume Download** | One-click CV download from navbar |
| 🌙 **Premium Dark Theme** | Navy + Cyan accent color palette |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | Java 17, Spring Boot, Spring MVC, REST APIs |
| **Template Engine** | Thymeleaf |
| **Frontend** | HTML5, CSS3, Bootstrap 5, jQuery, AJAX |
| **Animations** | Typed.js, Custom CSS Keyframes |
| **Icons** | FontAwesome 6, DevIcon CDN |
| **Containerization** | Docker (multi-stage build) |
| **Deployment** | Render (Docker-based free tier) |

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

# 2. Add your personal assets
# Copy your files into these paths:
#   src/main/resources/static/img/profile.jpg       ← your photo
#   src/main/resources/static/img/budget1.jpg        ← project screenshot 1
#   src/main/resources/static/img/budget2.jpg        ← project screenshot 2
#   src/main/resources/static/img/budget3.jpg        ← project screenshot 3
#   src/main/resources/static/pdf/Manjeet_Kumar_Singh_Resume.pdf

# 3. Run the app
./mvnw spring-boot:run
```

Open your browser at: **http://localhost:8080**

---

## 🐳 Run with Docker

```bash
# Build the Docker image
docker build -t manjeet-portfolio .

# Run the container
docker run -p 8080:8080 manjeet-portfolio
```

---

## ☁️ Deploy to Render

1. Push code to GitHub
2. Go to **[dashboard.render.com](https://dashboard.render.com)** → **New → Web Service**
3. Connect the `manjeet-singh-portfolio` repo
4. Render auto-detects the `Dockerfile`
5. Set **Instance Type → Free** → Click **"Create Web Service"**

Every `git push` triggers an automatic redeploy! 🔄

---

## 📁 Project Structure

```
manjeet-singh-portfolio/
├── Dockerfile                              # Multi-stage Docker build
├── fly.toml                                # Fly.io config (alternative host)
├── pom.xml
└── src/main/
    ├── java/com/manjeetsingh/portfolio/
    │   ├── PortfolioApplication.java
    │   ├── controller/
    │   │   ├── PortfolioController.java    # Serves the main page
    │   │   └── ContactController.java     # POST /api/contact endpoint
    │   └── dto/
    │       └── ContactRequest.java
    └── resources/
        ├── templates/
        │   └── index.html                  # Thymeleaf single-page template
        ├── static/
        │   ├── css/style.css               # Custom dark theme + animations
        │   ├── js/main.js                  # Typed.js, counters, AJAX, scroll
        │   ├── img/                        # Profile photo + project screenshots
        │   └── pdf/                        # Downloadable resume
        └── application.properties
```

---

## 📬 Contact

**Manjeet Kumar Singh**  
📧 [manjeet.kr.singh007@gmail.com](mailto:manjeet.kr.singh007@gmail.com)  
💼 [linkedin.com/in/manjeetks007](https://www.linkedin.com/in/manjeetks007/)  
🐙 [github.com/manjeet-kr-singh](https://github.com/manjeet-kr-singh)  
🌐 [manjeet-singh-portfolio.onrender.com](https://manjeet-singh-portfolio.onrender.com/)

---

<p align="center">Designed &amp; Built with ❤️ by <strong>Manjeet Kumar Singh</strong> | Powered by Spring Boot &amp; Bootstrap 5</p>
