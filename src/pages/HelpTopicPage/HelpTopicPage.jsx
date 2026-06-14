import { useState } from "react";
import { useParams } from "react-router-dom";
import ColoredHeader from "../../components/Layout/ColoredHeader/ColoredHeader";
import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import CommonFooter from "../../components/Layout/CommonFooter/CommonFooter";
import styles from "./HelpTopicPage.module.css";
import { helpContent } from "../../mocks/helpCenter";

export default function HelpTopicPage() {
    const { topic } = useParams();

    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (question) => {
        setOpenQuestion(
            openQuestion === question ? null : question
        );
    };

    const currentTopic = helpContent[topic];

    return (
        <>
            <ColoredHeader />
            <MainHeader isTransparent={false} />

            <main className={styles.container}>
                <h1>{currentTopic?.title}</h1>

                <div className={styles.questions}>
                    {currentTopic?.questions.map((item) => (
                        <div
                            key={item.question}
                            className={styles.questionCard}
                        >
                            <button
                                className={styles.questionButton}
                                onClick={() => toggleQuestion(item.question)}
                            >
                                {item.question}
                            </button>

                            {openQuestion === item.question && (
                                <div className={styles.answer}>
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>

            <CommonFooter />
        </>
    );
}