# 📚 LearnHub — SDG 4: Quality Education

An Angular-based dashboard designed to promote literacy and religious education by allowing users to explore the **Bible** and related biblical literature through the **Open Library API**.

---

## 🌍 SDG Goal: Quality Education
**SDG 4 — Quality Education**

LearnHub contributes to this goal by providing a free, accessible platform for exploring historical and educational texts. By integrating biblical resources, we aim to support theological studies and general literacy for learners worldwide.

---

## 👥 Project Team
1. **Levie Amiten** — Project Lead
2. **San Drex Biore** — Data Engineer
3. **Harry Bahatan** — UI Developer

---

## 💡 Project Features
*   **Bible Module:** Explore different translations and versions of the Bible.
*   **Interactive Search:** Real-time filtering for specific books (Genesis, Psalms, etc.) using Angular Signals.
*   **Book Details:** View metadata such as publication year, authors, and chapter counts.
*   **Resource Discovery:** Access supplementary educational materials related to SDG 4.

---

## 🚀 How to Run Locally

```bash
# Clone the repository
git clone https://github.com

# Navigate to the project folder
cd appdev1-sdg4-learnhub

# Install dependencies
npm install

# Start the development server
ng serve
```

Open your browser to: `http://localhost:4200`

---

## 📂 Project Architecture
```text
src/app/
 ├── components/  # Reusable UI elements (Book cards, Search bars)
 ├── pages/       # Main views (Dashboard, Book Details)
 ├── services/    # Data fetching logic (Open Library API integration)
 ├── models/      # TypeScript interfaces (Book and API response shapes)
 ├── guards/      # Route protection and navigation logic
```
