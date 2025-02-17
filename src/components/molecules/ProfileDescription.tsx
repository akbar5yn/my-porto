import Typography from "../atoms/Typography";

const ProfileDescription = () => {
    return (
        <div className="space-y-4 text-gray-300">
            <Typography tag="p" variantClass="body">
                I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
            </Typography>
            <Typography tag="p" variantClass="body">
                Currently, I'm a Senior Front-End Engineer at{" "}
                <span className="font-semibold ">Klaviyo</span>, specializing in accessibility.
                I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend.
            </Typography>
            <Typography tag="p" variantClass="body">
                In the past, I've had the opportunity to develop software across a variety of settings —
                from <span className="font-semibold ">advertising agencies</span> and{" "}
                <span className="font-semibold ">large corporations</span> to{" "}
                <span className="font-semibold ">start-ups</span> and{" "}
                <span className="font-semibold ">small digital product studios</span>.
            </Typography>
            <Typography tag="p" variantClass="body">
                In my spare time, I’m usually climbing, reading, hanging out with my wife and two cats, or
                running around Hyrule searching for <span className="font-semibold">Korok seeds</span>.
            </Typography>
        </div>
    );
};

export default ProfileDescription;
