import Typography from "../atoms/Typography";

const AboutDescription = () => {
    return (
        <section className="flex flex-col gap-2 text-justify">
            <Typography tag="h1" variantClass="title">About Me</Typography>
            <Typography tag="p" variantClass="body">
                Saya adalah seorang <span className="font-bold">Web Developer</span> yang mengembangkan antarmuka web modern dan responsif.
                Dengan perpaduan desain intuitif dan pengalaman pengguna yang optimal, saya menciptakan tampilan yang menarik serta fungsional.
                Fokus utama saya adalah detail, performa, dan aksesibilitas, sehingga setiap pengguna dapat menikmati pengalaman terbaik saat menggunakan aplikasi atau website yang    saya buat.
            </Typography>

        </section>
    );
};

export default AboutDescription;
