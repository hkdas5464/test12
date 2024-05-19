module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["links.papareact.com","cloudinary.com","res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/my-account/**",
      },
    ],
  },
};
