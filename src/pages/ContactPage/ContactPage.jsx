
import styles from "./ContactPage.module.css";
import ColoredHeader from "../../components/Layout/ColoredHeader/ColoredHeader";
import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import CommonFooter from "../../components/Layout/CommonFooter/CommonFooter";

export default function ContactPage() {
    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Mensagem enviada com sucesso!");
    };

    return (
        <>
            <ColoredHeader />
            <MainHeader isTransparent={false} />

            <main className={styles.container}>
                <section className={styles.contactSection}>
                    <h1>Contato</h1>

                    <p className={styles.subtitle}>
                        Tem alguma dúvida, sugestão ou problema?
                        Nossa equipe está pronta para ajudar.
                    </p>

                    <form className={styles.form}>
                        <input
                            type="text"
                            placeholder="Nome"
                        />

                        <input
                            type="email"
                            placeholder="E-mail"
                        />

                        <textarea
                            rows="6"
                            placeholder="Mensagem"
                        />

                        <button type="submit">
                            Enviar
                        </button>
                    </form>

                    <div className={styles.contactInfo}>
                        <h2>Outros canais</h2>

                        <div className={styles.contactGrid}>
                            <div className={styles.contactCard}>
                                <h3>E-mail</h3>
                                <p>contato@cazetv.com.br</p>
                            </div>

                            <div className={styles.contactCard}>
                                <h3>Telefone</h3>
                                <p>(21) 99999-9999</p>
                            </div>

                            <div className={styles.contactCard}>
                                <h3>Atendimento</h3>
                                <p>Segunda a Sexta</p>
                                <p>09h às 18h</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <CommonFooter />
        </>
    );
}

