import { db, User, Project } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db
    .insert(User)
    .values([{ id: "1", username: "arnaud", password: "Test1234!" }]);

  await db.insert(Project).values([
    {
      id: 1,
      title: "1er Project",
      description: "Une petite description de mon project",
      img: "../public/img.png",
      link: "#",
      tech: "Javascript",
    },
    {
      id: 2,
      title: "2eme Project",
      description: "Une petite description de mon project",
      img: "../public/img.png",
      link: "#",
      tech: "Javascript",
    },
    {
      id: 3,
      title: "3eme Project",
      description: "Une petite description de mon project",
      img: "../public/img.png",
      link: "#",
      tech: "Javascript",
    },
    {
      id: 4,
      title: "4eme Project",
      description: "Une petite description de mon project",
      img: "../public/img.png",
      link: "#",
      tech: "Javascript",
    },
  ]);
}
