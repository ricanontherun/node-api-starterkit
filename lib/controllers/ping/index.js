class Ping {
  // Handle GET /ping
  static handlePing (req, res) {
    return res.send('pong')
  }
}

module.exports = Ping
