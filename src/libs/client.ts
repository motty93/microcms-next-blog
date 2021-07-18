import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.CMS_DOMAIN || '',
  apiKey: process.env.CMS_API_KEY || '',
})
