module.exports = {
  //...
  settings: {
    load: {
      before: ["cors"],
    },
    cors: {
      enabled: true,
      origin: ["*"],
      headers: ["*"],
      methods: ["*"],
    },
  },
};
