module.exports = ({ env }) => ({
  auth: {
    secret: 'DUcBBfvBY/reT1Ief11zHg==',
  },
  apiToken: {
    salt: "4LOZpPq7XLA2aRDPxH22BA==",
  },
  transfer: {
    token: {
      salt: 'SmS6zWmvxCru2XG4a7DB+w==',
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
