export class Environment {
  static getBaseUrl() {
    let envi = Cypress.env('ENV'); // Get the value of the environment variable 'ENV'
    let baseUrl;

    switch (envi) {
      case 'production':
        baseUrl = "http://192.168.1.201/huboo-shop/";

        break;
      case 'staging':
        baseUrl = "http://192.168.1.201/huboo-shop/";

        break;
      case 'qa':
        baseUrl = "http://192.168.1.201/huboo-shop/";

        break;
      case 'live':
        baseUrl = "http://192.168.1.201/huboo-shop/";

        break;
      case 'dev':
        baseUrl = "http://192.168.1.201/huboo-shop/";


    }
    console.log('Base URL:', baseUrl);

    return baseUrl;
  }
}
