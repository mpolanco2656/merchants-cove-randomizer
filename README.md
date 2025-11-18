# Merchants Cove Randomizer

Herramienta interactiva para seleccionar la configuración perfecta de tu partida de Merchants Cove.

## 🎮 Características

- **Randomizer Inteligente**: Genera setups aleatorios basados en complejidad y preferencias
- **Filtros Personalizables**: Ajusta la complejidad, interactividad, módulos y expansiones
- **Información Detallada**: Cada carta incluye descripción, mecánicas y tips del juego
- **Responsive Design**: Funciona perfectamente en desktop, tablet y móvil
- **TypeScript + React**: Código modular y type-safe

## 🚀 Desarrollo Local

### Prerequisitos

- Node.js 20+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/mpolanco2656/merchants-cove-randomizer.git
cd merchants-cove-randomizer

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Scripts Disponibles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Preview del build de producción
npm run lint     # Ejecutar linter
```

## 🐳 Docker

### Construir y ejecutar con Docker Compose

```bash
# Construir la imagen y ejecutar el contenedor
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener el contenedor
docker-compose down
```

La aplicación estará disponible en `http://localhost:8080`

### Construir imagen Docker manualmente

```bash
# Construir imagen
docker build -t merchants-cove-randomizer .

# Ejecutar contenedor
docker run -d -p 8080:80 merchants-cove-randomizer
```

## 📁 Estructura del Proyecto

```
merchants-cove-randomizer/
├── docs/                           # HTML original como referencia
├── src/
│   ├── components/                 # Componentes React
│   │   ├── Filters.tsx            # Filtros de configuración
│   │   ├── MerchantCard.tsx       # Card de Merchant
│   │   ├── TownsfolkCard.tsx      # Card de Townsfolk
│   │   └── RogueCard.tsx          # Card de Rogue
│   ├── data/                      # Datos del juego
│   │   ├── merchants.ts           # Lista de Merchants
│   │   ├── townsfolk.ts           # Lista de Townsfolk
│   │   └── rogues.ts              # Lista de Rogues
│   ├── types/                     # TypeScript types
│   │   └── index.ts
│   ├── styles/                    # Estilos
│   │   └── index.css
│   ├── App.tsx                    # Componente principal
│   └── main.tsx                   # Entry point
├── Dockerfile                     # Multi-stage Docker build
├── docker-compose.yml             # Docker Compose configuration
├── nginx.conf                     # Nginx configuration
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎯 Uso

1. **Configurar Filtros**: Ajusta el número de jugadores, complejidad y módulos disponibles
2. **Generar Setup**: Haz click en "Generar Setup Aleatorio" para obtener una configuración
3. **Ver Opciones**: O usa "Ver Todas las Opciones" para explorar todo el contenido

## 🌐 Despliegue en VPS

### Opción 1: Docker Compose (Recomendado)

```bash
# En tu VPS
git clone https://github.com/mpolanco2656/merchants-cove-randomizer.git
cd merchants-cove-randomizer
docker-compose up -d
```

### Opción 2: Nginx reverso proxy

Si ya tienes nginx en tu VPS, puedes usar Docker solo para la app:

```bash
# Ejecutar en puerto específico
docker run -d -p 3000:80 --name merchants-cove merchants-cove-randomizer
```

Luego configura nginx como reverse proxy:

```nginx
server {
    listen 80;
    server_name tu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 📝 Licencia

Este proyecto es de código abierto.

## 🙏 Créditos

Basado en el juego de mesa **Merchants Cove** de Final Frontier Games.
