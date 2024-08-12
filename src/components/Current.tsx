import style from "../styles/current.module.css";

interface ProjectName {
  projectName: string;
}

const Current = ({ projectName }: ProjectName) => {
  return (
    <div className={style.box_current}>
      <img className={style.img_current} src="/public/current.svg" alt="" />
      <span className={style.current}>{projectName}</span>
    </div>
  );
};

export default Current;
