function agregar() {
    const tareaInput = document.getElementById('tarea');
    const tarea = tareaInput.value.trim();
    if (!tarea) return alert('Escribe una tarea');

    const li = document.createElement('li');
    li.textContent = tarea;
    li.onclick = () => li.remove();

    document.getElementById('lista').appendChild(li);
    tareaInput.value = '';
}
