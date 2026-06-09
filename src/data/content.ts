export const CONTACT_EMAIL = 'kwpd23@gmail.com'

export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/eric-cisneros-/',
  github: 'https://github.com/kwpd23',
}

export type IconName =
  | 'code'
  | 'cpu'
  | 'database'
  | 'zap'
  | 'radio'
  | 'chart'
  | 'lock'
  | 'mail'
  | 'copy'
  | 'check'
  | 'arrow-right'
  | 'linkedin'
  | 'github'

export interface Service {
  icon: IconName
  title: string
  text: string
}

export const SERVICES: Service[] = [
  {
    icon: 'code',
    title: 'Backend y APIs',
    text: 'Servicios que aguantan carga real. Diseñamos la arquitectura, escribimos el código y lo dejamos corriendo en producción.',
  },
  {
    icon: 'cpu',
    title: 'Sistemas embebidos',
    text: 'Firmware y dispositivos conectados: sensores, telemetría y hardware que tiene que funcionar solo, durante meses.',
  },
  {
    icon: 'database',
    title: 'Datos y automatización',
    text: 'Flujos de datos, reportes y herramientas internas. Convertimos procesos manuales en sistemas que trabajan por ti.',
  },
]

export interface Project {
  icon: IconName
  title: string
  langs: string
  description: string
  problem: string
  solution: string
  result: string
  metrics: { label: string; value: string }[]
  tags: string[]
}

export const PROJECTS: Project[] = [
  {
    icon: 'zap',
    title: 'Motor de cotización en tiempo real',
    langs: 'rust · sql',
    description:
      'API de precios para una fintech: cotizaciones de divisas con latencia p99 menor a 8 ms. Reescritura de un servicio heredado en Node a Rust con Axum y Tokio.',
    problem: 'El servicio anterior colapsaba con picos de más de 3 000 peticiones por segundo.',
    solution:
      'Arquitectura asíncrona sin bloqueos, caché en memoria con expiración y cortacircuitos ante fallos.',
    result: '14 veces menos latencia y un cuarto del costo de infraestructura.',
    metrics: [
      { label: 'latencia p99', value: '7.8 ms' },
      { label: 'rendimiento', value: '12k pet/s' },
      { label: 'infraestructura', value: '−75 % costo' },
    ],
    tags: ['Rust', 'Axum', 'Tokio', 'PostgreSQL', 'Redis'],
  },
  {
    icon: 'radio',
    title: 'Telemetría agrícola en campo',
    langs: 'c · python',
    description:
      'Firmware en C para sensores de humedad y temperatura, con una pasarela en Python que agrega y reenvía datos por LoRa hacia la nube.',
    problem: 'Sensores a batería que debían durar temporadas completas sin mantenimiento.',
    solution:
      'Modo de bajo consumo agresivo y un protocolo binario propio de 12 bytes por lectura.',
    result: '11 meses de batería medidos en campo, con más de 40 nodos operando.',
    metrics: [
      { label: 'batería', value: '11 meses' },
      { label: 'datos por lectura', value: '12 bytes' },
      { label: 'nodos', value: '40+' },
    ],
    tags: ['C', 'ESP32', 'LoRa', 'Python', 'MQTT'],
  },
  {
    icon: 'chart',
    title: 'Plataforma de datos para comercio minorista',
    langs: 'python · sql',
    description:
      'Proceso que consolida las ventas de más de 30 sucursales en un almacén de datos central. Modelado dimensional, dbt y tableros que el área comercial usa a diario.',
    problem: 'Reportes manuales en Excel que tardaban 3 días por cada cierre de mes.',
    solution:
      'Ingesta incremental, modelo estrella y validaciones automáticas de calidad de datos.',
    result: 'Cierre de mes en 20 minutos y una sola fuente de verdad.',
    metrics: [
      { label: 'cierre', value: '3 días → 20 min' },
      { label: 'sucursales', value: '30+' },
      { label: 'filas/día', value: '~2M' },
    ],
    tags: ['Python', 'SQL', 'dbt', 'Airflow', 'BigQuery'],
  },
  {
    icon: 'lock',
    title: 'Cifrado de respaldos corporativos',
    langs: 'rust · c',
    description:
      'Herramienta de línea de comandos para una firma legal: AES-256-GCM, derivación de claves con Argon2 y verificación de integridad incorporada.',
    problem: 'Respaldos sensibles viajando sin cifrar a almacenamiento externo.',
    solution:
      'Binario único multiplataforma que procesa los archivos en flujo, sin cargarlos en memoria.',
    result: 'Cifra 1 GB en unos 4 segundos; integrada al respaldo nocturno.',
    metrics: [
      { label: 'velocidad', value: '~250 MB/s' },
      { label: 'binario', value: '3.1 MB' },
      { label: 'dependencias', value: 'mínimas' },
    ],
    tags: ['Rust', 'C', 'AES-GCM', 'Argon2', 'Terminal'],
  },
]

export interface StackItem {
  name: string
  level: number // 1-5
  description: string
  snippet: string
}

export const STACK: StackItem[] = [
  {
    name: 'Rust',
    level: 5,
    description:
      'Servicios de alto rendimiento, herramientas de terminal y sistemas donde la memoria y la concurrencia importan.',
    snippet: 'cargo build --release',
  },
  {
    name: 'C',
    level: 4,
    description:
      'Firmware, sistemas embebidos y código que habla directo con el hardware.',
    snippet: 'gcc -O2 -Wall main.c',
  },
  {
    name: 'Python',
    level: 5,
    description:
      'APIs con FastAPI, automatización, extracción de datos y todo el ecosistema de análisis.',
    snippet: 'uvicorn app:api --reload',
  },
  {
    name: 'SQL',
    level: 5,
    description:
      'Modelado, optimización de consultas y almacenes de datos. PostgreSQL como primera opción.',
    snippet: 'EXPLAIN ANALYZE SELECT ...',
  },
  {
    name: 'Arquitectura',
    level: 4,
    description:
      'Microservicios cuando hacen falta, monolitos cuando convienen. Eventos, colas y caché.',
    snippet: 'docker compose up -d',
  },
  {
    name: 'Infraestructura',
    level: 3,
    description:
      'Linux, Docker, integración y despliegue continuos con GitHub Actions, en AWS o en tu propio servidor.',
    snippet: 'ssh deploy@prod systemctl status',
  },
]

export const ABOUT = {
  paragraphs: [
    'Soy Eric Cisneros y me dedico al desarrollo de software desde hace más de seis años. En ese tiempo he construido herramientas a nivel personal, institucional y comercial: desde proyectos propios hasta sistemas que hoy usan organizaciones y empresas todos los días.',
    'Trabajo de principio a fin: hablo con quien tiene el problema, diseño la solución, escribo el código y lo dejo funcionando en producción. Sin intermediarios y sin diluir responsabilidades.',
  ],
  levels: [
    {
      label: 'Personal',
      text: 'Proyectos propios y herramientas de código abierto donde experimento y afino el oficio.',
    },
    {
      label: 'Institucional',
      text: 'Sistemas para organizaciones: telemetría en campo, plataformas de datos y automatización de procesos.',
    },
    {
      label: 'Comercial',
      text: 'Productos y APIs para empresas, con requisitos reales de rendimiento, seguridad y disponibilidad.',
    },
  ],
}

export interface Testimonial {
  quote: string
  role: string
  sector: string
  initials: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Tomó un servicio que se nos caía cada semana y lo dejó estable. Hoy ni pensamos en él, simplemente funciona.',
    role: 'Líder de tecnología',
    sector: 'Sector financiero',
    initials: 'LT',
  },
  {
    quote:
      'Entiende el problema de negocio, no solo el código. Nos propuso algo más simple de lo que pedíamos y nos ahorró meses.',
    role: 'Dirección de operaciones',
    sector: 'Comercio minorista',
    initials: 'DO',
  },
  {
    quote:
      'Comunicación clara y entregas puntuales cada semana. Quedamos con todo documentado y sin depender de nadie.',
    role: 'Coordinación de proyectos',
    sector: 'Sector institucional',
    initials: 'CP',
  },
]

export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Hablamos',
    text: 'Una reunión para entender el problema, los usuarios y las restricciones. Definimos juntos el enfoque antes de escribir una línea de código.',
  },
  {
    num: '02',
    title: 'Definimos',
    text: 'Alcance, tecnologías, arquitectura y plazos por escrito. Sabes exactamente qué se construye, en cuánto tiempo y a qué costo.',
  },
  {
    num: '03',
    title: 'Construimos',
    text: 'Avances cada semana y el código en tu repositorio desde el primer día. Sin cajas negras ni sorpresas al final.',
  },
  {
    num: '04',
    title: 'Lanzamos',
    text: 'Despliegue, documentación y un período de soporte. Quedas con todo: código, accesos y conocimiento.',
  },
]

export const HERO_PHRASES = [
  'backend y APIs de alto rendimiento',
  'sistemas embebidos y firmware',
  'plataformas y flujos de datos',
  'herramientas internas y automatización',
]

export const STATS = [
  { value: 6, suffix: '+', label: 'años de experiencia' },
  { value: 4, suffix: '', label: 'lenguajes principales' },
  { value: 24, suffix: ' h', label: 'tiempo de respuesta' },
  { value: 100, suffix: ' %', label: 'del código es tuyo' },
]
