import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGlobalState } from "../../../../context/GlobalState";
import "./ExpenseForm.css";
import CustomInput from "./components/CustomInput";
import { schema, FormValues } from "./models/form.model";

export const ExpenseForm = () => {
  const { addTransaction } = useGlobalState();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    addTransaction({
      id: window.crypto.getRandomValues(new Uint16Array(1))[0],
      // date: new Date().toISOString(), // Pasarle la fecha actual y guardarla.
      description: data.description,
      amount: +data.amount, // Modifico el string para que sea un numero
    });
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        name="description"
        control={control}
        label="Descripcion"
        type="text"
        error={errors.description}
      />
      {/* Buscar porque no puedo dejar el TYPE del CustomInput en number, solucion provisional, dejarlo como String */}
      <CustomInput
        name="amount"
        control={control}
        label="Monto"
        type="number"
        error={errors.amount}
      />
      <button type="submit" className="add-button">
        ✅
      </button>
    </form>
  );
};
