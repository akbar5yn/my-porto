import Typography from "../atoms/Typography";

const AboutDescription = () => {
    return (
        <section className="flex flex-col gap-2 text-justify">
            <Typography tag="h1" variantClass="title">About Me</Typography>
            <Typography tag="p" variantClass="body">
                Focused on <span className="font-bold">Frontend Development</span> by building modern and responsive web interfaces using Vue.js, React, and Next.js. In addition, I have backend development experience with Express.js and MySQL to ensure reliable system integration. Proficient in Laravel as a PHP framework for full-stack development, enabling me to handle the entire application development workflow. I also prioritize learning emerging technologies to deliver relevant and impactful solutions for users.

            </Typography>

        </section>
    );
};

export default AboutDescription;
