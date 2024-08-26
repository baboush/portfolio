import type { APIRoute } from "astro";
import { db, Message, eq } from "astro:db";
import { lucia } from "../../../lib/auth";

export const DELETE: APIRoute = async (ctx) => {
  const sessionCookie = ctx.cookies.get("auth_session");

  if (!sessionCookie) {
    return new Response(null, { status: 401 });
  }

  const session = await lucia.validateSession(sessionCookie.value);

  if (!session) {
    return new Response(null, { status: 401 });
  }

  await db.delete(Message).where(eq(Message.id, +ctx.params.id!));
  return new Response(null, { status: 204 });
};
