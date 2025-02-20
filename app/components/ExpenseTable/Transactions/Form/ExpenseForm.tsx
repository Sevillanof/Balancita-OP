import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGlobalState } from "../../../../context/GlobalState";
import "./ExpenseForm.css";
import CustomInput from "./components/CustomInput";
import { schema, FormValues } from "./models/form.model";
import moment from "moment";

export const ExpenseForm = () => {
  const { addTransaction } = useGlobalState();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      description: "",
      category: "",
      amount: 0,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    addTransaction({
      id: window.crypto.getRandomValues(new Uint16Array(1))[0],
      date: moment().format("L"),
      category: data.category,
      description: data.description.toUpperCase(),
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
      <select className="select-form" {...register("category")}>
        <option value="General">General</option>
        <option value="Comida">Comida</option>
        <option value="Ocio">Ocio</option>
        <option value="Transporte">Transporte</option>
        {/* Agregar un option (Boton dentro del option?) para agregar una nueva categoria */}
      </select>
      
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
