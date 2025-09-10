# Wailuku Gin — Landing + Shop (Vite + React + Tailwind)

Sitio informativo con sección de compra usando botones de pago (Mercado Pago).

## 1) Requisitos
- No necesitás instalar nada para desplegar en Vercel (lo hace en la nube).
- Si querés correr localmente: Node 18+.

## 2) Configurar imágenes (Cloudinary)
Reemplazá en `src/App.jsx` los placeholders de Cloudinary:
```
https://res.cloudinary.com/<tu_cloud_name>/image/upload/f_auto,q_auto,w_1200/<PUBLIC_ID_BOTELLA>.png
https://res.cloudinary.com/<tu_cloud_name>/image/upload/f_auto,q_auto,w_1200/<PUBLIC_ID_PACK6>.png
https://res.cloudinary.com/<tu_cloud_name>/image/upload/f_auto,q_auto,w_1200/<PUBLIC_ID_KITCOPAS>.png
```
- `<tu_cloud_name>`: tu Cloud Name de Cloudinary.
- `<PUBLIC_ID_...>`: IDs públicos de cada imagen.

## 3) Configurar pagos (Mercado Pago)
En `src/App.jsx` reemplazá:
```
https://mpago.la/LINK_GIN_750
https://mpago.la/LINK_PACK6
https://mpago.la/LINK_KIT_COPAS
```
por tus Payment Links reales.

## 4) Deploy en Vercel (sin usar tu PC)
1. Creá un repositorio en GitHub (por ejemplo `wailuku-site`).
2. Subí el contenido de esta carpeta al repositorio (Add file → Upload files).
3. En Vercel → New Project → Import Git Repository → elegí tu repo.
4. Framework preset: **Vite** (Vercel lo detecta solo).
5. Build Command: `npm run build` — Output Directory: `dist` (auto).
6. Deploy. Listo, tendrás `https://tu-proyecto.vercel.app` funcionando.
7. Opcional: agregá tu dominio en **Settings → Domains**.

## 5) Ejecutar localmente (opcional)
```bash
npm install
npm run dev
```
Abrí http://localhost:5173

## 6) Ajustes visuales
- Tailwind ya está configurado (ver `tailwind.config.js` y `src/index.css`).
- Si querés animaciones extra, ya está `framer-motion` instalado.
