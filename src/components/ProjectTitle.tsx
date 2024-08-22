import style from "../styles/project-title.module.css";

interface ProjectTitleProps {
  projectName: string;
}

const ProjectTitle = ({ projectName }: ProjectTitleProps) => {
  return (
    <div className={style.project_title}>
      <img className={style.project_svg} src="/public/path.svg" alt="" />
      <span className={style.project_name}>{projectName}</span>
    </div>
  );
};

export default ProjectTitle;
