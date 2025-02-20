# Proyecto de Gestión de Gastos

Este proyecto es una aplicación web para gestionar ingresos y gastos de manera eficiente, permitiendo agregar transacciones, visualizar un extracto total y listar transacciones en una tabla personalizada.

## Tecnologías utilizadas
- **Framework:** React con TypeScript y Vite
- **Estilos:** CSS
- **Estado Global:** Context API con Reducer
- **Linter:** ESLint

## Instalación y ejecución

### 1. Clonar el repositorio
```bash
  git clone <URL_DEL_REPOSITORIO>
  cd <NOMBRE_DEL_PROYECTO>
```

### 2. Instalar dependencias
```bash
  npm install
```

### 3. Ejecutar en modo desarrollo
```bash
  npm run dev
```
La aplicación estará disponible en **http://localhost:3000**.

## Scripts disponibles
- `npm run dev`: Inicia la aplicación en modo desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run lint`: Ejecuta ESLint para encontrar y corregir errores en el código.

## Estructura del Proyecto

```
.gitignore
.prettierrc
app/
  ├── App.css
  ├── App.tsx
components/
  ├── ExpenseTable/
  │   ├── index.ts
  ├── Transactions/
  │   ├── Form/
  │   ├── List/
  │   ├── Header/
  │   ├── Extract/
  │   ├── index.ts
  ├── NavBar/
  │   ├── index.ts
context/
  ├── AppReducer.tsx
  ├── GlobalState.tsx
  ├── index.ts
styles/
  ├── index.css
utils/
  ├── ExpenseTools.tsx
  ├── FormatCurrency.tsx
  ├── index.ts
assets/
public/
package.json
vite.config.ts
tsconfig.json
README.md
```

## Descripción de Componentes
- **`App.tsx`**: Componente principal de la aplicación.
- **`ExpenseTable.tsx`**: Tabla personalizada para mostrar transacciones.
- **`Form.tsx`**: Formulario para agregar nuevas transacciones.
- **`Extract.tsx`**: Muestra el balance total de ingresos y gastos.
- **`NavBar.tsx`**: Barra de navegación de la aplicación.

## Manejo del Estado Global
El estado global de la aplicación se administra mediante el **Context API**:
- **`GlobalState.tsx`**: Proveedor del contexto global.
- **`AppReducer.tsx`**: Reducer que gestiona las acciones del estado global.

## Utilidades
- **`ExpenseTools.tsx`**: Funciones auxiliares para gestionar transacciones.
- **`FormatCurrency.tsx`**: Función para formatear valores monetarios.

## Configuración de ESLint
El proyecto utiliza ESLint para mantener la calidad del código. La configuración se encuentra en **eslint.config.js**.

## Licencia
Este proyecto está licenciado bajo la **Licencia MIT**. Consulta el archivo LICENSE para más detalles.

