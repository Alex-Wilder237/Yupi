const express = require('express');
const mailchimp = require('@mailchimp/mailchimp_marketing');

const app = express();
app.use(express.json());

mailchimp.setConfig({
  apiKey: 'VOTRE_CLE_API_MAILCHIMP', // Remplacez par votre clé API
  server: 'VOTRE_PREFIXE_DE_SERVEUR'  // Remplacez par le préfixe serveur (ex: us12)
});

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'L\'email est requis.' });
  }

  try {
    const response = await mailchimp.lists.addListMember('ID_DE_L_AUDIENCE', {
      email_address: email,
      status: 'subscribed',
    });
    res.status(200).json({ message: 'Merci pour votre abonnement !' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'abonnement.' });
  }
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
