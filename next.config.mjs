/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Outputs a Single-Page Application (SPA).
  distDir: './dist', // Changes the build output directory to `./dist/`.

  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'pt'
  }
}
 
export default nextConfig