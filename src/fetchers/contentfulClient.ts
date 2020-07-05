const { createClient } = require('contentful/dist/contentful.browser.min.js');

const client = createClient({
  space: 'e6scnx45mqky',
  accessToken: 'LWQ2xMS_RgcafcgOGDKvxoyzqNPYPGDtT1x5ohFTtu4',
});

export default client;
