
import styles from "./HelpCenterPage.module.css";

import ColoredHeader from "../../components/Layout/ColoredHeader/ColoredHeader";
import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import CommonFooter from "../../components/Layout/CommonFooter/CommonFooter";

const helpTopics = [
    {
        title: "Conta e Acesso",
        description:
            "Login, cadastro, recuperação de senha e gerenciamento da conta.",
    },
    {
        title: "Loja",
        description:
            "Compras, carrinho, pedidos e produtos oficiais da CazéTV.",
    },
    {
        title: "Notícias",
        description:
            "Como acompanhar notícias, matérias e conteúdos exclusivos.",
    },
    {
        title: "Campeonatos",
        description:
            "Informações sobre Brasileirão, Libertadores e outras competições.",
    },
    {
        title: "Plataforma",
        description:
            "Navegação, funcionalidades e utilização do site.",
    },
    {
        title: "Suporte Técnico",
        description:
            "Problemas de carregamento, erros e dúvidas técnicas.",
    },
];

export default function HelpCenterPage() {
    return (
        <>
            <ColoredHeader />
            <MainHeader isTransparent={false} />

            <main className={styles.container}>
                <div className={styles.header}>
                    <h1>Central de Ajuda</h1>

                    <p>
                        Encontre respostas para dúvidas frequentes e descubra
                        como aproveitar melhor a plataforma da CazéTV.
                    </p>
                </div>

                <div className={styles.grid}>
                    {helpTopics.map((topic) => (
                        <div key={topic.title} className={styles.card}>
                            <h2>{topic.title}</h2>
                            <p>{topic.description}</p>
                        </div>
                    ))}
                </div>

                <section className={styles.supportSection}>
                    <div>
                        <h2>Precisa de mais ajuda?</h2>
                        <p>Entre em contato com nossa equipe.</p>
                    </div>

                    <div className={styles.buttons}>
                        <a href="/contato" className={styles.button}>
                            Fale Conosco
                        </a>

                        <a
                            href="https://wa.me/5500000000000"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.button}
                        >
                            WhatsApp
                        </a>
                    </div>
                </section>
            </main>

            <CommonFooter />
        </>
    );
}

