import styles from "@/styles/itemlist.module.css"

export default function ItemList({ items }) {
  return (
    <ul className={styles.itemList}>
      {items.map((item, index) => (
        <li key={index} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
