import style from "../styles/path.module.css";

interface PathProps {
  pathName: string;
}

const Path = ({ pathName }: PathProps) => {
  return (
    <div className={style.path}>
      <img className={style.path_svg} src="/public/path.svg" alt="" />
      <span className={style.path_name}>{pathName}</span>
    </div>
  );
};

export default Path;
