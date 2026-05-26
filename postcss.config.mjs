const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default config;
