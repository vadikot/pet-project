import React, {ChangeEvent, FC, PropsWithChildren, useMemo, useState} from "react";
import i18next from "i18next";
import {Languages, LanguageTypes} from "../lib/types";
import {Select} from "shared/ui/Select";

interface LanguageSwitcherProps {
    className?: string;
}

export const LOCAL_STORAGE_LANGUAGE_KEY = 'i18nextLng';

const defaultLanguage = window.localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) as LanguageTypes || LanguageTypes.en;

const LanguageSwitcher: FC<PropsWithChildren<LanguageSwitcherProps>> = () => {
    type LanguageEnumType = keyof typeof LanguageTypes;

    const [language, setLanguage] = useState<LanguageEnumType>(defaultLanguage);

    const toggleLanguageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target?.value) {
            i18next.changeLanguage(e.target.value)
                .then(() => {
                    setLanguage(LanguageTypes[e.target.value as LanguageEnumType]);
                });
        }
    };

    const languagesOptions = useMemo(() => {
        return Object.keys(Languages)?.map(key => (
            <option key={key} value={key}>{Languages[key as LanguageEnumType]}</option>
        ));
    }, [language]);

    return (
        <Select defaultValue={language} onChange={toggleLanguageHandler}>{languagesOptions}</Select>
    );
};

export default LanguageSwitcher;