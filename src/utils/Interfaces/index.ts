import { ButtonHTMLAttributes, FormEvent } from "react";
import { TextInputProps, TouchableOpacityProps } from "react-native";

export interface ITextInput extends TextInputProps {
    placeholder?: string;
    secureTextEntry?: boolean;
    onChangeText?: ((text: string) => void);
}

export interface TouchableProps extends ButtonHTMLAttributes<TouchableOpacityProps> {
    color?: string;
    onPress?: ((event: FormEvent<HTMLFormElement>) => void) | Promise<void>;
    tvParallaxProperties?: {};
    width?: number;
    height?: number;
}