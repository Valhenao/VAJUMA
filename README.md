# VAJUMA - Landing Page

Landing page para VAJUMA - Protección que florece en tu piel

## 🎨 Colores Utilizados

- **Cream**: #F6E9CF
- **Pink**: #F7C8D0
- **Dark Red**: #670F20
- **Mint**: #CFE8D8
- **White**: #FFFFFF

## 📝 Tipografías

- **Poppins**: Para texto general
- **Montserrat**: Para títulos y encabezados

## 🚀 Despliegue en GitHub Pages

### Pasos para desplegar:

1. Crea un nuevo repositorio en GitHub
2. Sube todos los archivos del proyecto a la rama `main`
3. Ve a **Settings** > **Pages** en tu repositorio
4. Selecciona la rama `main` como fuente
5. Guarda los cambios
6. Tu sitio estará disponible en: `https://[tu-usuario].github.io/[nombre-repositorio]`

### Alternativa usando GitHub CLI:

```bash
git init
git add .
git commit -m "Initial commit: VAJUMA landing page"
git branch -M main
git remote add origin https://github.com/[tu-usuario]/[nombre-repositorio].git
git push -u origin main
```

## 📁 Estructura del Proyecto

```
.
├── index.html      # Página principal
├── styles.css      # Estilos
├── script.js       # JavaScript para interactividad
├── images/         # Carpeta de imágenes
│   ├── hero-image.jpg    # Imagen principal (opcional)
│   ├── producto-1.jpg    # Imagen producto 1 (opcional)
│   ├── producto-2.jpg    # Imagen producto 2 (opcional)
│   ├── producto-3.jpg    # Imagen producto 3 (opcional)
│   └── README.md         # Instrucciones para imágenes
└── README.md       # Este archivo
```

## ✨ Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Navegación suave entre secciones
- ✅ Menú móvil interactivo
- ✅ Animaciones al hacer scroll
- ✅ Formulario de contacto funcional
- ✅ Optimizado para GitHub Pages

## 🔧 Personalización

Puedes modificar los colores en el archivo `styles.css` cambiando las variables CSS en `:root`.

## 📸 Agregar Imágenes

Para agregar imágenes a la landing page:

1. **Coloca tus imágenes** en la carpeta `images/`
2. **Nombra los archivos** según la estructura:
   - `hero-image.jpg` - Imagen principal (sección hero)
   - `producto-1.jpg` - Imagen del producto "Protección Diaria"
   - `producto-2.jpg` - Imagen del producto "Protección Intensiva"
   - `producto-3.jpg` - Imagen del producto "Protección Premium"
3. **Formatos soportados**: JPG, PNG, WebP

**Nota**: Si no agregas las imágenes, se mostrarán automáticamente placeholders con el diseño degradado de la marca. Las imágenes se ajustan automáticamente y mantienen sus proporciones.

Para más detalles, consulta `images/README.md`.

## 📱 Secciones

1. **Header**: Navegación principal
2. **Hero**: Sección principal con mensaje destacado
3. **Beneficios**: Características principales
4. **Productos**: Línea de productos
5. **CTA**: Llamado a la acción
6. **Contacto**: Formulario de contacto
7. **Footer**: Información adicional y enlaces

---

Desarrollado con ❤️ para VAJUMA

