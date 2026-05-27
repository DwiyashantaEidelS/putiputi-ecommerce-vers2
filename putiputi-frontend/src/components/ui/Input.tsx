type InputProps = {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;
};

const Input = ({
    type = "text",
    placeholder,
    value,
    onChange,
}: InputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="
                w-full
                border
                border-gray-300
                rounded-lg
                px-4
                py-2
                focus:outline-none
                focus:ring-2
                focus:ring-pink-500
            "
        />
    );
};

export default Input;