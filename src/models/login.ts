import { ChangeEvent } from "react";

export interface handleLoginChange{
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface unsernameInputProps extends handleLoginChange{
    username: string;
}

export interface passwordInputProps extends handleLoginChange{
    password: string;
}