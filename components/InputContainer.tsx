import React from "react";
import { Input } from "./ui/input";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { Textarea } from "./ui/textarea";
type Props = {
  id: string;
  type: string;
  className: string;
  value: string;
  register: UseFormRegister<FieldValues>;
  children?: React.ReactNode;
};
const InputContainer: React.FC<Props> = ({
  id,
  type,
  className,
  value,
  register,
  children,
}) => {
  if (type === "text") {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 space-y-3 bg-purple-400/10 p-3 rounded-sm">
        {children}
        <div className="flex justify-center items-center space-x-4 ">
          <Textarea
            id={"therapyDescribe"}
            className={className}
            value={value}
            {...register("therapyDescribe")}
          />
        </div>
      </section>
    );
  }
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 space-y-3 bg-purple-400/10 p-3 rounded-sm">
      {children}
      <div className="flex justify-center items-center space-x-4 ">
        <Input
          type={type}
          id={id}
          className={className}
          value={value}
          {...register(id)}
          min={0}
          max={10}
        />
        <span className="block">{value}</span>
      </div>
    </section>
  );
};

export default InputContainer;
