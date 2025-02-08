import Grid from '@mui/material/Grid2';
import { BigLogo } from "../../decorations/BigLogo";
import { LanguageEntry, LanguageEntryChips } from "./LanguageEntry";

import CssIcon from "/src/assets/logos/css.svg?react";
import HtmlIcon from "/src/assets/logos/html.svg?react";
import JsIcon from "/src/assets/logos/js.svg?react";
import MongoIcon from "/src/assets/logos/mongodb.svg?react";
import NextIcon from "/src/assets/logos/nextjs.svg?react";
import NodeIcon from "/src/assets/logos/nodejs.svg?react";
import PostgresqlIcon from "/src/assets/logos/postgresql.svg?react";
import ReactIcon from "/src/assets/logos/react.svg?react";

export function LanguageEntries() {
    return (
        <Grid container spacing={5} columns={{ xs: 1, md: 2 }}>
            <LanguageEntry
                icon={<BigLogo component={NextIcon} sx={{ filter: "invert(1)" }} />}
                title="Next"
                body={
                    <>
                        I can use several kinds of caching and optimizations, including: ISR, query caching and
                        dynamic
                        SSG. I use Next Auth for authentication.
                    </>
                }
                bottom={
                    <LanguageEntryChips
                        title="Highlighted libraries:"
                        chips={[
                            "Next-auth",
                            "Zod",
                        ]}
                    />
                }
            />
            <LanguageEntry
                icon={<BigLogo component={ReactIcon} />}
                title="React"
                body={
                    <>
                        I can create interactive, responsive and optimized frontends with react. I know how to use forms, dialogs, translators, infinite lists, text prediction, rich text
                        editors and marquees
                    </>
                }
                bottom={
                    <LanguageEntryChips
                        title="Highlighted libraries:"
                        chips={[
                            "Material UI",
                            "Plate",
                            "Cloudinary"
                        ]}
                    />
                }
            />
            <LanguageEntry
                icon={<BigLogo component={NodeIcon} />}
                title="Node"
                body={
                    <>
                        I can create Express and SocketIO servers with authentication, database, cloud, rechapta,
                        email
                        verification and other functions.
                    </>
                }
                bottom={
                    <LanguageEntryChips
                        title="Highlighted libraries:"
                        chips={[
                            "Zod",
                            "Passport",
                            "EJS"
                        ]}
                    />
                }
            />
            <LanguageEntry
                icon={<BigLogo component={PostgresqlIcon} />}
                title="PostgreSQL"
                body={
                    <>I can use indexes, functions, triggers, constraints, text search vectors and jsons.</>
                }
                bottom={
                    <LanguageEntryChips
                        title="ORMs:"
                        chips={[
                            "Prisma"
                        ]}
                    />
                }
            />
            <LanguageEntry
                icon={<BigLogo component={MongoIcon} />}
                title="MongoDB"
                body={
                    <>
                        I can use composite indexes, complex aggregations, mongoose constraints and general
                        functions.
                    </>
                }
                bottom={
                    <LanguageEntryChips
                        title="ODMs:"
                        chips={[
                            "Mongoose"
                        ]}
                    />
                }
            />
            <LanguageEntry
                icon={<BigLogo component={HtmlIcon} />}
                title="HTML"
                body={
                    <>
                        While structuring a site, I use the semantic elements to the improve accessibility and SEO.
                    </>
                }
                bottom={
                    <LanguageEntryChips
                        title="Highlighted tools:"
                        chips={[
                            "Lighthouse",
                            "Bing search console"
                        ]}
                    />
                }
            />
            <LanguageEntry
                icon={<BigLogo component={CssIcon} />}
                title="CSS"
                body={
                    <>
                        I can use animations, gradients, transitions, filters, SASS, variables, calculations,
                        complex
                        selectors and everything that I need to design my sites.
                    </>
                }
                bottom={
                    <LanguageEntryChips
                        title="Highlighted libraries:"
                        chips={[
                            "Bootstrap",
                            "Sass"
                        ]}
                    />
                }
            />
            <LanguageEntry
                icon={<BigLogo component={JsIcon} />}
                title="Javascript"
                body={
                    <>
                        I know all javascript syntaxes and shortings those I have ever seen. I can use regex, dom manipulation, data fetching, jquery and other javascript functions.
                    </>
                }
                bottom={
                    <LanguageEntryChips
                        title="Highlighted libraries:"
                        chips={[
                            "Jquery"
                        ]}
                    />
                }
            />
        </Grid>
    )
}