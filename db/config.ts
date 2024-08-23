import { column, defineDb, defineTable, NOW } from "astro:db";

const User = defineTable({
  columns: {
    id: column.number({ propertyName: "id", primaryKey: true }),
    username: column.text(),
    password: column.text(),
  },
});

const Project = defineTable({
  columns: {
    id: column.number({ propertyName: "id", primaryKey: true }),
    title: column.text({ unique: true, optional: false }),
    description: column.text({ optional: false, unique: true }),
    createdAt: column.date({ default: NOW }),
    updatedAt: column.date({ optional: true }),
    img: column.text({ optional: false, unique: true }),
    link: column.text({ optional: false, unique: true }),
  },
});

const Message = defineTable({
  columns: {
    id: column.number({ propertyName: "id", primaryKey: true }),
    name: column.text({ optional: false }),
    email: column.text({ optional: false }),
    message: column.text({ optional: false }),
    createdAt: column.date({ default: NOW }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { User, Project, Message },
});
