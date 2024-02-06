    // Arreglo para almacenar las notas
    let notes = [];

    // Función para agregar una nueva nota
    function addNote() {
      const note = {
        color: getRandomColor(),
        size: '16px',
        text: '',
      };

      notes.push(note);
      renderNotes();
    }

    // Función para eliminar una nota
    function deleteNote(index) {
      notes.splice(index, 1);
      renderNotes();
    }

    // Función para cambiar el color de una nota
    function changeColor(index, color) {
      notes[index].color = color;
      renderNotes();
    }

    // Función para cambiar el esquema de color en todas las notas
    function changeColorScheme() {
      const colorSchemeSelect = document.getElementById('color-scheme-select');
      const selectedScheme = colorSchemeSelect.value;

      if (selectedScheme === 'dark') {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }

    // Función para renderizar las notas en el contenedor
    function renderNotes() {
      const notesContainer = document.getElementById('notes-container');
      notesContainer.innerHTML = '';

      notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.style.backgroundColor = note.color;
        noteElement.style.fontSize = note.size;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => deleteNote(index);

        const colorInput = document.createElement('input');
        colorInput.type = 'color';
        colorInput.value = note.color;
        colorInput.onchange = (event) => changeColor(index, event.target.value);

        const sizeInput = document.createElement('select');
        sizeInput.innerHTML = `
          <option value="12px">12px</option>
          <option value="16px">16px</option>
          <option value="20px">20px</option>
        `;
        sizeInput.value = note.size;
        sizeInput.onchange = (event) => changeSize(index, event.target.value);

        const textInput = document.createElement('textarea');
        textInput.value = note.text;

        noteElement.appendChild(deleteButton);
        noteElement.appendChild(colorInput);
        noteElement.appendChild(textInput);
        notesContainer.appendChild(noteElement);
      });
    }

    // Función para generar un color aleatorio
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    // Verificar si el modo oscuro está habilitado en el equipo
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark-mode');
    }

    // Renderizar las notas iniciales
    renderNotes();

    // mensaje de instruccion para nuevo usuario
    window.addEventListener('DOMContentLoaded', function() {
      var mensajeInstruccion = document.getElementById('mensajeInstruccion');
      
      function ocultarMensaje() {
        mensajeInstruccion.style.display = 'none';
      }
    
      document.getElementById('add-note-btn').addEventListener('click', function() {
        ocultarMensaje();})})

    //

    window.addEventListener('DOMContentLoaded', function() {
      var mensajeInstruccion = document.getElementById('mensajeInstruccion');
      var contenidoNotas = document.getElementById('contenido');
      var searchBar = document.getElementById('search-bar');
    
      function ocultarMensaje() {
        mensajeInstruccion.style.display = 'none';
      }
    
      function mostrarMensaje() {
        mensajeInstruccion.style.display = 'block';
      }
    
      function addNote() {
        var nuevaNota = document.createElement('div');
        nuevaNota.className = 'nota';
        nuevaNota.textContent = 'Contenido de la nueva nota';
        contenidoNotas.appendChild(nuevaNota);
        ocultarMensaje();
      }
    
      function searchNotes() {
        var searchTerm = searchBar.value.toLowerCase();
        var notas = contenidoNotas.getElementsByClassName('nota');
    
        for (var i = 0; i < notas.length; i++) {
          var nota = notas[i];
          var contenido = nota.textContent.toLowerCase();
    
          if (contenido.includes(searchTerm)) {
            nota.style.display = 'block';
          } else {
            nota.style.display = 'none';
          }
        }
      }
    
      searchBar.addEventListener('input', function() {
        searchNotes();
      });
    
      document.getElementById('add-note-btn').addEventListener('click', function() {
        addNote();
    
        if (contenidoNotas.childElementCount === 0) {
          mostrarMensaje();
        }
      });
    
      if (contenidoNotas.childElementCount === 0) {
        mostrarMensaje();
      }
    });
    