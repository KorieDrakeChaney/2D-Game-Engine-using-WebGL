import Application from "./application"

let currentApplication : any = null;

function getApplication() {
    return currentApplication;
};

function setApplication(app : Application){
    currentApplication = app;
};

export {getApplication, setApplication}