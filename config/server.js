module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 80),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "2e9baec0d8ca88e73aeb2a29e11ba544"),
    },
  },
  autoReload: {
    enabled: true,
  },
  // url: env("PUBLIC_URL", "http://hakhi.xyz:8000"),
});
