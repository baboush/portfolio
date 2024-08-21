import style from "../styles/tech.module.css";
interface TechName {
  techName: string;
}

const Tech = ({ techName }: TechName) => {
  return (
    <div className={style.box_tech}>
      <img className={style.img_tech} src="/public/current.svg" alt="" />
      <span className={style.tech_name}>{techName}</span>
    </div>
  );
};

export default Tech;
