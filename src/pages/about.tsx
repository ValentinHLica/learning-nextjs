import React from "react";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import About from "../components/About";

const AboutPage: React.FC = () => {
    return <About />;
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["about"])),
    },
});

export default AboutPage;
