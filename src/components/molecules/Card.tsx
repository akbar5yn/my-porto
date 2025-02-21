import { ReactNode } from "react";
import Icon from "../atoms/Icon";

type CardPros = {
    cardTite: string;
    iconCard: ReactNode;
    cardDescription: string;
    cardContent: string;
    className?: string;

}
const Card = (props: CardPros) => {
    const { cardTite, iconCard, cardDescription, cardContent, className } = props

    return (
        <div className={`card h-full flex flex-col gap-4 rounded-xl border px-6 py-4 text-wrap ${className}`}>
            <section className={`card-header grid grid-cols-[10%_90%] ${className}`}>
                <Icon className="flex items-center justify-center ">{iconCard}</Icon>
                <div className="flex flex-col justify-center ">
                    <h1 className="card-title text-xl">{cardTite}</h1>
                    <h2 className="card-description">{cardDescription}</h2>
                </div>
            </section>
            <section className="card-content relative grid grid-cols-[10%_90%] break-words">
                <div className="flex items-center justify-center ">
                    <hr className="dotted-line h-full" />
                </div>
                <p className="h-full ">{cardContent}</p>
            </section>
        </div>

    )
}

export default Card;