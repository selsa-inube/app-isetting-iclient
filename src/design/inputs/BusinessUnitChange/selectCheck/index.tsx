import { useEffect } from "react";
import { ISelectCheck } from "@ptypes/design/ISelectCheck";
import { SelectCheckUI } from "./interface";

const SelectCheck = (props: ISelectCheck) => {
  const {
    id,
    name,
    options,
    value,
    disabled = false,
    fullwidth = false,
    label,
    message,
    invalid,
    selectRef,
    displayList,
    focused,
    setFocused,
    onBlur,
    onChange,
    onChangeCheck,
    onClick,
    onFocus,
    setDisplayList,
    placeholder,
    readonly = false,
    required = false,
    size = "wide",
    status = "pending",
  } = props;

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setDisplayList(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleFocus = (e: FocusEvent) => {
    setFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e: FocusEvent) => {
    setFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readonly) return;
    if (onClick) {
      onClick(e);
    }
    setDisplayList(!displayList);
  };

  const labelOrRequired = label ?? required;

  const isListVisible = displayList && !disabled;

  return (
    <SelectCheckUI
      displayList={displayList}
      id={id}
      name={name}
      options={options}
      value={value}
      disabled={disabled}
      focused={focused}
      fullwidth={fullwidth}
      label={label}
      message={message}
      onBlur={handleBlur}
      onChange={onChange}
      onChangeCheck={onChangeCheck}
      onClick={handleClick}
      onFocus={handleFocus}
      placeholder={placeholder}
      readonly={readonly}
      ref={selectRef}
      required={required}
      size={size}
      status={status}
      invalid={invalid}
      labelOrRequired={labelOrRequired}
      isListVisible={isListVisible}
    />
  );
};

export { SelectCheck };
export type { ISelectCheck };
