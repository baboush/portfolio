import type { APIContext, APIRoute } from "astro";
import { db, Project, eq } from "astro:db";
import { lucia } from "../../../lib/auth";

export const POST: APIRoute = async (ctx: APIContext) => {
  const sessionCookie = ctx.cookies.get("auth_session");

  if (!sessionCookie) {
    return new Response(null, { status: 401 });
  }

  const session = await lucia.validateSession(sessionCookie.value);

  if (!session) {
    return new Response(null, { status: 401 });
  }

  const formData = await ctx.request.formData();

  const id = formData.get("id");
  const title = formData.get("title");
  const description = formData.get("description");
  const img = formData.get("image");
  const link = formData.get("link");
  const tech = formData.get("tech");

  if (
    typeof title !== "string" ||
    typeof description !== "string" ||
    typeof img !== "string" ||
    typeof link !== "string" ||
    typeof tech !== "string"
  ) {
    return new Response("Invalid input", { status: 400 });
  }

  const project = await db.select().from(Project).where(eq(Project.id, +id!));

  if (!project || project.length === 0) {
    return new Response(null, { status: 404 });
  }

  await db
    .update(Project)
    .set({ title, description, img, link, tech })
    .where(eq(Project.id, +id!));

  return ctx.redirect("/admin/dashboard");
};
