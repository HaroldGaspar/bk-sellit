//WORKS ✓
module.exports = {
  mailer: async (ctx) => {
    // Store the new user in database.
    // const user = await Customer.create(ctx.query);

    // Send an email to validate his subscriptions.
    // strapi.services.email.send(
    //   "'Welcome mail' <welcome@sellit.com>",
    //   "gaspar.hrl@gmail.com", //user.email,
    //   "Welcome",
    //   "...test text..."
    // );
    console.log(
      "dts mm",
      process.env.MAIL_PROVIDER,
      process.env.MAIL_USER,
      process.env.MAIL_APP_PASS
    );

    // Send response to the server.
    ctx.send({
      ok: true,
      message: "confirmation mail sended",
    });
  },
};
