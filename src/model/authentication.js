const { google } = require('googleapis')

module.exports = {
  async get_auth_sheets() {

    /* Auth Google */
    const auth = new google.auth.GoogleAuth({
      keyFile: "credentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets"
    })

    /* Conexão com Client */
    const client = await auth.getClient();

    /* Conexão com o gooogle planilhas */
    const googleSheets = google.sheets({
      version: 'v4',
      auth: client
    })

    /* Id da planilha */
    const spreadsheetId = "14mxv90rGLGDMFYYaCMS7hNWIPNWTtKmhFVYQSDPgkdg"

    return {
      auth,
      client,
      googleSheets,
      spreadsheetId
    }
  },
}