const SUPABASE_URL = 'https://fhdcfhvffjsguiwtzski.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoZGNmaHZmZmpzZ3Vpd3R6c2tpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0NDQ5NTgsImV4cCI6MjA2MzAyMDk1OH0._W73hmeos3L78MvjC6w3pGBAOuG2SlDAWmQgtzkDyeY';
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');
const chartCanvas = document.getElementById('chart');

async function fetchTasks() {
  const { data, error } = await db
    .from('tasks')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching tasks:', error);
    list.innerHTML = '<li>Error loading tasks</li>';
    return;
  }

  list.innerHTML = '';
  data.forEach((task) => {
    const li = document.createElement('li');
    li.textContent = task.task_description + ' ';

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.style.marginLeft = '10px';

    delBtn.onclick = async () => {
      if (!confirm('Are you sure you want to delete this task?')) return;

      const { error: delError } = await db
        .from('tasks')
        .delete()
        .eq('id', task.id);

      if (delError) {
        console.error('Delete error:', delError);
        Toastify({
          text: 'Error deleting task: ' + delError.message,
          duration: 3000,
          gravity: 'top',
          position: 'right',
          backgroundColor: '#ff4c4c',
        }).showToast();
      } else {
        Toastify({
          text: 'Task deleted successfully!',
          duration: 3000,
          gravity: 'top',
          position: 'right',
          backgroundColor: '#4CAF50',
        }).showToast();
        fetchTasks(); // Refresh list after delete
      }
    };

    li.appendChild(delBtn);
    list.appendChild(li);
  });

  plotChart(data);
}

function plotChart(data) {
  const labels = data.map((_, i) => `Task ${i + 1}`);
  const values = data.map(() => 1);

  new Chart(chartCanvas, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Tasks Logged',
          data: values,
          backgroundColor: '#4CAF50',
        },
      ],
    },
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const taskText = input.value.trim();
  if (!taskText) return;

  const today = new Date().toISOString().split('T')[0]; // yyyy-mm-dd format

  const { error } = await db.from('tasks').insert([
    {
      task_description: taskText,
      date: today,
    },
  ]);

  if (error) {
    console.error('Insert error:', error);
    Toastify({
      text: 'Error adding task: ' + error.message,
      duration: 3000,
      gravity: 'top',
      position: 'right',
      backgroundColor: '#ff4c4c',
    }).showToast();
    return;
  }

  Toastify({
    text: 'Task added successfully!',
    duration: 3000,
    gravity: 'top', // top or bottom
    position: 'right', // left, center, or right
    backgroundColor: '#4CAF50',
  }).showToast();

  input.value = '';
  fetchTasks();
});

fetchTasks();
