module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('MY_SERVER_URL', 'https://172.203.179.85:1337'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '00a3ba90c87a9953a6a98fa6db5fbc30'),
    },
  },
});
