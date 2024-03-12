module.exports = {
  images: {
    domains: [
      "prod-files-secure.s3.us-west-2.amazonaws.com",
      "cirebox.com.br",
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "imgur.com"
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
