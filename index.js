const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🟢 Backend Server Aktif!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: '✅ Hello from backend server!' });
});

app.listen(PORT, () => {
  console.log(`✅ Server berjalan di port ${PORT}`);
});