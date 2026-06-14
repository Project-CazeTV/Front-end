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

                    <span className={styles.eyebrow}>Fale conosco</span>
                    <h1 className={styles.title}>Entre em<br />Contato</h1>
                    <div className={styles.divider} />
                    <p className={styles.subtitle}>
                        Tem alguma dúvida, sugestão ou problema?
                        Nossa equipe está pronta para ajudar.
                    </p>

                    <form className={styles.form} onSubmit={handleSubmit}>

                        <div className={styles.fieldGroup}>
                            <div className={styles.field}>
                                <label className={styles.label} htmlFor="name">Nome</label>
                                <input className={styles.input} id="name" type="text" placeholder="Seu nome completo"/>
                            </div>

                            <div className={styles.field}>
                                <label className={styles.label} htmlFor="email">E-mail</label>
                                <input className={styles.input} id="email" type="email" placeholder="seu@email.com" />
                            </div>
                        </div>

                        <div className={styles.fieldFull}>
                            <label className={styles.label} htmlFor="message">Mensagem</label>
                            <textarea className={styles.textarea} id="message" rows="5" placeholder="Escreva sua mensagem aqui..."/>
                        </div>

                        <div className={styles.submitRow}>
                            <button className={styles.submitBtn} type="submit">
                                Enviar mensagem
                            </button>
                            <span className={styles.submitNote}>
                                Respondemos em até<br />2 dias úteis.
                            </span>
                        </div>
                    </form>

                    <div className={styles.contactInfo}>
                        <p className={styles.sectionLabel}>Outros canais</p>
                        <h2>Como nos encontrar</h2>

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