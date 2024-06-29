module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://server.tv-melchingen.de/cms/',
  app: {
    keys: env.array(["VFjFArrRpvHMnGj6cIo2+STECOOhJm2mUcnTyihTa5I="], ["qqW5mFZ6Tfo+wVPT9RBy4yEZPxjrr95Z+TI3JxgbVWk="]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});