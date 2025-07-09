# agenda-react-node
agenda tareas
# Levantar el app
docker-compose up -d
docker exec -it react-vite-dev bash
npm run dev -- --host
Verás algo como:
  Local:   http://localhost:5173/
  Network: http://172.x.x.x:5173/


# Pasos: Desde cero
# Levantar y entrar al contenedor
cd ./agenda-react-node
docker-compose up -d
docker exec -it react-vite-dev bash
app/
# Instala Vite
npm create vite@latest . -- --template react
# Instala dependencias
npm install
# Instala TailwindCSS + PostCSS + autoprefixer
npm install -D tailwindcss@3.4.3 postcss@8.4.38 autoprefixer@10.4.19

npx tailwindcss init -p
# Edita tailwind.config.js así:
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

# Edita src/index.css así:

@tailwind base;
@tailwind components;
@tailwind utilities;
# Levanta el servidor Vite
npm run dev -- --host