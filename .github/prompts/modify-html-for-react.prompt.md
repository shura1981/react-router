---
mode: agent
---
Define the task to achieve, including specific requirements, constraints, and success criteria.
You receive raw HTML markup and must return it ready for React (JSX or TSX) using these rules:

1. Elimina todos los comentarios HTML (`<!-- ... -->`).
2. Reemplaza cada atributo `class` por `className` respetando su valor original.
3. Convierte cualquier atributo `style` en un objeto de estilo válido para React:
	- Divide las declaraciones `propiedad: valor;`.
	- Pasa los nombres de propiedad a `camelCase` cuando corresponda.
	- Conserva las unidades de medida como cadenas (`'16px'`), pero convierte números sin unidad en valores numéricos cuando sea seguro.
	- Rodea cadenas con comillas simples.
	- Envuelve el resultado en `style={{ ... }}`.
4. Mantén intactos el resto de atributos y la estructura del marcado.
5. Asegúrate de que el fragmento resultante sea válido dentro de un componente React.

Entrega:
- Si el editor tiene un archivo activo y un cursor definido, pega el JSX convertido en esa posición.
- Si no hay archivo activo, devuelve el JSX en la respuesta del chat.