import React from "react";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HomePage: React.FC = () => {
    const { t } = useTranslation("homepage");

    return <div>{t("title")}</div>;
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["homepage"])),
    },
});

export default HomePage;
