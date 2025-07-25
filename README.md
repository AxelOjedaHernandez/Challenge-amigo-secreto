# 🎁 Amigo Secreto

Este es un proyecto web interactivo que permite a los usuarios ingresar nombres de amigos y luego seleccionar aleatoriamente a uno de ellos como el **amigo secreto**. Ideal para organizar dinámicas en reuniones o festividades.

## 🌐 Demo

Puedes ver una vista previa ejecutando el archivo `index.html` en tu navegador local.

## 🧰 Tecnologías utilizadas

- **HTML5** para la estructura del sitio.
- **CSS3** con variables y diseño responsivo.
- **JavaScript (Vanilla JS)** para la lógica de interacción y sorteo.


## 🚀 ¿Cómo usarlo?

1. Abre `index.html` en tu navegador.
2. Ingresa el nombre de tus amigos (entre 3 y 20 caracteres).
3. Haz clic en **"Añadir"** para agregarlos a la lista.
4. Cuando tengas al menos un nombre, el botón **"Sortear amigo"** se habilitará.
5. Haz clic en sortear y aparecerá un amigo aleatorio elegido.
6. La lista se vacía después de cada sorteo para reiniciar.

## 📝 Validaciones y funcionalidades

- Solo se aceptan nombres entre 3 y 20 caracteres.
- No se permiten campos vacíos.
- El botón de sorteo se activa solo si hay al menos un amigo en la lista.
- Después del sorteo, los datos se limpian automáticamente.

## 💡 Ideas para mejorar

- Permitir múltiples sorteos sin repetir nombres.
- Implementar lógica de "amigo secreto real" (cada persona da a otra sin saber quién le toca).
- Agregar animaciones al sorteo.
- Guardar y cargar la lista de amigos usando `localStorage`.
