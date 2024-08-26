import type { APIContext } from "astro";
import { and, db, eq, User } from "astro:db";
import { lucia } from "../../lib/auth";

export async function POST(ctx: APIContext) {
  const formData = await ctx.request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  if (typeof username !== "string" || typeof password !== "string") {
    return new Response("Invalid input", { status: 400 });
  }

  const existingUser = await db
    .select()
    .from(User)
    .where(and(eq(User.username, username), eq(User.password, password)))
    .limit(1);

  if (!existingUser || existingUser.length === 0) {
    return ctx.redirect("/admin/login");
  }

  const user = existingUser[0];
  const session = await lucia.createSession(user.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  ctx.cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return ctx.redirect("/");
}
