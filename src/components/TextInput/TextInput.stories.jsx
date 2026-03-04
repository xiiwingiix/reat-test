import React , {useEffect, useState} from "react";
import TextInput from "./TextInput";

export default {
    title : 'components/TextInput',
    component : TextInput,
    args :{
        placeholder :"placeholder",
        size : "md",
        block : false,
        error : false, 
        disabled : false,
        readOnly : false,
        allowClear : true,
    },
    argTypes : {
        size : {
            control :{type : "radio"},
            options : ["sm", "md", "lg"],
        },
        block : {control :"boolean"},
        error : {control : "boolean"},
        disabled : {control : "boolean"},
        readOnly : {control : "boolean"},
        allowClear :{control : "boolean"},
        placeholder : {control : "text"},

        onChange : {action : "onChange"},
        onClear : {action : "onClear"},

        value : {table : {disable : true}}
    },
}

function StatusfulTextInput (args) {
    const [value, setValue] = useState("");

    useEffect(() => {
        setValue("");
    }, [
        args.size, 
        args.block, 
        args.error, 
        args.disabled,
        args.readOnly,
        args.allowClear
    ]);

    return (
        <div style={{ width: args.block ? "100%" : 320}}>
            <TextInput
                {...args}
                value={value}
                onChange = {(e) => {
                    setValue(e.target.value);
                    args.onChange?.(e)
                }}
                onClear = {()=> {
                    setValue("");
                    args.onClear?.();
                }}
            />
            <div style={{marginTop : 8, fontSize : 12, opacity:0.7}}>
                value : {JSON.stringify(value)}
            </div>
        </div>
    )
}

// 기본
export const Default ={
    render :(args) => <StatusfulTextInput {...args}/>,
}

// 에러 상태
export const Disabled = {
    args : {error : true, placeholder :"에러 상태"},
    render : (args) => <StatusfulTextInput {...args}/>
}

// ReadOnly
export const ReadOnly ={
    args : {readOnly : true, placeholder : "ReadOnly된 상태"},
    render : (args) => <StatusfulTextInput {...args}/>
}

// clear 버튼 끈 상태
export const NoClear = {
    args : {allowClear: false, placeholder : "삭제 버튼이 비활성화된 상태"},
    render : (args) => <StatusfulTextInput {...args}/>
}

// block
export const Block = {
    args : {block : true, placeholder : "full width"},
    render : (args) => <StatusfulTextInput {...args}/>
}

export const Sizes = {
    argTypes : {
        size : { table : {disable : true}}
    },
    render : (args) => (
        <div style={{display:"grid", gap : 12, width : 360}}>
            <TextInput {...args} size="sm" placeholder="size : sm"/>
            <TextInput {...args} size="md" placeholder="size : md"/>
            <TextInput {...args} size="lg" placeholder="size : lg"/>
        </div>
    )
}
