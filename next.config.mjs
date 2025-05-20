/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // 👈 desactiva ESLint en build
      },
      typescript: {
        ignoreBuildErrors: true,
      },
};

export default nextConfig;
