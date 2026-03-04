import React, { forwardRef, useRef, memo } from "react";
import styles from "./TextInput.module.css";
import Icon from '../Icon/Icon.jsx';

const TextInput = forwardRef (
    ({
        value, 
        onChange,
        onClear,
        placeholder,
        disabled = false,
        readOnly = false,
        error = false,
        size = "md",
        block = false,
        allowClear = true,
        ...rest
    }, ref )=> {
        const internalRef = useRef(null);
        const inputRef = ref || internalRef;
        
        const handleClear = () => {
            if (onClear) {
                onClear();
            } else {
                onChange?.({target : {value:""} });
            }
            inputRef.current?.focus();
        };

        return (
            <div 
                className={`
                    ${styles.wrapper} 
                    ${block ? styles.block : ""}
                ]`}
            >
                <input
                    ref={inputRef}
                    type="text"
                    value={value}
                    onChange = {onChange}
                    placeholder={placeholder}
                    disabled = {disabled}
                    readOnly = {readOnly}
                    className={`
                        ${styles.input}
                        ${styles[size]}
                        ${error ? styles.error : ""}
                    `}
                    {...rest}
                />
                {allowClear && value && !disabled && !readOnly && (
                    <button 
                        type="button"
                        onClick={handleClear}
                        className={styles.clearButton}
                    >
                        <Icon name="close"/>
                    </button>
                )}
            </div>
        )
    }
)

export default memo(TextInput);