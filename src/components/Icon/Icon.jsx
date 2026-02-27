import React, {forwardRef, memo} from "react";

const ICONS = {
    check : (props) => (
        <svg viewBox="0 0 24 24" fill="none " {...props} >
            <path d="M17.9395 6.43946C18.5252 5.85368 19.4748 5.85368 20.0605 6.43946C20.6463 7.02525 20.6463 7.97477 20.0605 8.56056L11.0605 17.5606C10.5201 18.101 9.65934 18.1484 9.0625 17.6709L4.0625 13.6709C3.41603 13.1533 3.31171 12.2092 3.8291 11.5625C4.3467 10.916 5.29077 10.8117 5.9375 11.3291L9.88867 14.4893L17.9395 6.43946Z" fill="currentColor"/>
        </svg>
    ),
    close : (props) => (
        <svg viewBox="0 0 18 18" fill="none" {...props}>
            <path d="M15.3661 0.366117C15.8543 -0.122039 16.6455 -0.122039 17.1337 0.366117C17.6218 0.854272 17.6218 1.64554 17.1337 2.13369L10.5175 8.74991L17.1337 15.3661C17.6218 15.8543 17.6218 16.6455 17.1337 17.1337C16.6455 17.6218 15.8543 17.6218 15.3661 17.1337L8.74991 10.5175L2.13369 17.1337C1.64554 17.6218 0.854272 17.6218 0.366117 17.1337C-0.122039 16.6455 -0.122039 15.8543 0.366117 15.3661L6.98233 8.74991L0.366117 2.13369C-0.122039 1.64554 -0.122039 0.854272 0.366117 0.366117C0.854272 -0.122039 1.64554 -0.122039 2.13369 0.366117L8.74991 6.98233L15.3661 0.366117Z" fill="currentColor"/>
        </svg>
    )
}

const Icon = memo(
    forwardRef (function Icon(
        {
            name,
            size="20",
            className,
            color,
            title,
            "aria-label" : ariaLabel,
            decorative = false,
            ...reset
        },
        ref
    ){
        const Svg = ICONS[name];

        if (!Svg) return null;

        const a11yProps = decorative ? {"aria-hidden" : true} : {role:"img", "aria-label":ariaLabel ?? title ?? name};

        return (
            <span
                ref={ref}
                className={className}
                style={{
                    display : "inline-flex",
                    width : size,
                    height : size,
                    color : color,
                    lineHeight : 0
                }}
                {...a11yProps}
            >
                {
                    Svg({
                        width : size,
                        height : size,
                        ...reset,
                    })
                }
            </span>
        )
    })
);

export default Icon;
