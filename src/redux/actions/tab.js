/*action*/

export const HOME = "tab/HOME";
export const MARKET = "tab/MARKET";
export const DISCOVER = "tab/DISCOVER";
export const MINE = "tab/MINE";

export function home() {
    return {type: HOME}
}

export function market() {
    return {type: MARKET}
}

export function discover() {
    return {type: DISCOVER}
}

export function mine() {
    return {type: MINE}
}