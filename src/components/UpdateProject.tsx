interface Project {
  id: number;
}

import { useState } from "react";
import style from "../styles/form-admin.module.css";

const UpdateProject = ({ id }: Project) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [tech, setTech] = useState("");
  const [image, setImage] = useState("");

  return (
    <form
      className={style.form_update}
      action="/api/projects/update"
      method="POST"
    >
      <div className={style.form_field}>
        <label className={style.form_field_label}>
          Title:
          <input
            className={style.form_field_input}
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>
      <div className={style.form_field}>
        <label className={style.form_field_label}>
          Tech:
          <input
            className={style.form_field_input}
            type="text"
            id="tech"
            name="tech"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            required
          />
        </label>
      </div>
      <div className={style.form_field}>
        <label className={style.form_field_label}>
          Image:
          <input
            className={style.form_field_input}
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </label>
      </div>
      <div className={style.form_field}>
        <label className={style.form_field_label}>
          Description:
          <input
            className={style.form_field_input}
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
      </div>
      <div className={style.form_field}>
        <label className={style.form_field_label}>
          Link:
          <input
            className={style.form_field_input}
            type="text"
            id="link"
            name="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </label>
      </div>
      <input type="hidden" name="id" value={+id} />
      <button className={style.btn} type="submit">
        Update Project
      </button>
    </form>
  );
};

export default UpdateProject;
