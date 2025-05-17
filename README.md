# 📝 Daily Task Logger

## Description

**Daily Task Logger** is a simple web application created by **Chantoan Ha** for the **INST377** course at the University of Maryland. The app allows users to log their daily tasks, view the list of tasks, visualize how many have been logged, and delete tasks — all without needing an account. Tasks are stored using [Supabase](https://supabase.com), and visualizations are rendered using [Chart.js](https://www.chartjs.org/).

The app was developed to practice integrating front-end interfaces with a real-time backend, using modern JavaScript and cloud services. It also demonstrates key principles of full-stack web development, such as RESTful API communication, CRUD operations, and dynamic UI updates.

## Target Platforms

- ✅ Google Chrome (Windows/macOS/Android)
- ✅ Safari (macOS/iOS)
- ✅ Firefox (Windows/macOS)
- ✅ Microsoft Edge

## [↓ Developer Manual](#developer-manual)

---

## 👨‍💻 Developer Manual

### 🚀 Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/daily-task-logger.git
   cd daily-task-logger
   ```

2. **Install Dependencies**
   *(if using Node.js for any backend or build tool)*
   ```bash
   npm install
   ```

3. **Environment Setup**
   Make sure to add your Supabase URL and anon key in your `tasks.js` file:
   ```js
   const SUPABASE_URL = 'https://your-project.supabase.co';
   const SUPABASE_KEY = 'your-anon-key';
   ```

4. **Run the App**
   Open `index.html` in a browser or serve it using a local dev server:
   ```bash
   npx serve .
   ```

---

### 🛠️ Functionality

- Users can submit new tasks using a form.
- Tasks are stored in Supabase in real-time.
- A bar chart shows how many tasks have been submitted.
- Tasks can be deleted from the list, and changes are reflected both visually and in the database.
- Toastify.js is used to provide elegant toast notifications that inform users immediately when tasks are added or deleted, improving user feedback and experience.

---

### 🌐 API Reference

#### Supabase Table: `tasks`

| Column Name        | Type     | Description                  |
|--------------------|----------|------------------------------|
| `id`               | Integer  | Primary key                  |
| `task_description` | Text     | Description of the task      |
| `date`             | Date     | Date the task was submitted  |

#### Client-Side API Interactions

- `GET` – fetch all tasks:
  ```js
  db.from('tasks').select('*')
  ```
- `POST` – insert a new task:
  ```js
  db.from('tasks').insert([{ task_description, date }])
  ```
- `DELETE` – delete a task:
  ```js
  db.from('tasks').delete().eq('id', taskId)
  ```

---

### 🧪 Testing

Manual testing steps:
- Open the app
- Submit a new task → check Supabase
- Delete a task → confirm it disappears from UI and Supabase
- Refresh the page → verify tasks persist

(No automated testing implemented)

---

### 🐛 Known Issues

- Tasks are not grouped or filtered by date.
- Chart does not show daily breakdown, just total count.
- No user authentication — all data is publicly accessible.

---

### 🗺️ Future Development Roadmap

- Add support for editing tasks
- Group tasks by date and time
- Add user authentication (Supabase Auth)
- Responsive design improvements for mobile users
- Add completion checkbox functionality

---

### 🔗 Deployment

Deployed to **Vercel**: [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)

---

© 2025 Chantoan Ha | INST377 - University of Maryland
