module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: env("CLIENT"),
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME"),
        username: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        // schema: env("DATABASE_SCHEMA"),
      },

      options: {
        useNullAsDefault: true,
      },
    },
  },
});
