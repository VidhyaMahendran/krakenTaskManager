# Kraken Task Manager

Simple Task Manager App created using Kraken framework which supports both English and Hebrew in Right To Left direction.

## Features
- This app can be used to add and list the tasks which are added by the user.
- There is **no Database setup required** for running this App.
- The browser **needs localStorage support**. Otherwise, user will be notified with the error message.
- The future operation in pipeline for this App is **Edit and Deletion of tasks**.
- This App utilizes Kraken's Multi language support. It **supports Hebrew language in Right To Left direction**.


## Description
### Controllers
- The app will run on the port **9000** in default, so that other Kraken app will not be affected.
- **/**(root) controller will check for the **LocalStorage** eligibility check. If the browser supports LocalStorage object, then user will be shown with the Add task message. Otherwise, user will be notified with error message.
- **addEditTasks** controller loads the addEditTasks.dust template having Task Add form with the task related fields like Task Name, Category, Details, Created Date, Completion Date, Task Status. Task Created date is auto filled with the current date in **DD/MM/YYYY** format. **Unique task id** is auto-generated and passed as the hidden field with the form. This will be helpful while storing the task in LocalStorage.
- **listTasks** controller loads the listTasks.dust template. In this template, the list of tasks added and stored in LocalStorage are listed.

### Multi-language support
- The app also utilizes **Kraken's Multi language support** and supports both **English** in **Left to Right** and **Hebrew** in **Right to Left** directions.
- The client side javascript will check for the language from cookie while the page is loaded. During first time, if there is no language set, it will be loaded with **en_US**.
- The language switching is supported using the Middleware **language.js** inspired by **Shopping Cart** app.
- When the user clicks **Hebrew** in the language switcher, then **language.js** middleware will set the app's language to **he_IL** in Cookie.
- The client side javascript reads the language from Cookie as  **he_IL**  and will add  **rtl class to body** element,  **dir as rtl to html** element.
- Using **LESS** features like **Parametric Mixins, Nested rules**, the **Hebrew** related **RTL** styles can also be added in the same file **app.less**.

### Feature Extensions
- The app can be extended with the **Edit** and **Delete** tasks operations.
- Instead of LocalStorage, the app can be migrated into **Mongo DB**.