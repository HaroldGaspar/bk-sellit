module.exports = async (ctx, next) => {
  if (ctx.state.user?.role.name === "Administrator") {
    // Go to next policy or will reach the controller's action.
    return await next();
  }
  console.log("role: ", ctx.state.user | "ctx.state.user");
  //   ctx.unauthorized(`You're not allowed to perform this action!`);
  return await next();
};
