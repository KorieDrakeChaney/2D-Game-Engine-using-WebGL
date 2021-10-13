let currentApplication = null;
let currentGL = null;

function getApplication() {
    return currentApplication;
};

function setApplication(app){
    currentApplication = app;
};

function getGL() {
    return currentGL;
};

function setGL(gl){
    currentGL = gl;
};


export {getApplication, setApplication, getGL, setGL, currentApplication, currentGL}