"use strict";

/**
 * A set of functions called "actions" for `hello`
 */
const stripe = require("stripe")(
  "sk_test_51InWuAAKNmSLq2ZCU8tydIAn737JLdgfMxTBF56sSE9aH1TNkHSw9rcnwU7vXNDmva3RsmS2CEVQdIwJdrQfBQ1N00WYO4zj6x"
);
module.exports = {
  checkout: async (ctx) => {
    const { amount, id } = ctx.request.body;
    console.log("req", ctx.request.body);
    console.log("id/tkn", ctx.state.user.id);
    try {
      // const strRes = await stripe.charges.create({
      const strRes = await stripe.paymentIntents.create({
        amount,
        currency: "pen",
        description: `Order ${new Date()} by ${ctx.state.user.id}`,
        payment_method: id,
        confirm: true,
      });
      return strRes;
    } catch (err) {
      console.log("error: ", err);
    }
  },
};
