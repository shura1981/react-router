---
mode: agent
---
Define the task to achieve, including specific requirements, constraints, and success criteria.
You receive HTML markup located in the active editor selection and must transform it to be valid JSX and React Router compliant following these steps:

1. Aplica primero las reglas descritas en `.github/prompts/modify-html-for-react.prompt.md` para convertir el marcado a JSX válido.
2. Luego transforma las anclas `<a>` en componentes de React Router con estas reglas:

	1. Determina si el `<a>` pertenece a un elemento de navegación:
	- Considera que está en un navbar cuando el ancla está dentro de un elemento `<nav>` o de un contenedor con clases como `navbar`, `nav`, `menu`, `navigation`.
	- En ese caso reemplaza `<a>` por `<NavLink>`.
	2. Cuando el ancla no esté en un contexto de navegación, reemplázalo por `<Link>`.
	3. Cambia `href` por `to`, preservando rutas relativas, absolutas o fragmentos tal como aparecen.
		4. Mantén otros atributos relevantes. Para `<NavLink>` conserva cualquier clase original en `className` y añade `activeClassName="active"` para la clase activa.
	5. Conserva hijos y estructura interna.

Entrega:
- Edita el código seleccionado en el editor activo reemplazándolo por el JSX transformado.
- Si no hay archivo activo, devuelve el JSX en la respuesta del chat.