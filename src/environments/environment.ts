// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  hmr: false,
  firebase: {
    apiKey: 'AIzaSyANKBshg_h_spXhjaSWacqi5IaHwqNveeo',
    authDomain: 'material-starter.firebaseapp.com',
    databaseURL: 'https://material-starter.firebaseio.com',
    projectId: 'material-starter',
    storageBucket: 'material-starter.appspot.com',
    messagingSenderId: '702888940167',
  },
};
