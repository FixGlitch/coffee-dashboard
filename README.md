# Proyecto Next.js - Estructura de Carpetas

Este documento describe la estructura de carpetas del proyecto, destacando los archivos y módulos globales (disponibles para toda la aplicación) y los locales (específicos para una sección o funcionalidad).

## Estructura de Carpetas

```plaintext
src
├── app
│   ├── api                              # API handlers (Global)
│   │   └── trpc                         # Sección para tRPC (Global)
│   │       └── [trpc].ts                # Manejador de API para tRPC (Global)
│   │
│   ├── (landing)                        # Sección para la página de destino (Local)
│   │   ├──book-our-mobile-bar
│   │   │  └──page.tsx                   
│   │   ├── layout.tsx                   # Layout específico para landing (Local)
│   │   ├── page.tsx                     # Página principal de landing (Local)
│   │   ├── ecommerce                    # Sección para ecommerce (Local)
│   │   │   ├── layout.tsx               # Layout específico para ecommerce (Local)
│   │   │   └── page.tsx                 # Página principal de ecommerce (Local)
│   │   └── about                        # Sección para "About Us" (Local)
│   │       └── page.tsx                 # Página "About Us" de landing (Local)
│   │
│   ├── (auth)                           # Sección para autenticación (Local)
│   │   ├── layout.tsx                   # Layout específico para páginas de auth (Local)
│   │   ├── login
│   │   │   └── page.tsx                 # Página de login (Local)
│   │   └── signup                       # Sección para registro (Local)
│   │       └── page.tsx                 # Página de registro (Local)
│   │
│   ├── dashboard                        # Sección del dashboard (Local)
│   │   ├── layout.tsx                   # Layout común para admin y usuario (Local)
│   │   ├── page.tsx                     # Página de inicio para admin (Local)
│   │   ├── products                     # Sección para productos (Local)
│   │   │   └── page.tsx                 # Página de productos para admin (Local)
│   │   ├── users                        # Sección para tabla de usuarios (Local)
│   │   │   └── page.tsx                 # Página de usuarios para admin (Local)
│   │   ├── orders                       # Sección para tabla de órdenes (Local)
│   │   │   └── page.tsx                 # Página de órdenes para admin (Local)
│   │   ├── settings                     # Sección de configuración (Local)
│   │   │   └── page.tsx                 # Página de configuración para admin (Local)
│   │   └── sales                        # Sección para tabla de ventas (Local)
│   │       └── page.tsx                 # Página de ventas para admin (Local)
│   │
│   └── layout.tsx                       # Layout raíz para la app, maneja el estado de sesión (Global)
│   └── page.tsx                         # Página principal, renderizado condicional según el estado de login (Global)
│
├── components
│   └──  ui                              # Componentes de UI de shadcn (Global)
│
├── features                             # Características organizadas por módulos (Local)
│   ├── auth
│   │   ├── LoginForm.tsx                # Componente de formulario de login (Local)
│   │   └── SignupForm.tsx               # Componente de formulario de registro (Local)
│   │
│   ├── pages
│   │   └──Landing
│   │      └──BookOurMobileBar.tsx
│   │
│   ├── users
│   │   ├── UserList.tsx                 # Componente de lista de usuarios (Local)
│   │   └── UserDetail.tsx               # Componente de detalle de usuario (Local)
│   │
│   └── products
│       ├── ProductList.tsx              # Componente de lista de productos (Local)
│       └── ProductForm.tsx              # Formulario de creación/edición de productos (Local)
│
├── hooks                                # Hooks personalizados (Global)
│   └── useAuth.ts                       # Hook de autenticación (Global)
│
├── lib                                  # Configuraciones de biblioteca (Global)
│   ├── typeorm.ts                       # Configuración de TypeORM (Global)
│   └── trpc.ts                          # Configuración de tRPC (Global)
│
├── providers                            # Proveedores y contextos (Global)
│   ├── AuthProvider.tsx                 # Proveedor de autenticación (Global)
│   ├── ThemeProvider.tsx                # Proveedor de temas (Global)
│   └── QueryClientProvider.tsx          # Proveedor de React Query (Global)
│
├── schema                               # Esquemas de entidades de TypeORM (Global)
│   ├── index.ts                         # Exportación de esquemas (Global)
│   ├── UserEntity.ts                    # Entidad de usuario para TypeORM (Global)
│   └── ProductEntity.ts                 # Entidad de producto para TypeORM (Global)
│
├── server                               # Código del servidor (Global)
│   ├── index.ts                         # Punto de entrada del servidor (Global)
│   ├── routes                           # Rutas de la API (Global)
│   │   ├── user.ts                      # Rutas relacionadas con usuarios (Global)
│   │   └── product.ts                   # Rutas relacionadas con productos (Global)
│   ├── controllers                      # Controladores para lógica de negocio (Global)
│   │   ├── userController.ts            # Controlador de usuarios (Global)
│   │   └── productController.ts         # Controlador de productos (Global)
│   ├── middlewares                      # Middlewares para manejo de requests (Global)
│   │   └── authMiddleware.ts            # Middleware de autenticación (Global)
│   ├── config                           # Archivos de configuración (Global)
│   │   └── database.ts                  # Configuración de conexión a la base de datos (Global)
│   └── utils                            # Funciones utilitarias (Global)
│      └── helpers.ts                    # Funciones de ayuda (Global)
│
└── styles
    └── globals.css                      # Estilos globales (Global)

```
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
