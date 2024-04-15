const form = document.querySelector('.add-task-form');
const taskInput = document.querySelector('.task-input');
const taskList = document.querySelector('.task-list');

const songs = [
  {
    name: 'Song 1',
    image: 'song1.jpg',
  },
  {
    name: 'Song 2',
    image: 'song2.jpg',
  },
  {
    name: 'Song 3',
    image: 'song3.jpg',
  },
];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!taskInput.value.trim()) return;

  const newTask = document.createElement('li');
  newTask.classList.add('task-item');
  newTask.innerHTML = `
    <span class="task-name">${taskInput.value}</span>
    <button class="delete-btn">X</button>
  `;

  taskList.appendChild(newTask);
  taskInput.value = '';

  // Add progress bar
  const progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');
  newTask.appendChild(progressBar);

  const progress = document.createElement('div');
  progress.classList.add('progress');
  progressBar.appendChild(progress);

  // Add background image
  const randomSong = songs[Math.floor(Math.random() * songs.length)];
  newTask.style.backgroundImage = `url(${randomSong.image})`;
});

taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove();
  }
});