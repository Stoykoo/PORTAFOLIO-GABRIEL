const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 4000;

// ── Security middleware ──────────────────────────────────────
// Helmet: configura headers HTTP de seguridad (XSS, clickjacking, etc.)
app.use(helmet());

// CORS: solo permite peticiones desde tus dominios
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : [
      'https://mi-stoyko.online',
      'https://www.mi-stoyko.online',
      'http://localhost:5173',
      'http://localhost:3000',
    ];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir requests sin origin (Postman, curl, server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Bloqueado por CORS'));
  },
  methods: ['GET', 'POST'],
  credentials: true,
}));

// Rate limiting: máximo 100 requests por IP cada 15 minutos
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiadas peticiones, intenta de nuevo más tarde.' },
});
app.use(limiter);

// Body parser
app.use(express.json({ limit: '10kb' }));

// ── Routes ───────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({ message: 'API del portafolio de Gabriel lista.' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── Error handler ────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: 'Error interno del servidor.' });
});

// ── Start ────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});
