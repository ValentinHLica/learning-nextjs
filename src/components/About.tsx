import React from "react";

import { useTranslation } from "next-i18next";

const Test: React.FC = () => {
    const { t } = useTranslation("about");

    return <div>{t("title", { name: "Shqiptar" })}</div>;
};

export default Test;
