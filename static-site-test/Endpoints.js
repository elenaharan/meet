endpoints:
  GET - https://bdsyywwil7.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url
  GET - https://bdsyywwil7.execute-api.eu-central-1.amazonaws.com/dev/api/token/{code}
functions:
  getAuthURL: auth-server-dev-getAuthURL
  getAccessToken: auth-server-dev-getAccessToken