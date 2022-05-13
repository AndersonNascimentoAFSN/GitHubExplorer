import { InputHTMLAttributes, DetailedHTMLProps, ChangeEvent } from "react";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  // handle: (ChangeEvent<HTMLInputElement>) => void,
}
export default function Input(props: InputProps) {
  return (
    <input
      id={props?.id}
      name={props.name}
      onChange={(event) => props.handle(event.target.value)}
      placeholder={props?.placeholder}
    />
  );
}
