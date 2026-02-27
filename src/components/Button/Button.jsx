import styles from './Button.module.css';

export default function Button({
    children,
    color,
    size="md",
    variant="box",
    disabled=false,
    block=false,
    leftIcon,
    rightIcon,
    onClick,

    type="button"
}) {
    const className= [
        styles.base,
        styles[color],
        styles[size],
        block ? styles.block : '',
        styles[variant],
        disabled ? styles.disabled : ''
    ]
    .filter(Boolean)
    .join(" ");

    return (
        <button 
            type={type}
            className={className}
            disabled={disabled}
            onClick={onClick}
        >
            {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
            {children}
            {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
        </button>
    )
}
