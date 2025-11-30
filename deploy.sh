#!/bin/bash

cd /var/www/PORTAFOLIO-GABRIEL/frontend

echo "📦 Actualizando repo..."
git pull origin main

echo "📦 Instalando dependencias..."
npm install

echo "🚀 Construyendo producción..."
npm run build

echo "🔁 Reiniciando PM2..."
pm2 restart portafolio-gabriel

echo "🎉 Deploy completado correctamente."
