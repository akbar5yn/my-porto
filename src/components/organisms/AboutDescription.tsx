import Typography from "../atoms/Typography";

const AboutDescription = () => {
    return (
        <section className="flex flex-col gap-2 text-justify">
            <Typography tag="h1" variantClass="title">About Me</Typography>
            <Typography tag="p" variantClass="body">
                I am a  <span className="font-bold">Web Developer</span> specializing in modern and responsive web interfaces. By combining intuitive design with optimal user experience, I create visually appealing and highly functional applications. My focus lies in detail-oriented development, performance optimization, and accessibility, ensuring that users enjoy the best possible interaction with the websites and applications I build."
            </Typography>

        </section>
    );
};

export default AboutDescription;
