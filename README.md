🚀 API REST - Usuarios con Node.js y PostgreSQL

Proyecto CRUD completo para la gestión de usuarios, desarrollado con Node.js, Express y PostgreSQL.
Forma parte de la Unidad 3: Lenguaje del lado del servidor, cuyo objetivo es conectar un servidor Node con una base de datos y exponer un API REST básica.

📦 Tecnologías utilizadas

Node.js

Express.js

PostgreSQL

pg (node-postgres)

CORS

dotenv

nodemon (solo para desarrollo)

⚙️ Requisitos previos

Antes de comenzar, asegúrate de tener instalado en tu sistema:

Node.js
 (versión 18 o superior)

PostgreSQL
 (versión 12 o superior)

npm
 (gestor de paquetes de Node)

🧰 Instalación del proyecto

1️⃣ Clonar el repositorio desde GitHub:

git clone https://github.com/JuanDanielVictores/Practica_Endpoints.git

2️⃣ Ingresar al directorio del proyecto:

cd Practica_Endpoints

3️⃣ Instalar las dependencias:

npm install

4️⃣ Configurar variables de entorno (.env):
⚠️ IMPORTANTE:
El archivo .env no se incluye en el repositorio por motivos de seguridad.
Por eso, debes crearlo manualmente en la raíz del proyecto.

Crea un archivo llamado .env con el siguiente contenido (ajusta tus credenciales):

DB_HOST=localhost

DB_USER=postgres

DB_PASSWORD=tu_contraseña

DB_NAME=usuarios_db

DB_PORT=5432

PORT=3000

🧱 Configuración de la base de datos

1️⃣ Abre pgAdmin o psql.

2️⃣ Crea una base de datos llamada:

CREATE DATABASE usuarios_db;

3️⃣ Dentro de esa base de datos, crea la tabla:

CREATE TABLE usuarios (

  id SERIAL PRIMARY KEY,

  nombre VARCHAR(50),

  correo VARCHAR(100),

  contrasena VARCHAR(100)
);

🧠 Estructura del proyecto

practica_Endpoits/

│
├── db/
│   └── db.js

│
├── tests/
│   └── test-db.js

│
├── server.js

├── package.json

├── .env         

├── .gitignore

└── README.md

📍 Endpoints del API REST

| Método     | Endpoint        | Descripción                               |
| ---------- | --------------- | ----------------------------------------- |
| **GET**    | `/`             | Verifica que el servidor esté funcionando |
| **POST**   | `/usuarios`     | Crea un nuevo usuario                     |
| **GET**    | `/usuarios`     | Lista todos los usuarios                  |
| **GET**    | `/usuarios/:id` | Muestra un usuario específico             |
| **PUT**    | `/usuarios/:id` | Actualiza un usuario existente            |
| **DELETE** | `/usuarios/:id` | Elimina un usuario                        |

Ejemplos de uso en Postman
➕ Crear usuario (POST)

URL: http://localhost:3000/usuarios

{

  "nombre": "Daniel",

  "correo": "daniel@example.com",

  "contrasena": "12345"

}

📋 Listar usuarios (GET)

URL: http://localhost:3000/usuarios

🔍 Obtener usuario por ID (GET)

URL: http://localhost:3000/usuarios/1

✏️ Actualizar usuario (PUT)

URL: http://localhost:3000/usuarios/1

{

  "nombre": "Daniel V.",

  "correo": "danielv@example.com",

  "contrasena": "67890"

}


❌ Eliminar usuario (DELETE)

URL: http://localhost:3000/usuarios/1