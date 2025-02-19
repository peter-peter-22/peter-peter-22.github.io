import Grid from '@mui/material/Grid2';
import { BigLogo } from "../../decorations/BigLogo";
import { LanguageEntry, LanguageEntryChips } from "./LanguageEntry";

import CssIcon from "/src/assets/svgs/logos/css.svg?react";
import HtmlIcon from "/src/assets/svgs/logos/html.svg?react";
import JsIcon from "/src/assets/svgs/logos/js.svg?react";
import MongoIcon from "/src/assets/svgs/logos/mongodb.svg?react";
import NextIcon from "/src/assets/svgs/logos/nextjs.svg?react";
import NodeIcon from "/src/assets/svgs/logos/nodejs.svg?react";
import PostgresqlIcon from "/src/assets/svgs/logos/postgresql.svg?react";
import ReactIcon from "/src/assets/svgs/logos/react.svg?react";
import { useTranslation } from 'react-i18next';

export function LanguageEntries() {
    const { t } = useTranslation();
    return (
        <Grid container spacing={5} columns={{ xs: 1, md: 2 }}>
            <LanguageEntry
                id="languages-next"
                icon={<BigLogo component={NextIcon} sx={{ filter: "invert(1)" }} />}
                title={t("languages.next.title")}
                body={t("languages.next.body")}
                bottom={
                    <LanguageEntryChips
                        title={t("languages.next.list")}
                        chips={[
                            "Next-auth",
                            "Zod",
                        ]}
                    />
                }
            />
            <LanguageEntry
                id={"languages-react"}
                icon={<BigLogo component={ReactIcon} />}
                title={t("languages.react.title")}
                body={t("languages.react.body")}
                bottom={
                    <LanguageEntryChips
                        title={t("languages.react.list")}
                        chips={[
                            "Material UI",
                            "Plate",
                            "Cloudinary"
                        ]}
                    />
                }
            />
            <LanguageEntry
                id={"languages-node"}
                icon={<BigLogo component={NodeIcon} />}
                title={t("languages.node.title")}
                body={t("languages.node.body")}
                bottom={
                    <LanguageEntryChips
                        title={t("languages.node.list")}
                        chips={[
                            "Zod",
                            "Passport",
                            "EJS"
                        ]}
                    />
                }
            />
            <LanguageEntry
                id={"languages-postgres"}
                icon={<BigLogo component={PostgresqlIcon} />}
                title={t("languages.psql.title")}
                body={t("languages.psql.body")}
                bottom={
                    <LanguageEntryChips
                        title={t("languages.psql.list")}
                        chips={[
                            "Prisma"
                        ]}
                    />
                }
            />
            <LanguageEntry
                id={"languages-mongo"}
                icon={<BigLogo component={MongoIcon} />}
                title={t("languages.mongo.title")}
                body={t("languages.mongo.body")}
                bottom={
                    <LanguageEntryChips
                        title={t("languages.mongo.list")}
                        chips={[
                            "Mongoose"
                        ]}
                    />
                }
            />
            <LanguageEntry
                id={"languages-html"}
                icon={<BigLogo component={HtmlIcon} />}
                title={t("languages.html.title")}
                body={t("languages.html.body")}
                bottom={
                    <LanguageEntryChips
                        title={t("languages.html.list")}
                        chips={[
                            "Lighthouse",
                            "Bing search console"
                        ]}
                    />
                }
            />
            <LanguageEntry
                id={"languages-css"}
                icon={<BigLogo component={CssIcon} />}
                title={t("languages.css.title")}
                body={t("languages.css.body")}
                bottom={
                    <LanguageEntryChips
                        title={t("languages.css.list")}
                        chips={[
                            "Bootstrap",
                            "Sass"
                        ]}
                    />
                }
            />
            <LanguageEntry
                id={"languages-js"}
                icon={<BigLogo component={JsIcon} />}
                title={t("languages.js.title")}
                body={t("languages.js.body")}
                bottom={
                    <LanguageEntryChips
                        title={t("languages.js.list")}
                        chips={[
                            "Jquery"
                        ]}
                    />
                }
            />
        </Grid>
    )
}