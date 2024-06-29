import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { config } from 'dotenv';

config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(
    {
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
      // use dotenv to hide the client id and client secret
      define: {
        'process.env.CLIENT_ID': JSON.stringify(process.env.CLIENT_ID),
        'process.env.CLIENT_SECRET': JSON.stringify(process.env.CLIENT_SECRET),
        'process.env.AUTH': JSON.stringify(process.env.AUTH),
        'process.env.CLIENT_TOKEN': JSON.stringify(process.env.CLIENT_TOKEN),
      }
    }
  )],
})
