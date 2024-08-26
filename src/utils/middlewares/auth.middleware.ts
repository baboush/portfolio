import { lucia } from "../../lib/auth.ts";
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (ctx, next) => {
  const sessionId = ctx.cookies.get(lucia.sessionCookieName)?.value ?? null;

  if (!sessionId) {
    ctx.locals.user = null;
    ctx.locals.session = null;
    return next();
  }

  const { session, user } = await lucia.validateSession(sessionId);

  if (session && session.fresh) {
    const sessionCookie = lucia.createSessionCookie(session.id);
    ctx.cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  }

  if (!session) {
    const sessionCookie = lucia.createBlankSessionCookie();
    ctx.cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  }

  ctx.locals.session = session;
  ctx.locals.user = user;
  return next();
});
