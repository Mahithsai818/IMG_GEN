🚀 PIXORA

PIXORA is a cutting-edge, full-stack AI image generation platform. Using the power of modern AI models, PIXORA enables users to create stunning, high-resolution images from simple text prompts, all through a smooth and responsive web interface. Built on the MERN stack, PIXORA combines scalability, performance, and a seamless user experience.

✨ Features

🎨 AI-Powered Image Generation — Transform natural language prompts into vibrant, high-quality images.

🔐 Secure Authentication — User registration and login with token-based session management.

💾 Download Images — Save generated images locally with a single click.

⚡ Responsive & Modern UI — Mobile-first, intuitive design built with Tailwind CSS.

🛠️ Credits System — Track and manage credits for generating AI images.

🌐 Seamless Navigation — Easy-to-use pages for Home, Generate, Pricing, and Profile.

| **Layer**          | **Technology**                        |
| ------------------ | ------------------------------------- |
| **Frontend**       | React.js, Tailwind CSS, Framer Motion |
| **Backend**        | Node.js, Express.js, REST APIs        |
| **AI Integration** | OpenAI / Stability AI Models          |
| **Database**       | MongoDB Atlas                         |
| **Environment**    | dotenv, cors, axios                   |

PIXORA/
│
├─ client/              # React frontend
│   ├─ src/
│   │   ├─ assets/      # Images, icons, JSON data
│   │   ├─ components/  # Header, Footer, Steps, Navbar, etc.
│   │   ├─ pages/       # Home, Generate, Credits, About
│   │   ├─ context/     # AppContext for global state
│   │   └─ App.jsx      # Main App component
│
├─ server/              # Backend server
│   ├─ routes/          # API routes (users, payment, AI generation)
│   ├─ controllers/     # Request handlers
│   ├─ models/          # MongoDB models (User, Credits)
│   └─ server.js        # Express server entry
│
├─ .env                 # Environment variables
├─ package.json
└─ README.md

⚡ Prerequisites

⭐ Node.js v16+

⭐ MongoDB Atlas or local MongoDB instance

⭐ API keys for OpenAI / Stability AI
