import style from "../styles/link.module.css";
interface LinkProps {
  href: string;
  name: string;
}

const Link = ({ href, name }: LinkProps) => {
  return (
    <a className={style.nav_link} href={href}>
      {name}
    </a>
  );
};

<style>
  {`
.nav-link {
color: white;
texte-decoration: none;
}
`}
</style>;

export default Link;
