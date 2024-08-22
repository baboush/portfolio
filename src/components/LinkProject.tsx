import style from "../styles/link-project.module.css";

interface LinkProject {
  link: string;
}
const LinkProject = ({ link }: LinkProject) => {
  return (
    <div className={style.link_project}>
      <img className={style.link_svg} src="/public/path.svg" alt="" />
      <a className={style.link_content} href={link}>
        LINK
      </a>
    </div>
  );
};

export default LinkProject;
