const createMessage = async (req, res) => {

  console.log(req.body)

  res.json({
    message: 'Message received successfully'
  })
}

module.exports = {
  createMessage
}