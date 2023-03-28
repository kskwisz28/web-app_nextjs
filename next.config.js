const {createClient} = require("next-sanity");

const {withSentryConfig} = require("@sentry/nextjs");
const {i18n} = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  i18n,
  images: {
    domains: ['cdn.sanity.io'],
  },
  sentry: {
    hideSourceMaps: true,
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
    release: 'quickbutik:latest',
  },
  async redirects() {
    /*
    return [
      {
        source: '/no/unifaun',
        destination: '/no/integration-nshift',
        permanent: true,
        locale: false,
      }
    ]
     */
    const projectId = process.env.SANITY_PROJECT_ID || '7hja5omh'
    const dataset = process.env.SANITY_DATASET || 'production'
    const client = createClient({
      projectId,
      dataset,
      useCdn: true,
      apiVersion: '2023-02-14',
    })
    const redirects = await client.fetch(`*[_type == "redirect"]`)
    return redirects.filter(redirect => redirect.fromPath !== '/academy').map(redirect => {
      let source = redirect.fromPath[0] === '/' ? redirect.fromPath : '/' + redirect.fromPath
      if (!['sv', 'da', 'no', 'en'].includes(source.split('/')[1])) {
        source = '/sv' + source
      }

      return {
        source,
        destination: redirect.toPath,
        permanent: redirect.statusCode === '301',
        locale: false,
      }
    })
  }
}

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
