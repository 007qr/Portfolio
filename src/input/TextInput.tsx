import { Accessor, Component, JSX, Setter, splitProps } from "solid-js";

// prettier-ignore
type TextInput = Pick<JSX.HTMLAttributes<HTMLInputElement>, "onFocus"|"onfocus"|"onclick"|"onClick"|"class"|"classList"|"onInput"> & {value: Accessor<string>, setValue: Setter<string>}

const TextInput: Component<TextInput> = (props) => {
    const [value, others] = splitProps(props, ["value", "setValue"]);
    return (
        <input
            type="text"
            {...others}
            value={value.value()}
            onInput={(e) => {
                value.setValue(e.currentTarget.value);
            }}
        />
    );
};

export { TextInput };
