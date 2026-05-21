import styles from "./OlympicsStats.module.css";
import { useCountUp } from "../../../../hooks/useCountUp/useCountUp";

function StatItem({ stat }) {
  const { value, ref } = useCountUp(stat.value);

  const displayed = stat.prefix
    ? `${stat.prefix}${value.toLocaleString("pt-BR")}${stat.suffix ?? ""}`
    : `${value.toLocaleString("pt-BR")}${stat.suffix ?? ""}`;

  return (
    <div className={styles.item} ref={ref}>
      <span className={styles.number}>{displayed}</span>
      <span className={styles.label}>{stat.label}</span>
    </div>
  );
}

export default function OlympicsStats({ stats }) {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {stats.map((stat) => (
          <StatItem key={stat.id} stat={stat} />
        ))}
      </div>
    </section>
  );
}