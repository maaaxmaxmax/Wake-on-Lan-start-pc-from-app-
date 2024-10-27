// server.js (Node.js backend)
const express = require('express');
const wol = require('wake_on_lan');

const app = express();
app.use(express.json());

app.post('/wake', (req, res) => {
  const { mac, ip, port } = req.body;
  if (!mac || !ip) {
    return res.status(400).send('MAC address and IP address are required.');
  }

  wol.wake(mac, { address: ip, port: port || 9 }, (error) => {
    if (error) {
      return res.status(500).send('Error sending WoL packet.');
    }
    res.send('WoL packet sent successfully!');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
