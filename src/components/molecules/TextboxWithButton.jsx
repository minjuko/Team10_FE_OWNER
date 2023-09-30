import { TextInput } from "../atoms/TextInput";
import { Button } from "../atoms/Button";

const TextboxWithButton = ({
  placeholder,
  type,
  value,
  onChange,
  buttontype,
  buttonlabel,
}) => {
  return (
    <div className="flex flex-row w-96">
      <TextInput
        placeholder={placeholder}
        type="withbutton"
        value={value}
        onChange={onChange}
      />
      <Button type="withTextInput" label={buttonlabel} />
    </div>
  );
};

export default TextboxWithButton;
