import { ReactNode } from "react";
import Icon from "../atoms/Icon";
import Typography from "../atoms/Typography";

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
            <section className={`card-header grid grid-cols-[20%_80%] lg:grid-cols-[10%_90%] ${className}`}>
                <Icon className="flex items-center justify-center ">{iconCard}</Icon>
                <div className="flex flex-col justify-center ">
                    <Typography className="card-title !text-[16px] lg:!text-xl font-black">{cardTite}</Typography>
                    <Typography className="card-description">{cardDescription}</Typography>
                </div>
            </section>
            <section className="card-content relative grid grid-cols-[20%_80%] lg:grid-cols-[10%_90%] break-words">
                <div className="flex items-center justify-center ">
                    <hr className="dotted-line h-full" />
                </div>
                <Typography className="h-full ">{cardContent}</Typography>
            </section>
        </div>

    )
}

export default Card;