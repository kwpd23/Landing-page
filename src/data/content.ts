export const CONTACT_EMAIL = 'kwpd23@gmail.com'

export interface Project {
  icon: string
  title: string
  description: string
  problem: string
  solution: string
  result: string
  metrics: { label: string; value: string }[]
  tags: { name: string; kind?: 'rust' | 'c' | 'python' | 'sql' }[]
  langBar: { lang: 'rust' | 'c' | 'python' | 'sql' | 'other'; pct: number }[]
}

export const PROJECTS: Project[] = [
  {
    icon: '⚡',
    title: 'Motor de cotización en tiempo real',
    description:
      'API de pricing para una fintech que procesaba cotizaciones de divisas con latencia p99 < 8ms. Reescritura de un servicio legado en Node a Rust con Axum y Tokio.',
    problem: 'el servicio anterior colapsaba con picos de +3k req/s.',
    solution:
      'arquitectura async sin locks, cache en memoria con TTL y circuit breakers.',
    result: '14x menos latencia, 1/4 del costo de infraestructura.',
    metrics: [
      { label: 'p99', value: '7.8ms' },
      { label: 'throughput', value: '12k req/s' },
      { label: 'infra', value: '-75% costo' },
    ],
    tags: [
      { name: 'Rust', kind: 'rust' },
      { name: 'Axum' },
      { name: 'Tokio' },
      { name: 'PostgreSQL', kind: 'sql' },
      { name: 'Redis' },
    ],
    langBar: [
      { lang: 'rust', pct: 72 },
      { lang: 'sql', pct: 18 },
      { lang: 'other', pct: 10 },
    ],
  },
  {
    icon: '📡',
    title: 'Firmware para telemetría agrícola',
    description:
      'Firmware en C para sensores de humedad y temperatura desplegados en campo, con gateway en Python que agrega y reenvía datos por LoRa hacia la nube.',
    problem: 'sensores con batería que debía durar temporadas completas.',
    solution:
      'deep-sleep agresivo y protocolo binario propio de 12 bytes por lectura.',
    result: '11 meses de batería real en campo, 40+ nodos operando.',
    metrics: [
      { label: 'batería', value: '11 meses' },
      { label: 'payload', value: '12 bytes' },
      { label: 'nodos', value: '40+' },
    ],
    tags: [
      { name: 'C', kind: 'c' },
      { name: 'ESP32' },
      { name: 'LoRa' },
      { name: 'Python', kind: 'python' },
      { name: 'MQTT' },
    ],
    langBar: [
      { lang: 'c', pct: 64 },
      { lang: 'python', pct: 26 },
      { lang: 'other', pct: 10 },
    ],
  },
  {
    icon: '🗄️',
    title: 'Pipeline de datos para retail',
    description:
      'ETL que consolida ventas de 30+ sucursales en un warehouse central. Modelado dimensional, dbt para transformaciones y dashboards que el área comercial usa todos los días.',
    problem: 'reportes manuales en Excel que tardaban 3 días por cierre de mes.',
    solution:
      'ingesta incremental, modelo estrella y validaciones automáticas de calidad de datos.',
    result: 'cierre de mes en 20 minutos, una sola fuente de verdad.',
    metrics: [
      { label: 'cierre', value: '3 días → 20 min' },
      { label: 'sucursales', value: '30+' },
      { label: 'filas/día', value: '~2M' },
    ],
    tags: [
      { name: 'Python', kind: 'python' },
      { name: 'SQL', kind: 'sql' },
      { name: 'dbt' },
      { name: 'Airflow' },
      { name: 'BigQuery', kind: 'sql' },
    ],
    langBar: [
      { lang: 'python', pct: 48 },
      { lang: 'sql', pct: 42 },
      { lang: 'other', pct: 10 },
    ],
  },
  {
    icon: '🔐',
    title: 'CLI de cifrado de archivos',
    description:
      'Herramienta de línea de comandos para cifrar respaldos de una firma legal: AES-256-GCM, derivación de claves con Argon2 y verificación de integridad incorporada.',
    problem: 'respaldos sensibles viajando sin cifrar a almacenamiento externo.',
    solution:
      'binario único multiplataforma, streaming de archivos grandes sin cargarlos en RAM.',
    result: 'cifra 1GB en ~4s; integrado al flujo de respaldo nocturno.',
    metrics: [
      { label: 'velocidad', value: '~250 MB/s' },
      { label: 'binario', value: '3.1 MB' },
      { label: 'deps', value: 'mínimas' },
    ],
    tags: [
      { name: 'Rust', kind: 'rust' },
      { name: 'C', kind: 'c' },
      { name: 'AES-GCM' },
      { name: 'Argon2' },
      { name: 'CLI' },
    ],
    langBar: [
      { lang: 'rust', pct: 55 },
      { lang: 'c', pct: 25 },
      { lang: 'other', pct: 20 },
    ],
  },
]

export interface StackItem {
  name: string
  level: number // 1-5
  description: string
  snippet: string
  accent: string
}

export const STACK: StackItem[] = [
  {
    name: 'Rust',
    level: 5,
    description:
      'Servicios de alto rendimiento, CLIs y sistemas donde la memoria y la concurrencia importan.',
    snippet: 'cargo build --release',
    accent: '#f74c00',
  },
  {
    name: 'C',
    level: 4,
    description:
      'Firmware, sistemas embebidos y código que habla directo con el hardware.',
    snippet: 'gcc -O2 -Wall main.c',
    accent: '#5c9fd6',
  },
  {
    name: 'Python',
    level: 5,
    description:
      'APIs con FastAPI, automatización, scraping y todo el ecosistema de datos.',
    snippet: 'uvicorn app:api --reload',
    accent: '#ffd343',
  },
  {
    name: 'SQL',
    level: 5,
    description:
      'Modelado, optimización de queries y warehouses. PostgreSQL como primera opción.',
    snippet: 'EXPLAIN ANALYZE SELECT ...',
    accent: '#36a3f7',
  },
  {
    name: 'Arquitectura',
    level: 4,
    description:
      'Microservicios cuando hace falta, monolitos cuando conviene. Event-driven, colas, cache.',
    snippet: 'docker compose up -d',
    accent: '#a78bfa',
  },
  {
    name: 'Infra & DevOps',
    level: 3,
    description:
      'Linux, Docker, CI/CD con GitHub Actions, despliegues en AWS y VPS a la antigua.',
    snippet: "ssh deploy@prod 'systemctl status'",
    accent: '#34d399',
  },
]

export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Descubrimiento',
    text: 'Una llamada para entender el problema real. A veces la solución no es el software que tenías en mente — te lo diré.',
  },
  {
    num: '02',
    title: 'Propuesta técnica',
    text: 'Alcance, stack, arquitectura y plazos por escrito. Sabes exactamente qué se construye y cuánto cuesta.',
  },
  {
    num: '03',
    title: 'Iteraciones cortas',
    text: 'Entregas funcionales cada 1–2 semanas. Código en tu repositorio desde el día uno, no al final.',
  },
  {
    num: '04',
    title: 'Entrega y soporte',
    text: 'Documentación, deploy y un período de soporte. El proyecto es tuyo: código, accesos y conocimiento.',
  },
]

export const HERO_PHRASES = [
  'no se cae a las 3am',
  'escala sin drama',
  'tu equipo puede mantener',
  'resuelve el problema real',
  'pasa el code review',
]

export const STATS = [
  { value: 6, suffix: '+', label: 'años escribiendo código' },
  { value: 20, suffix: '+', label: 'proyectos entregados' },
  { value: 99, suffix: '.9%', label: 'uptime en producción' },
  { value: 0, suffix: '', label: 'deploys un viernes a las 6pm' },
]
