import React from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import {ErrorText} from "../style/style";

type ProfileForm = {
    firstname: string,
    secondname: string,
    lastname: string,
    sex: boolean,
    birth: Date,
    number: string,
    email: string
}

export default function Form() {
    const { register, handleSubmit,formState:{errors} } = useForm<ProfileForm>();
    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)));

    return (<form onSubmit={onSubmit}>
        <label>
            Имя:
            <input
                {...register('firstname',{
                    required:"Поле обязательно для заполнения"
                })} />
        </label>
        <div>
            {errors?.firstname && <ErrorText>{errors?.firstname?.message || "Error!"}</ErrorText>}
        </div>
        <label>
            Фамилия:
            <input
                {...register('secondname',{
                    required: "Поле обязательно для заполнения",
                })} />

        </label>
        <div>
            {errors?.secondname && <ErrorText>{errors?.secondname?.message || "Error!"}</ErrorText>}
        </div>
        <label>
            Номер телефона:
            <InputMask mask="+7\(999) 999-99-99" 
                {...register('number', {
                    required: "Поле обязательно для заполнения",
                })} />
        </label>
        <div>
            {errors?.number && <ErrorText>{errors?.number?.message || "Error!"}</ErrorText>}
        </div>
        <label>
            Email:
            <InputMask mask="aaaaaaaaaa@aaaa.aa"
                {...register('number', {
                    required: "Поле обязательно для заполнения",
                })} />
        </label>
        <div>
            {errors?.number && <ErrorText>{errors?.number?.message || "Error!"}</ErrorText>}
        </div>
        <input type="submit" />
    </form>)
}