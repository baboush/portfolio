import style from "../styles/number-project.module.css";
interface NumberProjectProps {
  projectId: number;
}
const NumberProject = ({ projectId }: NumberProjectProps) => {
  const data = projectId;

  if (data < 10) {
    return <span className={style.number_project}>0{data}</span>;
  }
  return <span className={style.number_project}>{data}</span>;
};

export default NumberProject;
