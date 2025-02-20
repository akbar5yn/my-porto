import Typography from "../atoms/Typography";
import Card from "../molecules/Card";

const AboutDescription = () => {
    return (
        <section className="flex flex-col gap-2 text-justify">
            <Typography tag="h1" variantClass="title">About Me</Typography>
            <Typography tag="p" variantClass="body">
                Saya adalah seroang <span className="font-bold">web developer</span>, yang dimana saya mengembangkan antarmuka web yang modern dan responsif yang memadukan dengan pengalaman pengguna sehingga
                menghasilkan tampilan yang intuitif, menarik, dan fungsional. Saya berfokus pada detail, performa, dan kemudahan aksesibilitas, sehingga setiap pengguna dapat
                merasakan pengalaman yang optimal dalam menggunakan aplikasi atau website yang saya buat.
            </Typography>
        </section>
    );
};

export default AboutDescription;
