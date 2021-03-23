import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HomePage: React.FC = () => {
    const { t } = useTranslation("homepage");
    const router = useRouter();
    const [lang, setLang] = useState(router.locale);

    const onClick = () => {
        setLang(lang === "en" ? "al" : "en");
        router.push("/", `/${lang}`, { locale: lang });
    };

    return (
        <div>
            <h1>{t("title")}</h1>

            <Link href="/about" locale={lang}>
                About Page
            </Link>

            <button onClick={onClick}>Change Language to: {lang}</button>
        </div>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["homepage"])),
    },
});

export default HomePage;
