# KeepMeUpdated (FeedFusion) 🚀

**Tagline:** All the web, one feed, your rules.

A hyper-minimalist platform that aggregates updates from across the web—social media, news, blogs, and more—into customizable, infinite-scroll feeds. No profiles, no native posts—just pure, user-controlled content consumption.

## 🌟 Features

* **Dynamic Feeds:** Craft personalized feeds (e.g., "Tech Trends," "AOC Watch") by selecting topics, sources, and filters.
* **Web Scraping Core:** Leverages powerful web scraping to pull public data from news, blogs, and forums, delivering content at zero cost.
* **Uniform Display:** Presents articles, tweets, videos, and more in a standardized card format for consistent and clean viewing.
* **User Control:** Empower yourself with features to like, save, filter by date/keyword, toggle NSFW content, and blacklist sources.
* **Scalable Backend:** Designed with a robust backend that starts with efficient scraping and is primed for expansion to integrate thousands of APIs.

## 🛠️ Tech Stack

* **Frontend:** Svelte - Experience lightning-fast, lightweight, and reactive user interfaces.
* **Backend:** Python with Scrapy - Harness the power of web scraping, backed by SQLite for optimized caching.
* **Deployment:** MVP deployed on a cost-effective VPS (e.g., DigitalOcean), with seamless scalability to cloud infrastructure in the future.

## 🏁 Getting Started

### Prerequisites

Ensure you have the following installed:

* Node.js (v16+)
* Python (v3.9+)
* Git

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/the-real-kodoninja/KeepMeUpdated.git](https://www.google.com/search?q=https://github.com/the-real-kodoninja/KeepMeUpdated.git)
    cd KeepMeUpdated
    ```

2.  **Install frontend dependencies:**

    ```bash
    cd frontend
    npm install
    ```

3.  **Install backend dependencies:**

    ```bash
    cd ../backend
    pip install -r requirements.txt
    ```

### Running Locally

1.  **Start the backend (scraping server):**

    ```bash
    cd backend
    python main.py
    ```

2.  **Start the frontend (Svelte dev server):**

    ```bash
    cd frontend
    npm run dev
    ```

3.  Open `http://localhost:5173` in your browser.

## 📂 Project Structure

```text
KeepMeUpdated/
├── frontend/          # Svelte app
│   ├── src/          # Components, routes, and logic
│   └── public/       # Static assets
├── backend/          # Scraping and API logic
│   ├── scrapers/     # Scrapy spiders
│   └── db/           # SQLite cache
├── README.md         # This file
└── .gitignore
```
## 🛣️ Roadmap

MVP: Deliver a fully functional MVP with scraping capabilities for 50 sources and a basic feed UI.
Source Reputation Scoring: Implement a system to score and display source reputation for enhanced content reliability.
API Integration: Seamlessly integrate free APIs from platforms like X (formerly Twitter) and Reddit to expand content sources.
AI-Driven Post Filtering: Leverage AI to intelligently filter and curate content based on user preferences and relevance.

## 🤝 Contributing
We welcome your contributions! Fork the repository, make your tweaks, and submit a pull request. Let's build this together! Check the issues for open tasks and ways to contribute.

## 📜 License
MIT - Feel free to use, modify, and share. Let's keep the web open!
