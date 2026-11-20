const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.htm': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

  let parsedUrl = req.url.split('?')[0];
  if (parsedUrl === '/' || !parsedUrl) parsedUrl = '/index.html';

  let filePath = path.join(__dirname, decodeURIComponent(parsedUrl));

  // Security: prevent directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    return res.end('403 Forbidden');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h2>404 - Page Not Found</h2><p><a href="/">Back to Home</a></p>');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

function tryListen(ports, idx = 0) {
  if (idx >= ports.length) {
    console.error('All candidate ports are in use.');
    return;
  }
  const port = ports[idx];
  server.listen(port, '0.0.0.0', () => {
    console.log(`\n======================================================`);
    console.log(` ✨ SRUTHI THREADS & DESIGNS LOCAL SERVER IS LIVE!`);
    console.log(` 🌐 Local Link:   http://localhost:${port}/`);
    console.log(` 🌐 Home Page:    http://localhost:${port}/index.html`);
    console.log(` 🌐 Lookbook:     http://localhost:${port}/gallery.html`);
    console.log(` 🌐 Sarees:       http://localhost:${port}/sarees.html`);
    console.log(` 🌐 Bangles:      http://localhost:${port}/bangles.html`);
    console.log(` 🌐 Blouses:      http://localhost:${port}/blouse-designs.html`);
    console.log(` 🌐 Bridal Edit:  http://localhost:${port}/bridal-collection.html`);
    console.log(`======================================================\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      tryListen(ports, idx + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

tryListen([5500, 3000, 8080, 5000, 8000]);

