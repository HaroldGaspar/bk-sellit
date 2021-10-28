module.exports = async (ctx, next) => {
  //ctx :{request:{}, response:{}, app{}, originalUrl:"",req,res,socket}
  if (ctx.state.user) {
    // Go to next policy or will reach the controller's action.
    console.log("state: ", ctx.state);
    return await next();
  }

  console.log("state: ", ctx.state); // state:{session:{}, _passport:{instance:Authenticator{}}}
  //console.log("state: ", ctx.req); //req:{IncomingMessage:{_readableState: ReadableState{}}}
  console.log("role: ", ctx.state.user.role.name);
  ctx.unauthorized(`You're not logged in!`);
};
