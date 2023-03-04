import React, {FC, PropsWithChildren, SelectHTMLAttributes, useMemo} from "react";
import {classNames} from "06_shared/lib/classNames";
import classes from "./Select.module.scss";

export enum SelectTheme {
    default = "default",
    clear = 'clear',
}

export interface SelectOptionsType {
    value: number | string;
    label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    theme?: SelectTheme;
    defaultName?: string;
    options?: SelectOptionsType[];
}

const Select: FC<PropsWithChildren<SelectProps>> = (props) => {
    const {
        options,
        theme = SelectTheme.default,
        defaultName,
        defaultValue,
        className,
        children,
        ...other
    } = props;

    const selectOptions = useMemo(() => {
        if (options?.length) {
            return options.map(item => (<option key={item.value} value={item.value}>{item.label}</option>));
        } else {
            return (children);
        }
    }, [options, children]);

    return (
        <select
            defaultValue={defaultValue || ""}
            {...other}
            className={classNames(classes.Select, {}, [className, classes[theme]])}
        >
            {
                (defaultName) && <option disabled value={""}>{defaultName}</option>
            }
            {selectOptions}
        </select>
    );
};

export default Select;