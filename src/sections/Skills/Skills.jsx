import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      <div className={styles.category}>
        <h2>FrontEnd</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="HTML" />
          <SkillList src={checkMarkIcon} skill="HTMX" />
          <SkillList src={checkMarkIcon} skill="CSS" />
          <SkillList src={checkMarkIcon} skill="JavaScript" />
          <SkillList src={checkMarkIcon} skill="JQuery" />
          <SkillList src={checkMarkIcon} skill="Bootstrap" />
          <SkillList src={checkMarkIcon} skill="Tailiwind CSS" />
        </div>
      </div>

      <hr />

      <div className={styles.category}>
        <h2>Backend</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Spring Boot" />
          <SkillList src={checkMarkIcon} skill="Laravel" />
          <SkillList src={checkMarkIcon} skill="Express" />
        </div>
      </div>

      <hr />

      <div className={styles.category}>
        <h2>Mobile Developement</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Flutter" />
        </div>
      </div>

      <hr />

      <div className={styles.category}>
        <h2>DevOps</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Docker" />
          <SkillList src={checkMarkIcon} skill="Kubernetes" />
          <SkillList src={checkMarkIcon} skill="CI/CD Pipelines" />
          <SkillList src={checkMarkIcon} skill="GitHub Actions" />
        </div>
      </div>

      <hr />

      <div className={styles.category}>
        <h2>ORDBMS & NRDBMS</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="PostgrSQL" />
          <SkillList src={checkMarkIcon} skill="Oracle" />
          <SkillList src={checkMarkIcon} skill="SQL Server" />
          <SkillList src={checkMarkIcon} skill="MongoDB" />
        </div>
      </div>

      <hr />

      <div className={styles.category}>
        <h2>VSC</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Git" />
        </div>
      </div>

      <hr />

      <div className={styles.category}>
        <h2>Testing</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="JUnit" />
        </div>
      </div>

      <hr />

      <div className={styles.category}>
        <h2>UI/UX design tools</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Figma" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
