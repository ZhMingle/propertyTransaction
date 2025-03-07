import styles from "./SearchSelect.module.css";

export default function SearchSelect({ text }: { text: string }) {
  return (
    <div className={styles.searchSelectContainer}>
      <div className="flex items-center">
        <span className="text-base font-semibold">{text}</span>
        <i className={styles.arrow}></i>
      </div>
      <div className={styles.searchSelectItemsContainer}></div>
    </div>
  );
}
