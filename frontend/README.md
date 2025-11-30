# Portafolio – Gabriel Stoyko Martínez García

Portafolio web personal desarrollado en React + Vite para presentar mi trabajo como **Ingeniero en Sistemas Computacionales** y **Full Stack Web Developer**.

Incluye información sobre mí, skills técnicas, proyectos destacados (como **KiosTec** y **QR Universe**), línea de tiempo de mi camino como desarrollador, currículum en PDF y sección de contacto.

---

## 🧩 Stack principal

- **Frontend:** React, Vite, JavaScript (ES6+), Tailwind CSS, Framer Motion, lucide-react  
- **Backend:** Node.js, Express (estructura preparada para futuras integraciones)  
- **Base de datos:** PostgreSQL (pensado para features futuras como estadísticas reales, formulario de contacto, etc.)  
- **Infraestructura:** NGINX, PM2, Linux/Ubuntu (para despliegue en producción)

---

## 📁 Estructura del proyecto

```bash
PORTAFOLIO-GABRIEL/
├── backend/           # API en Node.js/Express (placeholder para futuras features)
├── frontend/          # Aplicación React + Vite (portafolio)
│   ├── public/        # Assets estáticos (favicon, avatar, CV en PDF, etc.)
│   └── src/
│       ├── components/ # Componentes reutilizables (layout, UI, comandos, etc.)
│       ├── sections/   # Secciones de la página (Hero, About, Skills, Projects, CV, Journey, Contact)
│       ├── data/       # Datos estáticos como información personal
│       ├── utils/      # Utilidades (por ejemplo: detección de temporada navideña)
│       └── main.jsx    # Punto de entrada de React
├── deploy.sh          # Script para desplegar en servidor remoto
├── LICENSE            # Licencia MIT
└── README.md          # Este archivo
```

---

## 🚀 Cómo correr el proyecto en desarrollo

### 1. Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

La aplicación quedará disponible normalmente en:

```bash
http://localhost:5173
```

### 2. Backend (Node.js / Express)

El backend está preparado para integrarse más adelante (por ejemplo, para formulario de contacto real, métricas, etc.).  
Cuando se agreguen endpoints, típicamente se arrancará con:

```bash
cd backend
npm install
npm run dev   # o npm start, según el script definido
```

---

## 🧪 Scripts útiles del frontend

Desde la carpeta `frontend`:

```bash
npm run dev      # entorno de desarrollo
npm run build    # build de producción
npm run preview  # preview del build de producción
```

---

## 💼 Proyectos destacados

### KiosTec – Sistema de gestión para bibliotecas

Residencia profesional desarrollada para las bibliotecas del ITT (TecNM–ITT):

- Kioscos de acceso para registro de visitas por unidad y motivos.
- Panel administrativo para préstamos, usuarios y catálogos.
- Dashboards y reportes basados en datos (ApexCharts).
- Arquitectura completa con React, Node.js y PostgreSQL.

> El repositorio de KiosTec es privado por ahora; se puede compartir bajo solicitud.

---

### QR Universe – Plataforma de códigos QR

Proyecto propio para generar, organizar y personalizar códigos QR:

- Generación de QR con personalización de estilos y colores.
- Panel para gestionar QRs por proyectos/campañas.
- UI moderna con animaciones y enfoque en UX.
- Preparado para integrarse con métricas de uso.

Repositorio:  
https://github.com/Stoykoo/QR-UNIVERSE

---

## 📦 Despliegue

El proyecto incluye un script `deploy.sh` en la raíz para automatizar el despliegue a un servidor remoto (via SSH).  
La idea general es:

1. Conectarse al servidor.
2. Ir a la carpeta del proyecto.
3. Hacer `git pull`.
4. Instalar dependencias y generar el build de frontend.
5. Reiniciar procesos con PM2.

Más detalles en el propio `deploy.sh`.

---

## 📜 Licencia

Este proyecto está licenciado bajo la **MIT License**.  
Consulta el archivo `LICENSE` para más información.
