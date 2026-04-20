import logoApenasNome from '../../../assets/logo-apenas-nome.png'

export default function (){
    return(
        <footer className={styles.CommonFooter}>
            <img src={logoApenasNome} />
            <div className={styles.FlexFooter}>
                <div className={styles.SelfFlexArea}>
                    <h3>ATALHOS</h3>
                    <p>Todos os jogos</p>
                    <p>Todos os times</p>
                    <p>Todas as competições</p>
                    <p>Apostas Brasil</p>
                </div>
                <div className={styles.SelfFlexArea}>
                    <h3>SOBRE NÓS</h3>
                    <p>História</p>
                    <p>Carreiras</p>
                    <p>Contato</p>
                    <p>Central de Ajuda</p>
                </div>
                <div className={styles.SelfFlexArea}>
                    <h3>INFORMAÇÕES LEGAIS</h3>
                    <p>Política de privacidade</p>
                    <p>Termos & Condições</p>
                </div>
                <div className={styles.SelfFlexIcons}>
                    <h3>ATALHOS</h3>
                    <p>Todos os jogos</p>
                </div>
            </div>
        </footer>
    )
}