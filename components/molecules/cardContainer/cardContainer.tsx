import Card from "../card/card";
import styles from "./cardContainer.module.scss"

export default function CardContainer({ habits }) {
    return (
        <div className={styles.container}>
            {habits.map(habit => (
                <Card key={habit.title} cardInfo={habit} />
            ))}
        </div>
    )
}