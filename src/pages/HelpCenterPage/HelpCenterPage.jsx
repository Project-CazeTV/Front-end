
import styles from "./HelpCenterPage.module.css";

import ColoredHeader from "../../components/Layout/ColoredHeader/ColoredHeader";
import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import CommonFooter from "../../components/Layout/CommonFooter/CommonFooter";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const helpTopics = [
    {
        title: "Conta e Acesso",
        description: "Login, cadastro, recuperação de senha e gerenciamento da conta.",
        route: "/ajuda/conta-acesso",
    },
    {
        title: "Loja",
        description: "Compras, carrinho, pedidos e produtos oficiais da CazéTV.",
        route: "/ajuda/loja",
    },
    {
        title: "Notícias",
        description: "Como acompanhar notícias, matérias e conteúdos exclusivos.",
        route: "/ajuda/noticias",
    },
    {
        title: "Campeonatos",
        description: "Informações sobre Brasileirão, Libertadores e outras competições.",
        route: "/ajuda/campeonatos",
    },
    {
        title: "Plataforma",
        description: "Navegação, funcionalidades e utilização do site.",
        route: "/ajuda/plataforma",
    },
    {
        title: "Suporte Técnico",
        description: "Problemas de carregamento, erros e dúvidas técnicas.",
        route: "/ajuda/suporte-tecnico",
    },
];

export default function HelpCenterPage() {
    return (
        <>
            <ColoredHeader />
            <MainHeader isTransparent={false} />

            <main className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        Central de Ajuda
                    </h1>

                    <p>
                        Encontre respostas para dúvidas frequentes e descubra
                        como aproveitar melhor a plataforma da CazéTV.
                    </p>
                </div>

                <div className={styles.grid}>
                    {helpTopics.map((topic) => (
                        <Link
                            key={topic.title}
                            to={topic.route}
                            className={styles.card}
                        >
                            <h2>{topic.title}</h2>
                            <p>{topic.description}</p>
                        </Link>
                    ))}
                </div>

                <section className={styles.supportSection}>
                    <div>
                        <h2>Precisa de mais ajuda?</h2>
                        <p>Entre em contato com nossa equipe.</p>
                    </div>

                    <div className={styles.buttons}>
                        <a href="/contato" className={`${styles.button} ${styles.contactButton}`}>
                            Fale Conosco
                        </a>

                        <a
                            href="https://wa.me/5500000000000"
                            target="_blank"
                            rel="noreferrer"
                            className={`${styles.button} ${styles.whatsappButton}`}
                        >
                            <FaWhatsapp />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </section>
            </main>

            <CommonFooter />
        </>
    );
}

