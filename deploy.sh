```bash
#!/usr/bin/env bash
# Simple script de deploy para el portafolio de Gabriel Stoyko

set -e

### CONFIGURACIÓN
# Cambia estos valores por los de tu servidor
SERVER_USER="tu_usuario"                    # ej: ubuntu
SERVER_HOST="tu-servidor.com"               # ej: 123.123.123.123
SERVER_PATH="/var/www/PORTAFOLIO-GABRIEL"   # ruta del proyecto en el servidor
BRANCH="main"

APP_FRONT_PM2_NAME="portfolio-frontend"
APP_BACK_PM2_NAME="portfolio-backend"       # Úsalo cuando tengas backend real

echo ">>> Deploy al servidor ${SERVER_USER}@${SERVER_HOST}"
echo ">>> Ruta remota: ${SERVER_PATH}"
echo ">>> Rama: ${BRANCH}"
echo ""

ssh "${SERVER_USER}@${SERVER_HOST}" << EOF
  set -e

  echo ">>> Entrando a carpeta del proyecto..."
  cd "${SERVER_PATH}"

  echo ">>> Haciendo git pull..."
  git fetch origin ${BRANCH}
  git reset --hard origin/${BRANCH}

  echo ">>> Frontend: instalando dependencias..."
  cd frontend
  npm install

  echo ">>> Frontend: construyendo build de producción..."
  npm run build

  echo ">>> Frontend: reiniciando PM2 (${APP_FRONT_PM2_NAME})..."
  pm2 restart "${APP_FRONT_PM2_NAME}" || pm2 start npm --name "${APP_FRONT_PM2_NAME}" -- run preview

  echo ">>> Backend (opcional):"
  if [ -d "../backend" ]; then
    cd ../backend
    if [ -f package.json ]; then
      echo "    Instalando dependencias backend..."
      npm install
      echo "    Reiniciando PM2 (${APP_BACK_PM2_NAME})..."
      pm2 restart "${APP_BACK_PM2_NAME}" || pm2 start npm --name "${APP_BACK_PM2_NAME}" -- run start
    else
      echo "    No hay package.json en backend, se omite."
    fi
  else
    echo "    No hay carpeta backend, se omite."
  fi

  echo ">>> Deploy terminado."
EOF

echo ""
echo "✅ Deploy completo."