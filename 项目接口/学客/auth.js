// eslint-disable-next-line strict
module.exports = options => {
  return async function(ctx, next) {
    const authUrls = options.authUrls;
    if (authUrls.includes(ctx.url)) {
      const token = ctx.request.header.authorization;
      if (token) {
        // 解码；
        try {
          const user = await ctx.app.jwt.verify(token, options.secret);
          ctx.session.user = user;
          await next();
        } catch (err) {
          ctx.body = {
            status: 401,
            message: err.message,
          };
        }
      } else {
        ctx.body = {
          status: 401,
          message: 'token验证失败',
        };
        return;
      }
    } else {
      await next();
    }
  };
};
