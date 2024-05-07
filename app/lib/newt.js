import 'server-only'
import { createClient } from 'newt-client-js'
import { cache } from 'react'

export const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID,
  token: process.env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn',
})

export const getArticles = cache(async () => {
  const { items } = await client.getContents({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      select: ['_id', 'title', 'slug', 'dateTime', 'body', 'coverImage', 'tags'],
      order: ['_sys.createdAt'],
    },
  })
  return items
})

export const getArticleBySlug = cache(async (slug) => {
  const article = await client.getFirstContent({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      slug,
      select: ['_id', 'title', 'slug', 'dateTime', 'body', 'coverImage', 'image'],
    },
  })
  return article
})