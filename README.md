# NativeScript Angular 9 Code Sharing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7 and NativeScript 6.5 ' `tns create`

Uses SASS and Nativescript Theme 2.0.

## Running the NativeScript App

To run this project you must use the `--env.aot` flag or you will get errors. For example:

```
tns run ios --env.aot
```

## Running the NativeScript App with HMR

For HMR to function Ivy must be disabled in `tsconfig.tns.json` or you will get errors.

```
"angularCompilerOptions": {
    "enableIvy": false
}
```

## Running the Angular Web App

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
