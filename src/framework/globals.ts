let Application : any = null;


let getApplication = function(){
    return Application;
};


let setApplication = function(app : any){
    Application = app;
};

export {getApplication, setApplication};