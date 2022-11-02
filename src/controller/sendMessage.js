const getData = require('../model/getData')
const axios = require('axios')

module.exports = {

  async index(require, response) {
    const { convertToObject } = await getData.data_spreadsheet()

    const teste = convertToObject.map(item => {
      var url = 'https://api.z-api.io/instances/3B27CBBFA6E940A4190E12A6A64DB285/token/ED8E67B1C2C076A530B9D432/send-messages'

      axios.post(url, item)

      return (`Mensagem enviada para ${item.phone}`)
    })
    response.json(teste)
  },

}