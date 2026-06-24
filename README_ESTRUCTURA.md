# BIJE MERKATTO - Estructura del Proyecto

## 📁 Estructura Limpia y Optimizada

```
/
├── index.html              # Archivo principal (HTML, CSS, referencias)
├── styles.css              # Estilos compilados de Tailwind CSS (ÚNICO archivo CSS)
├── js/
│   └── main.js             # JavaScript consolidado (menú, formulario, interacciones)
├── brand/                  # Assets de marca
│   ├── logo.svg
│   ├── logo-mark.svg
│   ├── hero-banner.svg
│   └── [otros assets]
├── public/                 # Recursos públicos estáticos
├── server/                 # Backend (Node.js/Express)
│   └── server.js           # Configuración del servidor
├── .gitignore              # Archivos a ignorar en Git
└── README.md               # Este archivo
```

## 🔧 Características

- **HTML5 Semántico**: Estructura limpia y accesible
- **Tailwind CSS v4**: Estilos modernos compilados (`styles.css`)
- **JavaScript Vanilla**: Sin dependencias externas (usa Lucide icons via CDN)
- **Responsive Design**: Mobile-first, funciona en todos los dispositivos
- **A11y Ready**: Accesibilidad WCAG compliant

## 📝 Cambios Realizados

### ✅ Optimizaciones Completadas:

1. **JavaScript Consolidado** ✓
   - Movido el código inline de `index.html` a `js/main.js`
   - Incluye: Lucide icons, menú móvil, formulario, scroll header
   - Agrupa todas las interacciones en UN archivo

2. **CSS Limpio** ✓
   - Eliminado `css/styles.css` (archivo antiguo no utilizado)
   - Eliminado `input.css` (ya compilado en `styles.css`)
   - Un ÚNICO archivo CSS: `styles.css` (compilado de Tailwind)
   - Variables CSS centralizadas en `index.html`

3. **Estructura Simplificada** ✓
   - Eliminada carpeta `/css/` redundante
   - Mantenida estructura clara y lógica
   - Archivos compilados no versionados (en `.gitignore`)

4. **Variables CSS** ✓
   - Definidas una única vez en `<style>` del `index.html`
   - Colores OKLch para mejor perceptibilidad
   - Compatible con Tailwind CSS

## 🎨 Paleta de Colores

- **Primary**: `oklch(0.30 0.13 258)` - Azul corporativo profundo
- **Primary Light**: `oklch(0.62 0.13 245)` - Azul claro
- **Background**: `oklch(1 0 0)` - Blanco puro
- **Foreground**: `oklch(0.20 0.04 252)` - Gris oscuro
- **Accent**: `oklch(0.93 0.025 245)` - Azul muy pálido

## 🚀 Cómo Usar

### Desarrollo Local
```bash
# Instalar (si hay servidor Node.js)
npm install

# Ejecutar servidor
npm start

# O simplemente abrir en navegador
open index.html
```

### Compilación CSS (si se modifica)
```bash
# Si se necesita recompilar Tailwind
npm run build:css
```

## 📌 Notas Importantes

- **Sin Build Step**: El proyecto funciona directamente en el navegador
- **Lucide Icons**: Se cargan desde CDN `https://unpkg.com/lucide@latest`
- **Google Fonts**: Importadas directamente en `<head>`
- **Estilos Personalizados**: Únicamente en `styles.css` compilado

## 🔍 Archivos Ignorados (en .gitignore)

- `/client/assets/` - Archivos compilados
- `/server/assets/` - Archivos compilados
- `/node_modules/` - Dependencias npm
- `/.env` - Archivos de entorno sensibles

---

**Proyecto Limpio y Optimizado** ✨
