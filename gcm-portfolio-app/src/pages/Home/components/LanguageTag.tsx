// import { FunctionComponent } from "react"

type props = {
  language: string;
};

export default function Tag({ language }: props) {
  const styles = {
    tagContainer: {
      backgroundColor: "var(--accent)",
      fontSize: "1rem",
      fontFamily: "var(--paragraph-font)",
      fontWeight: "medium",
    },
  };

  return (
    <div className="tagContainer" style={styles.tagContainer}>
      <p>{language}</p>
    </div>
  );
}
