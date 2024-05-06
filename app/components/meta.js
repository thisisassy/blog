import Head from "next/head"
import { siteMeta } from "app/lib/constants"
const { siteTitle } = siteMeta

export default function Meta({ pageTitle }) {
  return (
    <Head>
      <title>{pageTitle} | {siteTitle}</title>
      <meta property="og:title" content={`${pageTitle} | ${siteTitle}`} />
    </Head>
  )
}