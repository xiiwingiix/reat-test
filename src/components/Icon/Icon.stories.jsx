import React from 'react';
import Icon from './Icon';

export default {
    title : 'Components/Icon',
    component : Icon, 
    argTypes : {
        name : {
            control : 'select',
            options : ['check', 'close']
        },
        size : {
            control : {
                type : 'number',
                min : 8, 
                max : 96, 
                step : 1
            }
        },
        color : {control : 'color'},
        className : {control : 'text'},
        title : { control : 'text'},
        decorative : {control : 'boolean'},
        "aria-label" : {control : 'text'},
        onClick : {action : "clicked"},
    },
    args : {
        name : "check",
        size : 20,
        color : undefined,
        className : "",
        title : "",
        decorative : false,
        "aria-label" : "체크"
    },
}

export const Playground = (args) => (
    <div             
        style = {{
            display : "flex", 
            alignItems : "center", 
            flexWrap : "wrap", 
            gap: 12
        }}>
        <div>
            <Icon {...args} />
            <span 
                style = {{
                    fontSize : 14, 
                    color: "#555"
                }}
            >
                name : <b>{args.name}</b>, 
                size : <b>{args.size}</b>
            </span>
        </div>
    </div>
)

export const AllIcons = (args) => {
    const names = ["check", "close"];

    return (
        <div 
            style = {{ 
                display :"flex", 
                flexWrap : "wrap", 
                gap : 16
            }}
        >
            {names.map((name) => {
                return (
                <div
                    key = {name}
                    style ={{
                        width:120, 
                        padding:12, 
                        border: "1px solid #eee",
                        borderRadius : 8,
                        display : "flex",
                        flexDirection : "column",
                        gap : 8,
                        alignItems : "center",
                    }}
                >
                    <Icon 
                        {...args} 
                        name = {name}
                        title = {name}
                        aria-label = {name}
                    />
                    <div 
                        style={{ 
                            fontSize : 12, 
                            color :"#666"
                        }}
                    >{name}</div>
                </div>
                )
            })}
        </div>
    )
}

AllIcons.parameters = {
    options : {
        showPanel : false
    }
}