/**
 * @constant
 * @type {string}
 * @name FILLMODE_NONE
 * @description When resizing the window the size of the canvas will not change.
 */

/**
 * @constant
 * @type {string}
 * @name FILLMODE_FILL_WINDOW
 * @description When resizing the window the size of the canvas will fill the window exactly.
 */

/**
 * @constant
 * @type {string}
 * @name FILLMODE_KEEP_ASPECT
 * @description When resizing the window the size of the canvas will fill the 
 *              window as best it can,while maintaing the same aspect ratio.
 */


 /**
 * @constant
 * @type {string}
 * @name RESOLUTION_AUTO
 * @description When resizing the window the size of the canvas will fill change to match the size of the canvas
 */

 /**
 * @constant
 * @type {string}
 * @name RESOLUTION_FIXED
 * @descriptionWhen the canvas is resized the resolution of the canvas will remain at the same value 
 *                  and the output will just be scaled to fit the canvas.
 */

export const enum FILLMODE {
    NONE = 'NONE',
    FILL_WINDOW = 'FILL_WINDOW', 
    KEEP_ASPECT = 'KEEP_ASPECT',
    RESOLUTION_AUTO = 'RESOLUTION_AUTO', 
    RESOLUTION_FIXED = 'RESOLUTION_FIXED'
}

