// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: '(dev)',
  ACTIVITY_GETALL: 'http://localhost:9092/TaskDone/activity/activity-getall',
  ACTIVITY_UPDATE: 'http://localhost:9092/TaskDone/activity/activity-update',
  EMPLOYEE_GETALL: 'http://localhost:9092/TaskDone/employee/employee-getall',
  EMPLOYEE_GETBYID: 'http://localhost:9092/TaskDone/employee/employee-getbyid/',
  ACTIVITY_DELETEBYID: 'http://localhost:9092/TaskDone/activity/activity-delete/',
  EMPLOYEE_GETBYNOMBRE_CEDULA: 'http://localhost:9092/TaskDone/employee/employee-getbynombreCedula/',
  ACTIVITY_GETBYCODIGO: 'http://localhost:9092/TaskDone/activity/activity-getbyCodigo/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
