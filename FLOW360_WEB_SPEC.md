# Flow360 Market — Especificación Técnica Completa v1.0
> **Para generación de código con Codex / IA generativa**
> Fecha: 2026-03-02

---

## RESUMEN EJECUTIVO

Construir el sitio web de **Flow360 Market**, una consultora boutique de rediseño operacional. El sitio debe ser minimalista, premium, orientado a conversión de un solo CTA (Auditoría pagada), con filtro fuerte de prospectos.

**Páginas:** 5 (+ thank you page)
**Stack objetivo:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, shadcn/ui
**Idioma:** Español (es-419)
**Deploy:** Vercel

---

## 1. STACK TÉCNICO

```
Framework:     Next.js 14+ (App Router)
Lenguaje:      TypeScript 5+
Estilos:       Tailwind CSS 3.4+
Componentes:   shadcn/ui
Fuentes:       Google Fonts (Inter o Geist)
Formulario:    React Hook Form + Zod (validación)
Email envío:   Resend (resend.com) o Nodemailer
Almacenamiento formulario: Supabase (tabla leads) o Google Sheets API
Animaciones:   Framer Motion (sutil, solo entrada de secciones)
SEO:           next/metadata API
Analytics:     Google Analytics 4 (gtag)
Deploy:        Vercel
```

---

## 2. SISTEMA DE DISEÑO

### 2.1 Paleta de colores

```css
/* Primarios */
--color-bg:           #0A0A0A;   /* Negro profundo — fondo general */
--color-surface:      #111111;   /* Superficie cards */
--color-border:       #222222;   /* Bordes sutiles */

/* Texto */
--color-text-primary: #F5F5F5;   /* Texto principal */
--color-text-muted:   #888888;   /* Texto secundario / labels */

/* Acento (elegir uno, aplicar consistentemente) */
--color-accent:       #16A34A;   /* Verde esmeralda — alternativa recomendada */
/* --color-accent:    #2563EB;   /* Azul — si prefiere tech feel */
/* --color-accent:    #D97706;   /* Ámbar — si prefiere premium cálido */

/* Estado */
--color-success:      #22C55E;
--color-error:        #EF4444;
--color-warning:      #F59E0B;
```

### 2.2 Tipografía

```css
/* Fuente principal */
font-family: 'Inter', 'Geist', system-ui, sans-serif;

/* Escala */
--text-xs:   0.75rem;   /* 12px — microcopy, labels */
--text-sm:   0.875rem;  /* 14px — body pequeño */
--text-base: 1rem;      /* 16px — body */
--text-lg:   1.125rem;  /* 18px — body destacado */
--text-xl:   1.25rem;   /* 20px — subtítulos */
--text-2xl:  1.5rem;    /* 24px — títulos sección mobile */
--text-3xl:  1.875rem;  /* 30px — títulos sección desktop */
--text-4xl:  2.25rem;   /* 36px — H2 */
--text-5xl:  3rem;      /* 48px — H1 */
--text-6xl:  3.75rem;   /* 60px — H1 hero desktop */

/* Pesos */
font-weight: 400; /* body */
font-weight: 500; /* labels, nav */
font-weight: 600; /* subtítulos */
font-weight: 700; /* títulos */
font-weight: 800; /* H1 hero */
```

### 2.3 Espaciado y layout

```
Max container width: 1200px
Container padding: 1.5rem (mobile), 2rem (desktop)
Section padding: 5rem 0 (desktop), 3rem 0 (mobile)
Grid: 12 columnas
Gap estándar: 1.5rem
Border radius: 0.5rem (cards), 0.375rem (inputs), 9999px (badges)
```

### 2.4 Componentes base

#### Botón Primario (CTA principal)
```tsx
// Clase Tailwind:
"bg-accent text-white font-semibold px-6 py-3 rounded-md
 hover:bg-accent/90 transition-colors duration-200
 focus:outline-none focus:ring-2 focus:ring-accent/50"

// Texto: "Solicitar Auditoría" o "Completar formulario"
```

#### Botón Secundario (outline)
```tsx
// Clase Tailwind:
"border border-border text-text-primary font-medium px-6 py-3 rounded-md
 hover:bg-surface transition-colors duration-200"

// Texto: "Ver cómo trabajamos", "Ver casos"
```

#### Card
```tsx
// Clase Tailwind:
"bg-surface border border-border rounded-lg p-6
 hover:border-accent/30 transition-colors duration-200"
```

#### Badge / Trust pill
```tsx
// Clase Tailwind:
"inline-flex items-center gap-1.5 bg-surface border border-border
 rounded-full px-3 py-1 text-xs text-text-muted font-medium"
```

---

## 3. ESTRUCTURA DE ARCHIVOS

```
flow360-web/
├── app/
│   ├── layout.tsx              # Root layout: fuentes, metadata global, analytics
│   ├── page.tsx                # Home (/)
│   ├── auditoria/
│   │   └── page.tsx            # Auditoría (/auditoria)
│   ├── casos/
│   │   └── page.tsx            # Casos (/casos)
│   ├── sobre/
│   │   └── page.tsx            # Sobre (/sobre)
│   ├── formulario/
│   │   └── page.tsx            # Formulario (/formulario)
│   ├── gracias/
│   │   └── page.tsx            # Thank you (/gracias)
│   └── api/
│       └── submit-lead/
│           └── route.ts        # API route: recibe formulario, guarda y envía email
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Section.tsx         # Wrapper de sección con padding estándar
│   │   ├── Container.tsx       # Max-width container
│   │   └── Accordion.tsx       # FAQ accordion
│   ├── sections/
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── PainSection.tsx
│   │   │   ├── WhatWeDo.tsx
│   │   │   ├── ForWhom.tsx
│   │   │   ├── HowWeWork.tsx
│   │   │   ├── Deliverables.tsx
│   │   │   ├── CasesTeaser.tsx
│   │   │   └── CtaFinal.tsx
│   │   ├── audit/
│   │   │   ├── AuditHero.tsx
│   │   │   ├── WhatIncludes.tsx
│   │   │   ├── TimeCommitment.tsx
│   │   │   ├── AuditForWhom.tsx
│   │   │   ├── Pricing.tsx
│   │   │   └── AuditFaq.tsx
│   │   ├── cases/
│   │   │   ├── CasesHero.tsx
│   │   │   └── CaseCard.tsx
│   │   └── about/
│   │       ├── AboutHero.tsx
│   │       ├── Values.tsx
│   │       └── Credentials.tsx
│   └── forms/
│       ├── AuditForm.tsx       # Formulario completo con React Hook Form
│       ├── FormSection.tsx     # Wrapper de sección de formulario
│       └── ProgressBar.tsx     # Barra de progreso del formulario
├── lib/
│   ├── validations/
│   │   └── auditFormSchema.ts  # Schema Zod del formulario
│   ├── actions/
│   │   └── submitLead.ts       # Server action o fetch a /api/submit-lead
│   └── utils.ts
├── types/
│   └── form.ts                 # Tipos TypeScript del formulario
├── public/
│   └── og-image.jpg            # Open Graph image (1200x630)
└── tailwind.config.ts
```

---

## 4. COMPONENTES GLOBALES

### 4.1 Header (`components/layout/Header.tsx`)

**Comportamiento:**
- Fijo en el top (sticky), `backdrop-blur` al hacer scroll
- Logo: "Flow360" en texto (semibold) + "Market" en acento
- Links de navegación: Auditoría | Casos | Sobre
- Botón CTA: "Solicitar Auditoría" → href="/formulario"
- Mobile: hamburger menu con drawer lateral

```tsx
// Estructura JSX aproximada:
<header className="sticky top-0 z-50 border-b border-border/50
                   bg-bg/80 backdrop-blur-md">
  <Container>
    <nav className="flex items-center justify-between h-16">
      <Link href="/">
        <span className="font-semibold text-xl">
          Flow360<span className="text-accent">Market</span>
        </span>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/auditoria">Auditoría</Link>
        <Link href="/casos">Casos</Link>
        <Link href="/sobre">Sobre</Link>
        <Button href="/formulario" variant="primary" size="sm">
          Solicitar Auditoría
        </Button>
      </div>

      {/* Mobile: hamburger */}
    </nav>
  </Container>
</header>
```

### 4.2 Footer (`components/layout/Footer.tsx`)

```
Columna 1: Logo + tagline corto
Columna 2: Links → Auditoría, Casos, Sobre, Formulario
Columna 3: Contacto (email), LinkedIn (URL placeholder)

Bottom bar:
© 2025 Flow360 Market · Todos los derechos reservados
"Trabajamos por cupos mensuales limitados."
```

---

## 5. PÁGINA HOME (`app/page.tsx`)

### Metadata
```tsx
export const metadata: Metadata = {
  title: "Flow360 Market | Rediseño de Sistemas Operativos Empresariales",
  description: "Rediseñamos sistemas operativos empresariales para reducir fricción, mejorar margen y automatizar decisiones. Hoteles, restaurantes y operaciones.",
  openGraph: {
    title: "Flow360 Market | Rediseño de Sistemas Operativos Empresariales",
    description: "Rediseñamos sistemas operativos empresariales para reducir fricción, mejorar margen y automatizar decisiones.",
    type: "website",
    locale: "es_419",
  }
}
```

---

### Sección 5.1 — Hero

**Componente:** `components/sections/home/Hero.tsx`

**Layout:** Centrado, full-height o min-h-[85vh], con grid de fondo sutil (dots o líneas)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│   [Badge] Lean Six Sigma + Arquitectura         │
│           Operacional + Automatización          │
│                                                 │
│   H1: Rediseñamos sistemas operativos           │
│       empresariales.                            │
│                                                 │
│   Subtitle: Menos fricción. Más margen.         │
│             Decisiones automatizadas.           │
│                                                 │
│   Body text (2 líneas)                          │
│                                                 │
│   [CTA Primario]  [CTA Secundario]              │
│                                                 │
│   ─────────────────────────────────────         │
│   [Trust pill: metodología]                     │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Copy exacto:**

```
BADGE: "Metodología probada"

H1: Rediseñamos sistemas operativos empresariales.

SUBTITLE: Menos fricción. Más margen. Decisiones automatizadas.

BODY:
En hoteles, restaurantes y negocios operativos, el problema rara vez es
"falta de esfuerzo". Es un sistema mal diseñado: procesos, datos y
decisiones desconectados. Flow360 Market rediseña esa arquitectura y aplica
automatización e IA solo donde genera retorno real.

CTA PRIMARIO: "Solicitar Auditoría Flow360" → href="/formulario"
CTA SECUNDARIO: "Ver cómo trabajamos" → href="#como-trabajamos" (scroll) o href="/auditoria"

TRUST LINE (microcredencial debajo de los botones):
🏆 Metodología: Lean Six Sigma (Kaizen Institute) · Arquitectura Operacional · Automatización Inteligente
```

**Notas de implementación:**
- H1 debe ser `text-5xl md:text-6xl font-extrabold`
- Gradient sutil en H1 (blanco → blanco/80) o subrayado acento en "sistemas operativos"
- Background: dark con pattern grid muy sutil (`bg-grid-white/5`)
- Animación entrada: fade-up con Framer Motion (delay escalonado)

---

### Sección 5.2 — Problema / Pain Framing

**Componente:** `components/sections/home/PainSection.tsx`

**Layout:** 2 columnas desktop (texto izquierda, bullets derecha) o stack mobile

```
TÍTULO: El caos operativo suele ser silencioso… hasta que cuesta caro.

BULLETS (con ícono X o — en rojo/naranja):
• Tareas repetidas que consumen horas (y nadie las mide)
• Excel y WhatsApp como "sistema nervioso" del negocio
• Errores, reclamos, re-trabajo y merma acumulada
• Decisiones lentas por falta de datos confiables

CIERRE (texto destacado, font-semibold):
"La solución no es más esfuerzo. Es mejor arquitectura."
```

---

### Sección 5.3 — Qué hacemos

**Componente:** `components/sections/home/WhatWeDo.tsx`

**Layout:** Grid de 5 cards (2+3 o 3+2 desktop, 1 columna mobile)

```
TÍTULO: Lo que entregamos no es un informe. Es un sistema.

CARDS:
1. Título: "Mapeo Operativo y Financiero"
   Desc: "Cómo se mueve el trabajo y el dinero en tu operación."

2. Título: "Diagnóstico de Fricción"
   Desc: "Tiempo perdido, errores, re-trabajo, merma y fugas de margen detectados con datos."

3. Título: "Priorización por Impacto"
   Desc: "Matriz impacto vs esfuerzo vs riesgo. Sabes exactamente qué atacar primero."

4. Título: "Roadmap 90 días / 12 meses"
   Desc: "Plan concreto y ejecutable, no una presentación para olvidar."

5. Título: "Recomendaciones Tecnológicas"
   Desc: "Integraciones y automatización donde aplica. Sin vender humo ni herramientas innecesarias."
```

**Notas:** Cada card tiene un número (01, 02, 03...) en `text-accent` a modo de label.

---

### Sección 5.4 — Para quién es (filtro)

**Componente:** `components/sections/home/ForWhom.tsx`

**Layout:** 2 columnas (Ideal para / No somos para)

```
TÍTULO: Trabajamos con empresas que van en serio.

COLUMNA IZQUIERDA — "Ideal si:" (check verde)
✓ Tienes operación diaria compleja (personas, turnos, inventario, servicio)
✓ Sientes "caos silencioso": Excel, WhatsApp, tareas repetidas, errores
✓ Ya tienes métricas aunque sean básicas y quieres mejorarlas
✓ Puedes dedicar tiempo de equipo y compartir datos operativos

COLUMNA DERECHA — "No somos para:" (X rojo/gris)
✗ "Solo quiero aprender de IA sin cambiar nada"
✗ "Busco descuento o quiero ver qué pasa"
✗ "No puedo compartir datos ni dedicar tiempo del equipo"
✗ Negocios sin operación establecida o equipo activo
```

---

### Sección 5.5 — Cómo trabajamos

**Componente:** `components/sections/home/HowWeWork.tsx`
**ID anchor:** `id="como-trabajamos"`

**Layout:** Steps verticales con línea conectora (timeline) o cards numeradas en fila

```
TÍTULO: Flow360 OS Redesign

SUBTÍTULO: Un proceso claro. Sin improvisación.

PASOS (5):

01 — DEFINE
Título: Define
Desc: Objetivos, métricas base y restricciones del proyecto. Alineamos expectativas antes de empezar.

02 — MAP & MEASURE
Título: Map & Measure
Desc: Mapa de procesos As-Is y medición rápida de operación real. Sin suposiciones.

03 — DIAGNOSE
Título: Diagnose
Desc: Fricciones y oportunidades cuantificadas. Saber qué duele y cuánto cuesta.

04 — REDESIGN & AUTOMATE
Título: Redesign & Automate
Desc: Diseño del nuevo sistema operativo. Automatización e IA solo donde genera retorno medible.

05 — CONTROL
Título: Control
Desc: Tablero de indicadores, métricas clave y plan de continuidad para mantener la mejora.

CTA (debajo):
[Solicitar Auditoría] → href="/formulario"
```

---

### Sección 5.6 — Entregables

**Componente:** `components/sections/home/Deliverables.tsx`

**Layout:** Lista con íconos o grid 2 columnas

```
TÍTULO: Lo que te llevas al final

ÍTEMS:
📄 Resumen ejecutivo (2–3 páginas, para decisión)
📋 Informe completo (mapas de procesos, hallazgos, oportunidades)
⚖️ Matriz de priorización (impacto × esfuerzo × riesgo)
🗺️ Roadmap 90 días / 12 meses
🔌 Checklist de datos e integraciones recomendadas
💰 Estimación de ROI y riesgos (con supuestos transparentes)
```

---

### Sección 5.7 — Casos (teaser)

**Componente:** `components/sections/home/CasesTeaser.tsx`

**Layout:** Cards horizontales o grid 2 columnas

```
TÍTULO: Resultados y aprendizajes

TEXTO (si aún no hay casos cerrados):
"Estamos documentando casos piloto. Si tu operación calza con nuestro ICP,
puedes postular a uno de los cupos de auditoría disponibles."

MINI CARDS (anónimas, 2–3):

Card 1:
Sector: Restaurante · Tamaño: 30–50 empleados
Problema: Merma sin control y re-trabajo administrativo diario
Intervención: Mapa de procesos + automatización de reportes
Resultado: "Indicadores de mejora en 3 semanas. Caso en documentación."

Card 2:
Sector: Hotel boutique · 45 habitaciones
Problema: Baja conversión en reservas directas y respuesta tardía
Intervención: Rediseño del flujo reservas + dashboard de ocupación
Resultado: "Tiempo de respuesta reducido. Métricas en seguimiento."

Card 3:
Sector: Grupo gastronómico · 3 locales
Problema: Dotación descontrolada, rotación alta, sin indicadores
Intervención: Mapeo operativo + sistema de turnos y métricas
Resultado: "Proceso en implementación. Datos en consolidación."

CTA: [Ver todos los casos] → href="/casos"
```

---

### Sección 5.8 — CTA Final

**Componente:** `components/sections/home/CtaFinal.tsx`

**Layout:** Centered, fondo ligeramente diferente (surface)

```
TÍTULO: ¿Quieres saber dónde se está perdiendo margen y tiempo en tu operación?

TEXTO:
Solicita una Auditoría Flow360. Revisamos cada solicitud y respondemos
solo si hay fit. Cupos limitados por mes.

CTA: [Ir al formulario] → href="/formulario"

NOTA DEBAJO (text-muted, text-sm):
"No hacemos descuentos. La auditoría es una inversión para decidir con evidencia."
```

---

## 6. PÁGINA AUDITORÍA (`app/auditoria/page.tsx`)

### Metadata
```tsx
export const metadata: Metadata = {
  title: "Auditoría Flow360 | Diagnóstico Operacional y Automatización Inteligente",
  description: "Auditoría pagada en 2–4 semanas: mapa de procesos, diagnóstico de fricciones, priorización y roadmap 90 días + 12 meses con ROI estimado.",
}
```

### Sección 6.1 — Hero de Auditoría

```
H1: Auditoría Flow360
    Diagnóstico Arquitectónico del Negocio

SUBTÍTULO:
En 2–4 semanas identificamos pérdidas invisibles, rediseñamos el sistema
operativo y definimos un roadmap medible.

CTA: [Completar formulario] → href="/formulario"

BADGES (3 pills en fila):
• 2–4 semanas
• ROI estimado incluido
• Cupos limitados
```

### Sección 6.2 — Qué incluye

**Layout:** Lista con íconos + borde acento izquierdo

```
TÍTULO: ¿Qué incluye la Auditoría?

ÍTEMS:
✓ Workshops con áreas clave (2 a 4 sesiones de 60–90 min)
✓ Revisión de procesos operativos actuales (mapa As-Is)
✓ Revisión y análisis de datos (ventas, costos, dotación, operación)
✓ Diagnóstico de fricciones y oportunidades (Lean + automatización)
✓ Estimación de impacto económico (con supuestos transparentes)
✓ Roadmap 90 días y 12 meses
✓ Recomendaciones tecnológicas e integraciones priorizadas
```

### Sección 6.3 — Dedicación del cliente

```
TÍTULO: ¿Qué necesitamos de tu lado?

ÍTEMS:
→ Un sponsor interno (responsable del proyecto, mínimo gerencia media)
→ Acceso a reportes o exportaciones básicas (o muestras representativas)
→ Disponibilidad para 2–4 sesiones de trabajo (60–90 min c/u)
→ Apertura real para revisar y cambiar procesos

NOTA: "No necesitas tener los datos perfectamente ordenados.
        Eso es parte de lo que resolvemos juntos."
```

### Sección 6.4 — Precio

**Layout:** Card destacada centrada

```
TÍTULO: Inversión

PRECIO: Desde USD 2.500
NOTA: (según tamaño, complejidad y cantidad de áreas involucradas)

DISCLAIMER:
"No hacemos descuentos. Trabajamos por cupos limitados para asegurar
calidad de entrega en cada proyecto."

CTA: [Solicitar mi cupo] → href="/formulario"
```

### Sección 6.5 — Para quién / No es para (filtro)

```
IDEAL SI:
✓ Empresa con operación real, equipo activo y problemas de fricción identificados
✓ Hay disposición genuina para revisar procesos y ejecutar cambios
✓ Pueden acceder a datos mínimos (aunque estén desordenados)
✓ El responsable puede dedicar tiempo real al proyecto

NO ES PARA:
✗ Proyectos sin sponsor interno o con acceso bloqueado a datos
✗ "Quiero ver si sirve" sin compromiso de ejecución
✗ Presupuesto < USD 2.500 para la auditoría en sí
```

### Sección 6.6 — FAQ (Acordeón)

**Componente:** `components/ui/Accordion.tsx`

```
Pregunta 1:
Q: "¿Ustedes también implementan los cambios?"
A: "Podemos acompañar la implementación como servicio separado o trabajar
    con tu equipo y proveedores existentes. La auditoría deja el plan listo
    para ejecutar independientemente."

Pregunta 2:
Q: "¿Necesito tener los datos ordenados antes de empezar?"
A: "No. Podemos trabajar con exportaciones crudas, reportes parciales o
    muestras representativas. Parte del trabajo es ordenar la arquitectura
    de información."

Pregunta 3:
Q: "¿Esto es una consultoría de IA?"
A: "No. Es rediseño del sistema operativo del negocio. La IA y la
    automatización aparecen solo donde hay ROI claro. No vendemos
    tecnología: resolvemos problemas operacionales."

Pregunta 4:
Q: "¿Cuánto tiempo tarda en verse resultados?"
A: "Quick wins (mejoras inmediatas sin inversión) en 7–14 días si hay
    datos y decisión. El roadmap de 90 días define el impacto medible.
    La transformación real es de 6–12 meses."

Pregunta 5:
Q: "¿Cuántos proyectos toman por mes?"
A: "Máximo 2–3 auditorías simultáneas para garantizar calidad y
    dedicación. Por eso los cupos son limitados."

Pregunta 6:
Q: "¿Trabajan solo con hoteles y restaurantes?"
A: "Ese es nuestro núcleo, pero trabajamos con cualquier negocio
    operativamente intensivo (turnos, inventario, servicio, procesos
    repetitivos). Evalúamos caso a caso."
```

### Sección 6.7 — CTA Final

```
TÍTULO: ¿Tu operación califica?

TEXTO:
Completa el formulario. Revisamos cada solicitud y respondemos solo
si hay fit real. Si lo hay, coordinamos una llamada de 15–25 minutos.

CTA: [Completar formulario de Auditoría] → href="/formulario"
```

---

## 7. PÁGINA FORMULARIO (`app/formulario/page.tsx`)

### Metadata
```tsx
export const metadata: Metadata = {
  title: "Solicitar Auditoría | Flow360 Market",
  description: "Postula a una Auditoría Flow360. Trabajamos por cupos limitados y respondemos solo si hay fit.",
}
```

### 7.1 UI del formulario

**Layout:**
- Columna única centrada (max-w-2xl)
- Barra de progreso visible (5 secciones)
- Cada sección con título y separador visual
- Validación en tiempo real (React Hook Form + Zod)
- Scroll suave a primer error

**Progreso:**
```
Sección A (Empresa) ──── B (Dolor) ──── C (Sistemas) ──── D (Operación) ──── E (Compromiso)
[============================>                                              ]  40%
```

---

### 7.2 Schema Zod (`lib/validations/auditFormSchema.ts`)

```typescript
import { z } from 'zod';

export const auditFormSchema = z.object({
  // ─── SECCIÓN A: EMPRESA ───────────────────────────────────────────────
  companyName: z.string().min(2, "Ingresa el nombre de la empresa"),
  website: z.string().optional(),
  countryCity: z.string().min(2, "Indica país y ciudad"),
  industry: z.enum(["hotel", "restaurante", "otro"], {
    errorMap: () => ({ message: "Selecciona una industria" })
  }),
  employees: z.string().min(1, "Indica el número aproximado de empleados"),
  branches: z.string().optional(),
  rooms: z.string().optional(),
  monthlyRevenue: z.enum(
    ["<20k", "20k-50k", "50k-150k", "150k-500k", "500k+"],
    { errorMap: () => ({ message: "Selecciona un rango de facturación" }) }
  ),
  contactName: z.string().min(2, "Ingresa tu nombre"),
  contactRole: z.string().min(2, "Ingresa tu cargo"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(7, "Ingresa tu WhatsApp o teléfono"),
  decisionMaker: z.string().min(2, "¿Quién toma la decisión final?"),

  // ─── SECCIÓN B: DOLOR Y OBJETIVO ─────────────────────────────────────
  painPoints: z.array(z.enum([
    "ventas-reservas",
    "costos-margen",
    "inventario-merma",
    "tiempos-servicio",
    "turnos-dotacion",
    "reportes-control"
  ])).min(1, "Selecciona al menos 1 problema").max(3, "Máximo 3 problemas"),
  mainProblem: z.string()
    .min(50, "Describe el problema en al menos 3–5 líneas")
    .max(1000),
  win90days: z.string()
    .min(20, "¿Qué resultado esperarías en 90 días?")
    .max(500),

  // ─── SECCIÓN C: SISTEMAS Y DATOS ─────────────────────────────────────
  systems: z.array(z.enum([
    "pos", "pms", "erp", "excel", "whatsapp",
    "crm", "reservas", "delivery", "otro"
  ])).optional(),
  systemsOther: z.string().optional(),
  canExportReports: z.enum(["si", "no", "no-se"], {
    errorMap: () => ({ message: "Responde si puedes exportar reportes" })
  }),
  dataOwner: z.string().min(2, "¿Quién tiene acceso a los datos?"),

  // ─── SECCIÓN D: OPERACIÓN ─────────────────────────────────────────────
  timeLost: z.string().min(20, "¿Dónde se pierde más tiempo?").max(500),
  dailyTasks: z.string().min(20, "¿Qué tareas se repiten diario?").max(500),
  errorsComplaints: z.string().min(20, "¿Dónde ocurren errores o reclamos?").max(500),

  // ─── SECCIÓN E: COMPROMISO ────────────────────────────────────────────
  committedToProcess: z.enum(["si", "no"], {
    errorMap: () => ({ message: "Responde si puedes comprometerte" })
  }),
  implementationBudget: z.enum(["<1k", "1k-5k", "5k-15k", "15k+"], {
    errorMap: () => ({ message: "Selecciona un rango de presupuesto" })
  }),
  startTimeline: z.enum(
    ["esta-semana", "2-4-semanas", "1-2-meses"],
    { errorMap: () => ({ message: "¿Cuándo quieren empezar?" }) }
  ),
  additionalComments: z.string().max(1000).optional(),
});

export type AuditFormData = z.infer<typeof auditFormSchema>;
```

---

### 7.3 Campos del formulario (renderizado)

#### SECCIÓN A — Empresa

```
Campo 1: Nombre de la empresa *
  Tipo: text input
  Placeholder: "Ej: Hotel Las Arenas"

Campo 2: Sitio web o redes sociales
  Tipo: text input
  Placeholder: "Ej: www.lasarenas.com o @lasarenas"
  Requerido: NO

Campo 3: País y ciudad *
  Tipo: text input
  Placeholder: "Ej: Chile / Santiago"

Campo 4: Industria *
  Tipo: select dropdown
  Opciones:
    - Hotel / Grupo hotelero
    - Restaurante / Grupo gastronómico
    - Otro negocio operativo

Campo 5: ¿Cuántos empleados tiene la operación? *
  Tipo: text input (número o rango)
  Placeholder: "Ej: 35"

Campo 6: ¿Cuántos locales o sucursales? (si aplica)
  Tipo: text input
  Placeholder: "Ej: 2"
  Requerido: NO

Campo 7: ¿Cuántas habitaciones? (solo para hoteles)
  Tipo: text input
  Placeholder: "Ej: 48"
  Mostrar solo si industria = "hotel"
  Requerido: NO (condicional)

Campo 8: Facturación mensual aproximada *
  Tipo: select dropdown
  Opciones:
    - Menos de USD 20.000
    - USD 20.000 – 50.000
    - USD 50.000 – 150.000
    - USD 150.000 – 500.000
    - Más de USD 500.000

Campo 9: Tu nombre *
  Tipo: text input
  Placeholder: "Nombre completo"

Campo 10: Tu cargo *
  Tipo: text input
  Placeholder: "Ej: Gerente de Operaciones"

Campo 11: Email de contacto *
  Tipo: email input
  Placeholder: "tu@empresa.com"

Campo 12: WhatsApp / Teléfono *
  Tipo: tel input
  Placeholder: "+56 9 1234 5678"

Campo 13: ¿Quién toma la decisión final? *
  Tipo: text input
  Placeholder: "Nombre y cargo del decisor"
```

#### SECCIÓN B — Dolor y objetivo

```
Campo 14: ¿Qué te preocupa hoy? (selecciona 1 a 3) *
  Tipo: checkbox group (multiselect)
  Opciones:
    □ Ventas / reservas / ocupación
    □ Costos / margen
    □ Inventario / merma
    □ Tiempos de servicio / experiencia del cliente
    □ Turnos / dotación / rotación
    □ Reportes / control / visibilidad

Campo 15: Describe el problema principal (3–5 líneas) *
  Tipo: textarea
  Rows: 5
  Placeholder: "¿Qué pasa hoy en la operación? ¿Dónde se siente más el dolor?"
  Min length: 50 chars

Campo 16: ¿Qué sería una victoria medible en 90 días? *
  Tipo: textarea
  Rows: 3
  Placeholder: "Ej: Reducir merma 20%, tener dashboard semanal,
                bajar errores de facturación a cero..."
```

#### SECCIÓN C — Sistemas y datos

```
Campo 17: ¿Qué sistemas usan hoy? (selecciona todos los que apliquen)
  Tipo: checkbox group
  Opciones:
    □ POS (punto de venta)
    □ PMS (gestión hotelera)
    □ ERP o software de contabilidad
    □ Excel / Google Sheets
    □ WhatsApp
    □ CRM
    □ Sistema de reservas
    □ Apps de delivery
    □ Otro (campo de texto adicional)

Campo 17b: Otro sistema (aparece si se marca "Otro")
  Tipo: text input
  Placeholder: "¿Qué otro sistema usan?"

Campo 18: ¿Pueden exportar reportes de esos sistemas? *
  Tipo: radio buttons
  Opciones:
    ○ Sí, podemos exportar
    ○ No, no tenemos esa opción
    ○ No sé / Hay que verificar

Campo 19: ¿Quién tiene acceso a los datos operativos? *
  Tipo: text input
  Placeholder: "Ej: Solo el dueño / El gerente y contador / Todo el equipo"
```

#### SECCIÓN D — Operación

```
Campo 20: ¿Dónde se pierde más tiempo hoy en la operación? *
  Tipo: textarea
  Rows: 3
  Placeholder: "Ej: Cerrando caja a mano, coordinando turnos por WhatsApp,
                corrigiendo pedidos, haciendo reportes en Excel..."

Campo 21: ¿Qué tareas se repiten todos los días (y podrían automatizarse)? *
  Tipo: textarea
  Rows: 3
  Placeholder: "Ej: Consolidar ventas por local, revisar inventario de
                bodega, asignar mesas, responder reservas..."

Campo 22: ¿Dónde ocurren más errores o reclamos? *
  Tipo: textarea
  Rows: 3
  Placeholder: "Ej: En la facturación, en la recepción de mercadería,
                en la comunicación entre turnos, en los pedidos de delivery..."
```

#### SECCIÓN E — Compromiso (filtro)

```
Campo 23: ¿Están dispuestos a dedicar 2–4 sesiones de trabajo
          y compartir datos operativos básicos? *
  Tipo: radio buttons
  Opciones:
    ○ Sí, tenemos el tiempo y disposición para hacerlo
    ○ No, actualmente no podemos comprometer ese tiempo

  LÓGICA: Si selecciona "No" → mostrar mensaje inline:
  "Sin un compromiso mínimo de tiempo y datos, no podemos garantizar
   resultados. De todas formas puedes enviar tu solicitud y evaluamos."

Campo 24: Presupuesto estimado para mejoras e implementación
          (si el ROI de la auditoría cierra) *
  Tipo: select dropdown
  Opciones:
    - Menos de USD 1.000
    - USD 1.000 – 5.000
    - USD 5.000 – 15.000
    - USD 15.000 o más

Campo 25: ¿Cuándo quisieran empezar? *
  Tipo: select dropdown
  Opciones:
    - Esta semana
    - En 2 a 4 semanas
    - En 1 a 2 meses

Campo 26: Comentarios adicionales (opcional)
  Tipo: textarea
  Rows: 3
  Placeholder: "Algo más que debamos saber antes de evaluar tu solicitud..."

BOTÓN ENVIAR: "Enviar solicitud de Auditoría"
```

---

### 7.4 Lógica de Fit Score (`lib/actions/submitLead.ts`)

```typescript
// Calcular fit score básico antes de guardar
function calculateFitScore(data: AuditFormData): number {
  let score = 0;

  // Revenue (0-30 pts)
  const revenueScores: Record<string, number> = {
    "<20k": 5,
    "20k-50k": 15,
    "50k-150k": 25,
    "150k-500k": 30,
    "500k+": 30,
  };
  score += revenueScores[data.monthlyRevenue] ?? 0;

  // Budget para implementación (0-25 pts)
  const budgetScores: Record<string, number> = {
    "<1k": 0,
    "1k-5k": 10,
    "5k-15k": 20,
    "15k+": 25,
  };
  score += budgetScores[data.implementationBudget] ?? 0;

  // Compromiso (0-20 pts)
  if (data.committedToProcess === "si") score += 20;

  // Urgencia (0-15 pts)
  const timelineScores: Record<string, number> = {
    "esta-semana": 15,
    "2-4-semanas": 10,
    "1-2-meses": 5,
  };
  score += timelineScores[data.startTimeline] ?? 0;

  // Datos accesibles (0-10 pts)
  if (data.canExportReports === "si") score += 10;
  else if (data.canExportReports === "no-se") score += 5;

  return score; // Máximo 100
}

// Clasificar
function fitLabel(score: number): "hot" | "warm" | "cold" {
  if (score >= 70) return "hot";
  if (score >= 40) return "warm";
  return "cold";
}
```

---

### 7.5 API Route (`app/api/submit-lead/route.ts`)

```typescript
// POST /api/submit-lead
// 1. Valida con Zod
// 2. Calcula fit score
// 3. Guarda en Supabase (tabla: leads)
// 4. Envía email de notificación a hola@flow360.com
// 5. Redirige a /gracias

// Schema tabla Supabase:
// leads(
//   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
//   created_at TIMESTAMP DEFAULT now(),
//   company_name TEXT,
//   email TEXT,
//   phone TEXT,
//   industry TEXT,
//   monthly_revenue TEXT,
//   pain_points TEXT[],
//   main_problem TEXT,
//   committed BOOLEAN,
//   implementation_budget TEXT,
//   start_timeline TEXT,
//   fit_score INT,
//   fit_label TEXT,   -- 'hot' | 'warm' | 'cold'
//   raw_data JSONB    -- backup del formulario completo
// )
```

**Email de notificación (template):**
```
Asunto: [Flow360] Nueva solicitud — {companyName} ({fitLabel.toUpperCase()})

Nueva solicitud de Auditoría Flow360

Empresa: {companyName}
Contacto: {contactName} / {contactRole}
Email: {email}
Tel: {phone}
Industria: {industry}
Facturación: {monthlyRevenue}
Presupuesto impl.: {implementationBudget}
Timeline: {startTimeline}
Comprometido: {committedToProcess}

FIT SCORE: {fitScore}/100 → {fitLabel.toUpperCase()}

Problema principal:
{mainProblem}

Victoria en 90 días:
{win90days}

Ver en dashboard: [link Supabase o admin panel]
```

---

### 7.6 Página Thank You (`app/gracias/page.tsx`)

```
TÍTULO: Solicitud recibida.

TEXTO:
Revisamos cada solicitud con atención. Solo respondemos si hay fit real
entre tu operación y lo que podemos hacer juntos.

Si lo hay, te contactaremos para coordinar una llamada breve de 15–25 minutos.

TIMELINE VISUAL:
1. ✓ Solicitud enviada (ahora)
2. ⏳ Revisión interna (24–48 hs hábiles)
3. → Llamada breve si hay fit (15–25 min)
4. → Propuesta y arranque

CTA SECUNDARIO:
[Conoce cómo trabajamos] → href="/auditoria"
[Volver al inicio] → href="/"

NOTA PEQUEÑA:
"Si tienes urgencia, puedes escribir a: hola@flow360market.com"
```

---

## 8. PÁGINA CASOS (`app/casos/page.tsx`)

### Metadata
```tsx
export const metadata: Metadata = {
  title: "Casos y Resultados | Flow360 Market",
  description: "Diagnósticos y rediseños operacionales en hoteles, restaurantes y negocios intensivos. Resultados documentados.",
}
```

### Estructura

```
HERO:
H1: Resultados y aprendizajes
SUB: Diagnósticos piloto y casos documentados

INTRO TEXT:
"Cada auditoría es diferente porque cada operación es diferente.
Aquí documentamos los patrones más comunes y los resultados observados."

NOTA DE TRANSPARENCIA:
"Los casos están anonimizados a solicitud de los clientes.
Los resultados marcados con * están en proceso de documentación final."

─────────────────────────────────────

CASE CARD COMPONENT (CaseCard.tsx):
┌──────────────────────────────────────┐
│ SECTOR + TAMAÑO          [tag: piloto] │
│                                      │
│ H3: Título del caso                  │
│                                      │
│ PROBLEMA:                            │
│ [párrafo]                            │
│                                      │
│ INTERVENCIÓN:                        │
│ • bullet 1                           │
│ • bullet 2                           │
│ • bullet 3                           │
│                                      │
│ RESULTADOS:                          │
│ • Resultado 1                        │
│ • Resultado 2                        │
│                                      │
│ QUICK WIN: [texto]                   │
└──────────────────────────────────────┘

─────────────────────────────────────

CASOS (3 cards):

CASO 1:
Sector: Restaurante
Tamaño: ~35 empleados, 1 local
Tag: Piloto

Título: "De Excel caótico a sistema de control con datos reales"

Problema:
El equipo operaba con múltiples Excel no conectados entre sí.
El cierre de caja tomaba 2+ horas diarias. La merma no se medía
sistemáticamente. Las decisiones de compra se hacían por intuición.

Intervención:
• Mapeo As-Is del flujo operativo completo (3 sesiones)
• Identificación de 7 fricciones críticas
• Priorización: 2 quick wins + 3 mejoras 30 días
• Diseño de flujo To-Be con automatización de reportes

Resultados:
• Tiempo de cierre reducido de 2h → 25 min (automatización parcial)*
• Dashboard semanal operativo activo*
• Proceso de control de merma estandarizado*

Quick win: Reporte de ventas automático desde POS en 48 hs

─────

CASO 2:
Sector: Hotel boutique
Tamaño: 38 habitaciones, ~20 empleados
Tag: Piloto

Título: "Mejora de conversión y respuesta en reservas directas"

Problema:
Alta dependencia de OTAs (comisiones 18–22%). Respuesta a consultas
directas tardaba 8–24 hs. Sin visibilidad de ocupación futura.
Sin seguimiento de leads de reserva directa.

Intervención:
• Mapa del flujo de reservas directas vs OTAs
• Diagnóstico de brechas en tiempos de respuesta
• Rediseño del proceso de atención a consultas
• Dashboard de ocupación y pipeline de reservas

Resultados:
• Tiempo de respuesta promedio: 24h → 2.5h*
• Pipeline de reservas directas visible por primera vez*
• Protocolo de seguimiento implementado*

Quick win: Template de respuesta + automatización WhatsApp Business en 3 días

─────

CASO 3:
Sector: Grupo gastronómico
Tamaño: 3 locales, ~80 empleados
Tag: En curso

Título: "Estandarización operacional multi-local sin control central"

Problema:
3 locales con procesos diferentes, sin indicadores comunes.
Alta rotación de personal (>80% anual). Costos laborales sin seguimiento.
Gerente general tomando decisiones sin datos consolidados.

Intervención:
• Auditoría de los 3 locales (4 semanas)
• Mapa de varianza entre procesos
• Diseño de estándares operacionales comunes
• Dashboard consolidado multi-local

Resultados:
• En documentación (caso activo)

Quick win: Reporte consolidado de los 3 locales en 1 semana

─────────────────────────────────────

CTA FINAL:
¿Tu operación tiene problemas similares?
[Solicitar Auditoría] → href="/formulario"
```

---

## 9. PÁGINA SOBRE (`app/sobre/page.tsx`)

### Metadata
```tsx
export const metadata: Metadata = {
  title: "Sobre Flow360 Market | Lean Six Sigma + Arquitectura Operacional",
  description: "Consultora boutique especializada en rediseño de sistemas operativos empresariales. Lean Six Sigma, arquitectura operacional y automatización inteligente.",
}
```

### Estructura

```
HERO:
H1: Sobre Flow360 Market

SUB:
Existimos para un problema específico: negocios bien intencionados
que operan con sistemas mal diseñados.

─────────────────────────────────────

SECCIÓN: Por qué existe Flow360

TEXTO:
La mayoría de los problemas operacionales que vemos no son de actitud
ni de esfuerzo. Son de arquitectura: procesos diseñados para una
versión anterior del negocio, datos fragmentados, decisiones tomadas
sin información confiable.

Flow360 Market nace para atacar ese problema con rigor metodológico,
sin vender tecnología de moda ni implementar soluciones genéricas.

Trabajamos con pocos clientes, de forma intensiva, y solo donde
vemos potencial real de impacto medible.

─────────────────────────────────────

SECCIÓN: Cómo pensamos (5 values cards)

VALORES:

Card 1:
Título: Evidencia antes que opinión
Texto: "No diagnosticamos sin datos. No recomendamos sin métricas.
        No prometemos sin supuestos claros."

Card 2:
Título: ROI medible
Texto: "Si no podemos estimar el retorno con números (aunque sean
        aproximados), no recomendamos la mejora."

Card 3:
Título: Proceso primero, IA después
Texto: "La tecnología amplifica. Si el proceso está roto, la
        automatización solo lo rompe más rápido."

Card 4:
Título: Pocos clientes, alto foco
Texto: "Máximo 2–3 proyectos simultáneos. No somos una fábrica
        de informes. Somos un equipo de rediseño."

Card 5:
Título: Honestidad brutal
Texto: "Si no somos la solución para tu problema, te lo decimos.
        Sin descuentos, sin humo, sin promesas imposibles."

─────────────────────────────────────

SECCIÓN: Credenciales

BLOQUE:
Certificación: Lean Six Sigma Green Belt
Institución: Kaizen Institute
Año: 2020

Texto adicional:
"Experiencia en operaciones de industria alimentaria,
hospitalidad y entornos regulados."

─────────────────────────────────────

SECCIÓN: Nuestra metodología (resumen 5 pasos)

[Mismo componente que HowWeWork en Home, versión condensada]

─────────────────────────────────────

CTA FINAL:
[Solicitar Auditoría] → href="/formulario"
```

---

## 10. NAVEGACIÓN Y LINKS (resumen)

```
Header Links:
- Logo → /
- Auditoría → /auditoria
- Casos → /casos
- Sobre → /sobre
- [Solicitar Auditoría] → /formulario (botón primario)

Footer Links:
- Auditoría → /auditoria
- Casos → /casos
- Sobre → /sobre
- Solicitar Auditoría → /formulario
- Email: hola@flow360market.com (placeholder)

Internal CTAs:
- Todos los botones "Solicitar Auditoría" → /formulario
- "Ver cómo trabajamos" en Hero → /auditoria o #como-trabajamos
- "Ver casos" → /casos
- Botón en Thank You → /auditoria y /

Thank You:
- /formulario → (submit exitoso) → /gracias
```

---

## 11. ANIMACIONES Y MICRO-INTERACCIONES

```typescript
// Usar Framer Motion para:

// 1. Entrada de secciones (fade + slide up)
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
// Aplicar con IntersectionObserver (useInView de framer-motion)

// 2. Cards (stagger de entrada)
const containerVariants = {
  visible: { transition: { staggerChildren: 0.1 } }
};

// 3. Steps de metodología (aparecen en secuencia con scroll)

// 4. Formulario: transitions suaves entre secciones

// REGLAS:
// - No animar nada que sea solo decorativo sin propósito
// - Respetar prefers-reduced-motion
// - Max duration: 600ms por animación
```

---

## 12. ACCESIBILIDAD Y PERFORMANCE

```
Accesibilidad:
- Contraste mínimo WCAG AA
- Todos los inputs con label visible (no solo placeholder)
- aria-describedby en campos con error
- Focus visible en todos los elementos interactivos
- Skip navigation link al inicio

Performance:
- next/image para todas las imágenes
- Lazy loading de secciones con Suspense
- Fonts: next/font para evitar flash
- No cargar JS de terceros hasta scroll (analytics, etc.)

Responsive:
- Mobile first en todos los componentes
- Breakpoints: sm(640) md(768) lg(1024) xl(1280)
- Touch targets mínimo 44x44px en mobile
```

---

## 13. VARIABLES DE ENTORNO (`.env.local`)

```bash
# Email (Resend)
RESEND_API_KEY=re_xxxxxxxx
NOTIFICATION_EMAIL=hola@flow360market.com

# Base de datos (Supabase)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx
SUPABASE_SERVICE_ROLE_KEY=eyJxxx

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# App
NEXT_PUBLIC_SITE_URL=https://flow360market.com
```

---

## 14. COMANDOS DE SETUP

```bash
# Crear proyecto
npx create-next-app@latest flow360-web \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir=false \
  --import-alias="@/*"

cd flow360-web

# Instalar dependencias
npm install \
  @radix-ui/react-accordion \
  @radix-ui/react-checkbox \
  @radix-ui/react-radio-group \
  @radix-ui/react-select \
  react-hook-form \
  @hookform/resolvers \
  zod \
  framer-motion \
  resend \
  @supabase/supabase-js \
  clsx \
  tailwind-merge

# shadcn/ui init
npx shadcn@latest init
npx shadcn@latest add button input textarea select checkbox radio-group accordion card badge separator

# Instalar fuentes
npm install geist
```

---

## 15. CHECKLIST DE ENTREGA FINAL

```
PÁGINAS:
[ ] / (Home) — 8 secciones completas
[ ] /auditoria — 7 secciones + FAQ
[ ] /casos — Hero + 3 CaseCards + CTA
[ ] /sobre — 5 bloques
[ ] /formulario — 5 secciones + validación + submit
[ ] /gracias — Thank you page

COMPONENTES GLOBALES:
[ ] Header (sticky, mobile hamburger)
[ ] Footer (3 columnas + bottom bar)
[ ] Button (primary + secondary)
[ ] Card
[ ] Accordion (FAQ)
[ ] ProgressBar (formulario)
[ ] Section + Container wrappers

FUNCIONALIDAD:
[ ] Formulario valida todos los campos requeridos
[ ] Fit score se calcula al enviar
[ ] API route guarda en Supabase (o alternativa)
[ ] Email de notificación se envía al submit
[ ] Redirect a /gracias post submit exitoso
[ ] Mensaje inline si committedToProcess = "no"
[ ] Campo condicional "rooms" aparece solo para hoteles
[ ] Campo condicional "systemsOther" aparece al marcar "otro"

SEO:
[ ] metadata en todas las páginas
[ ] og:image configurado
[ ] robots.txt
[ ] sitemap.xml generado con next-sitemap

CALIDAD:
[ ] Responsive en mobile, tablet y desktop
[ ] Sin errores TypeScript
[ ] Contraste WCAG AA en todos los textos
[ ] Animaciones respetan prefers-reduced-motion
[ ] Variables de entorno documentadas
```

---

## 16. NOTA PARA EL GENERADOR DE CÓDIGO

> Genera el proyecto completo siguiendo esta especificación. Todos los textos deben usarse **exactamente como están escritos** en este documento (pueden adaptarse mínimamente en puntuación de estilo, jamás en significado o intención). El tono es ejecutivo, directo y sin hype. La paleta dark es la recomendada pero si el generador prefiere light mode, usar #FAFAFA como fondo con los mismos grises invertidos. El CTA único es siempre hacia /formulario. No agregar páginas ni secciones no especificadas. No agregar servicios ni funcionalidades no listadas.

---

*Flow360 Market Web Spec v1.0 — Generado para Codex / IA generativa*
