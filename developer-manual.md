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
   const SUPABASE_URL = 'https://fhdcfhvffjsguiwtzski.supabase.co';
   const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoZGNmaHZmZmpzZ3Vpd3R6c2tpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0NDQ5NTgsImV4cCI6MjA2MzAyMDk1OH0._W73hmeos3L78MvjC6w3pGBAOuG2SlDAWmQgtzkDyeY';
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
