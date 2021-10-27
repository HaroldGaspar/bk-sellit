const jwt = require('jsonwebtoken');
//WORKS ✓
module.exports = {
  mailer: async (ctx) => {
    // Store the new user in database.
    const { email, token } = ctx.request.body;
    const urlVerification = `http://localhost:3008/vtfm/${token}`
    // const user = await Customer.create(ctx.query);

    //Send an email to validate his subscriptions.
    strapi.services.email.send(
      "'Confirmation mail' <welcome@sellit.com>",
      email, //user.email,
      "Welcome",
      `...confimar cuenta ${urlVerification}`
    );
    console.log(
      "dts mm",
      process.env.MAIL_PROVIDER,
      // user,
      urlVerification,
      email,
    );

    // Send response to the server.
    ctx.send({
      ok: true,
      message: "confirmation mail sended",
    });
  },

  /**NOT APPLICATE */
  verificate: async(ctx)=>{
    const {tk} = ctx.query
    const {id} = await jwt.decode(tk, process.env.ADMIN_JWT_SECRET)
    ctx.redirect('http://localhost:3008')
    //update user
    // strapi.services.userVerificate.update(id)
    // console.log(id)
    // console.log("query", ctx.query)
  }
};
