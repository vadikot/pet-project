type modsType = Record<string, boolean | string>;
// export interface modsType {
//     [key: string]: boolean,
// }

export const classNames = (mainClass: string, mods?: modsType, additional?: string[]): string => {
    return [
        mainClass,
        ...Object.keys(mods).filter(key => mods[key] === true ? key : null),
        ...additional
    ].join(' ');
};