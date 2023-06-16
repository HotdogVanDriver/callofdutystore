const axios = require('axios');

const webhookUrl = 'https://discord.com/api/webhooks/1119249380898250836/laPiFMP9oNEHP79e6aY2GmnRgSSx9OuIUswjDVDV1vCWfPMqcc4IOHuSL5xmS_lGztOm';

let messageContent = 'YourMessageHere';

axios.post(webhookUrl, { content: messageContent })
  .then(() => console.log('Message sent successfully'))
  .catch(err => console.error('Failed to send message:', err));
async function getStoreContent() {
  try {
    const response = await axios.get('https://api.codapi.dev/v1/store');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
