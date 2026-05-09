import styles from './HistoriaContent.module.css';
import { capitulos } from '../../../../mocks/history';
import SectionTitle from '../../../../components/Common/SectionTitle/SectionTitle';

const cores = ["#F97316", "#E20E0E", "#009C3B", "#0047BB", "#FFD700"];

export default function HistoriaContent() {
  return (
    <section className={styles.section}>
      {capitulos.map((cap, i) => (
        <div key={cap.numero} className={styles.capitulo}>
          <SectionTitle
            title={cap.titulo}
            color={cores[i % cores.length]}
            number={cap.numero}
          />

          <div className={styles.conteudo}>
            {cap.texto.trim().split('\n\n').map((paragrafo, pIdx) => (
              <p key={pIdx} className={styles.paragrafo}>
                {paragrafo.trim()}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}