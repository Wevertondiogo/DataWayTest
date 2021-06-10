// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BaseUrl: "https://servicodados.ibge.gov.br/api/v1/localidades/",
  WeatherUrl: "http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/",
  KEY_API: "4a0831d7bb97cfbf5d27066cff5ec224",
  BaseLocaleUrl: "http://apiadvisor.climatempo.com.br/api-manager/user-token/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
