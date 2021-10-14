let currentApplication : any = null;
let currentGL :any = null;

function getApplication() {
    return currentApplication;
};

function setApplication(app : object){
    currentApplication = app;
};

function getGL() {
    return currentGL;
};

function setGL(gl : object){
    currentGL = gl;
};


export {getApplication, setApplication, getGL, setGL, currentApplication, currentGL}