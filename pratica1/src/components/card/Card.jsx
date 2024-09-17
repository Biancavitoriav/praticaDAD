import styles from "./Card.module.css"
import correct from "../../assets/correcticon.png"
import wrong from "../../assets/wrongicon.png"
function Card() {
    return (
            <div className={styles.fundo}>
                <h1 className={styles.titulo}>FREE</h1>
                <div className={styles.textos}>
                    <div>
                        <div className={styles.texto1}>
                            <img src={correct} alt="" />
                            <p>PNG templates</p>
                        </div>
                        <br />
                        <div className={styles.texto2}>
                            <img src={wrong} alt="" />
                            <p>Figma responsive
                            components</p>
                        </div>
                        <br />
                        <div className={styles.texto3}>
                            <img src={wrong} alt="" />
                            <p>Constant updates</p>
                        </div>
                        <br />
                        <div className={styles.texto3}>
                            <img src={wrong} alt="" />
                            <p>Custom templates</p>
                        </div>
                    </div>
                </div>
                <p className={styles.preco}>$0</p>
                <p className={styles.periodo}>permonth</p>
                <button type="button" className={styles.botao}>Try Now</button>
            </div>
    );
}
export default Card