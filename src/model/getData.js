const authentication = require('./authentication')

module.exports = {
  async data_spreadsheet() {
    const { googleSheets, auth, spreadsheetId } = await authentication.get_auth_sheets();

    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: "Página1",
    })

    var dataSpreadsheet = getRows.data.values;

    const convertToObject = dataSpreadsheet.map((array) => {
      const initialValue = {};

      return array.reduce((obj, item) => {
        return {
          ...obj,
          ['phone']: item,
          ['message']: 'Hello Word'
        };
      }, initialValue);
    });

    return { convertToObject };

  }

}