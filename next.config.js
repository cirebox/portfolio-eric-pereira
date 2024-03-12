module.exports = {
  images: {
    domains: [
      "prod-files-secure.s3.us-west-2.amazonaws.com",
      "cirebox.com.br",
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "imgur.com"
    ]
  },
  async headers() {
    return [
        {
            // matching all API routes
            source: "/api/:path*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }
    ]
  }
  // images: {
  //   minimumCacheTTL: 60,
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
  //       pathname: '**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'res.cloudinary.com',
  //       pathname: '**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'avatars.githubusercontent.com',
  //       pathname: '**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'imgur.com',
  //       pathname: '**',
  //     },
  //   ],
  // },
};
