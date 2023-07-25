import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { createServer } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// function corsMiddleware(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// }

// createServer({
//   server: {
//     middleware: [
//       corsMiddleware,
//     ],
//   },
// });

