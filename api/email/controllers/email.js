"use strict";

//forbiden for access from hello api
//THE CONTROLLER SHOULD BE IN THE SAME API CONTEXT
module.exports = {
  send: async (ctx) => {
    // Store the new user in database.
    // const user = await Customer.create(ctx.query);
    console.log(
      "dts emm",
      process.env.MAIL_PROVIDER,
      process.env.MAIL_USER,
      process.env.MAIL_APP_PASS
    );

    // Send an email to validate his subscriptions.
    // strapi.plugins["email"].services.email.send({
    //   to: "'Welcome mail' <welcome@sellit.com>",
    //   from: "gaspar.hrl@gmail.com", //user.email,
    //   subject: "Welcome",
    //   text: "...test text...",
    // });

    // Send response to the server.
    ctx.send({
      ok: true,
      message: "sengrid provider required",
    });
  },
};
