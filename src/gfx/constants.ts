/**
 * @constant
 * @name BUFFER_STATIC
 * @type {number}
 * @description The data store contents will be modified once and used many times.
 */

export const BUFFER_STATIC : number = 0;

/**
 * @constant
 * @name BUFFER_DYNAMIC
 * @type {number}
 * @description The data store contents will be modified repeatedly and used many times
 */

export const BUFFER_DYNAMIC : number = 1;

/**
 * @constant
 * @name BUFFER_STREAM
 * @type {number}
 * @description The data store contents will be once and used at most a few times
 */

export const BUFFER_STREAM : number = 2;

/**
 * @constant
 * @name BUFFER_GPUDYNAMIC
 * @type {number}
 * @description The data store contents will be modified repeatedly on the GPU and used many times. 
 *              Optimal for transform feedback usage (WebGL2 only).
 */

export const BUFFER_GPUDYNAMIC : number = 3;