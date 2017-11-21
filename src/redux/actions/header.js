/*action*/

export const CHANGE = "header/CHANGE";
export const FOCUS = "header/FOCUS";

export function change() {
    return {type: CHANGE}
}
export function focus() {
    return {type: FOCUS}
}
