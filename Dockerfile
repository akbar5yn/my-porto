# Gunakan image Node.js versi 20
FROM node:20-alpine

# Set direktori kerja di dalam kontainer
WORKDIR /app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Instal dependensi
RUN npm install

# Salin semua file dari repositori
COPY . .

# Jalankan perintah build (jika proyek Anda memiliki build step)
RUN npm run build

# Ekspos port yang digunakan oleh aplikasi
EXPOSE 5173

# Jalankan aplikasi saat kontainer dimulai
CMD ["npm", "run", "dev"]