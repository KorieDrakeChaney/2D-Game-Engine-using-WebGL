import Application from "./application.js"

let currentApplication : any = null;

function getApplication() {
    return currentApplication;
};

function setApplication(app : Application){
    currentApplication = app;
};

export {getApplication, setApplication}