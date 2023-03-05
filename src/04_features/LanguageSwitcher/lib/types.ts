export enum LanguageTypes {
    en = 'en',
    pl = 'pl',
    ru = 'ru',
}

export const Languages: Record<LanguageTypes, string> = {
    [LanguageTypes.en]: 'English',
    [LanguageTypes.pl]: 'Polish',
    [LanguageTypes.ru]: 'Русский',
};
