import styles from "./ChampionshipPage.module.css";
import ListaDeJogos from "../../features/Championships/components/ListaDeJogos/ListaDeJogos";
import TabelaGrupo from "../../features/Championships/components/TabelaGrupo/TabelaGrupo";
import TabelaClassificacao from "../../features/Championships/components/TabelaClassificacao/TabelaClassificacao";
import SectionTitle from "../../components/Common/SectionTitle/SectionTitle";
import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import CommonFooter from "../../components/Layout/CommonFooter/CommonFooter";

export default function ChampionshipPage({ campeonato }) {

    if (!campeonato) {
        return (
            <p className={styles.vazio}>
                Campeonato não encontrado.
            </p>
        );
    }

    const cor = campeonato.cor || "#3b5bdb";

    const jogosPassados = [
        ...(campeonato.jogosPassados || []),
        ...(campeonato.confrontos?.filter(
            (c) => c.placarA !== null && c.placarA !== undefined
        ) || []),
    ];

    const proximosJogos = [
        ...(campeonato.proximosJogos || []),
        ...(campeonato.confrontos?.filter((c) => !c.placarA) || []),
    ];

    return (
        <div className={styles.pagina}>
            <MainHeader />
            <div
                className={styles.cabecalho}
                style={{ borderColor: cor }}>
                {campeonato.logo && (
                    <img src={campeonato.logo} alt={campeonato.nome} className={styles.logoCampeonato} />
                )}
                <div className={styles.infoCabecalho}>
                    <h2 className={styles.nomeCampeonato}>{campeonato.nomeCompleto || campeonato.nome}</h2>
                    <span className={styles.faseAtual}>{campeonato.fase}</span>
                    {campeonato.campeao && (
                        <span className={styles.badgeCampeao}>
                            🏆 Campeão {campeonato.campeao}
                        </span>
                    )}
                </div>
            </div>

            <div className={styles.conteudo}>
                {campeonato.tabela && (
                    <section className={styles.secao}>
                        <SectionTitle title="Tabela" color={cor} number={"00"} inline />
                        <TabelaClassificacao tabela={campeonato.tabela} mostrarLegenda={campeonato.id === "brasileirao-2026"}/>
                    </section>
                )}

                {campeonato.grupos && (
                    <section className={styles.secao}>
                        <SectionTitle title="Grupos" color={cor} number={"00"} inline />
                        <div className={styles.gradeGrupos}>
                            {campeonato.grupos.map((grupo, indice) => (
                                <TabelaGrupo key={indice} grupo={grupo} cor={cor} />
                            ))}
                        </div>
                    </section>
                )}

                {proximosJogos.length > 0 && (
                    <section className={styles.secao}>
                        <SectionTitle title="Próximos jogos" color={cor} number={"00"} inline />
                        <ListaDeJogos jogos={proximosJogos} />
                    </section>
                )}

                {jogosPassados.length > 0 && (
                    <section className={styles.secao}>
                        <SectionTitle title="Jogos passados" color={cor} number={"00"} inline />
                        <ListaDeJogos jogos={jogosPassados} />
                    </section>
                )}

                {campeonato.confrontos?.length > 0 && (
                    <section className={styles.secao}>
                        <SectionTitle title="Confrontos" color={cor} number={"00"} inline />
                        <ListaDeJogos jogos={campeonato.confrontos} />
                    </section>
                )}
            </div>

            <CommonFooter />
        </div>
    );
}