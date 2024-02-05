import { InputText } from "./style";

export const Input = ({
  onBlur,
  placeholder,
  editable,
  fieldValue,
  onChangeText,
  keyType,
  maxLenght,
  minLenght,
  keyboardType
}) => {
  return(
    <InputText
      onBlur={onBlur}
      placeholder={placeholder}
      editable={editable}
      value={fieldValue}
      onChangeText={onChangeText}
      keyType={keyType}
      maxLenght={maxLenght}
      minLenght={minLenght}
      keyboardType={keyboardType}
    />
  );
};