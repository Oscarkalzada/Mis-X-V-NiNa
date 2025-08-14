# Mis XV

Plataforma para capturar y compartir momentos especiales de eventos como XV años.

![Frontend Preview](https://github.com/user-attachments/assets/5fdd0a56-458d-4240-9fcf-29b8f2a9aa8b)

## 🏗️ Estructura del Proyecto

```
Mis-X-V-NiNa/
├── frontend/           # Aplicación React
│   ├── src/
│   │   ├── components/ # Componentes React reutilizables
│   │   ├── styles/     # Archivos CSS y estilos
│   │   └── assets/     # Imágenes, iconos y recursos estáticos
│   └── package.json
├── backend/            # Servidor Node.js + Express
│   ├── routes/         # Rutas de la API
│   ├── controllers/    # Lógica de negocio
│   ├── models/         # Modelos de MongoDB
│   ├── server.js       # Punto de entrada del servidor
│   └── db.js          # Configuración de base de datos
└── README.md
```

## 🚀 Configuración e Instalación

### Prerrequisitos
- Node.js (v18 o superior)
- MongoDB (local o en la nube)
- npm o yarn

### Frontend (React)

```bash
cd frontend
npm install
npm start
```

La aplicación estará disponible en http://localhost:3000

### Backend (Node.js + Express)

```bash
cd backend
npm install

# Copiar archivo de configuración
cp .env.example .env

# Configurar la URL de MongoDB en .env
# MONGODB_URI=mongodb://localhost:27017/mis-xv-nina

npm start
```

El servidor estará disponible en http://localhost:3001

### Scripts Disponibles

#### Frontend
- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm test` - Ejecuta las pruebas

#### Backend
- `npm start` - Inicia el servidor en modo producción
- `npm run dev` - Inicia el servidor con nodemon (desarrollo)

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React** - Framework de interfaz de usuario
- **CSS3** - Estilos y diseño responsive

### Backend
- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **CORS** - Manejo de solicitudes cross-origin
- **dotenv** - Manejo de variables de entorno

## 📁 Estructura de Directorios Detallada

### Frontend (`/frontend`)
- `src/components/` - Componentes React reutilizables
- `src/styles/` - Archivos CSS globales y módulos
- `src/assets/` - Imágenes, iconos, fuentes y otros recursos

### Backend (`/backend`)
- `routes/` - Definición de rutas de la API REST
- `controllers/` - Lógica de negocio y manejo de solicitudes
- `models/` - Esquemas de datos con Mongoose
- `server.js` - Configuración del servidor Express
- `db.js` - Conexión a la base de datos MongoDB

## 🔧 Configuración de Variables de Entorno

Crear un archivo `.env` en el directorio `backend/` con las siguientes variables:

```env
PORT=3001
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/mis-xv-nina
JWT_SECRET=your_jwt_secret_key_here
```

## 🎯 Próximos Pasos

1. **Autenticación de usuarios** - Implementar registro y login
2. **Gestión de eventos** - CRUD completo para eventos de XV años
3. **Subida de fotos** - Sistema de carga y gestión de imágenes
4. **Galería interactiva** - Visualización de fotos por evento
5. **Compartir momentos** - Funcionalidad social para compartir fotos

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.