import { JSX, ReactNode } from "react";

type TypographyProps = {
    tag?: keyof JSX.IntrinsicElements;
    variantClass?: "title" | "subtitle" | "body";
    className?: string;
    children: ReactNode;
}

const Typography = (props: TypographyProps) => {
    const { tag: Tag = "p", variantClass = "body", className = "", children } = props
    const typographyClass = {
        title: "text-4xl font-bold",
        subtitle: "text-xl font-semibold",
        body: "text-base text-gray-500",
    };
    return (
        <Tag className={`${typographyClass[variantClass]} ${className}`}>{children}</Tag>
    );

}

export default Typography;