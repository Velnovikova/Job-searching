import React from "react";
import { useForm } from "react-hook-form";
import { ErrorText,InputText,Label,ButtonSubmit } from "../style/style";


type ProfileForm = {
    firstname: string,
    secondname: string,
    lastname: string,
    sex: boolean,
    birthday: Date,
    number: string,
    email: string
}

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm<ProfileForm>();
    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)));

    return (
        <form onSubmit={onSubmit} style={{marginRight:'auto',width:'40%'}}>
            <Label>
                Фамилия:
                <InputText type={'text'}
                    {...register('lastname', {
                        required: "Поле обязательно для заполнения",
                    })} />
            </Label>
            <div>
                {errors?.lastname && <ErrorText>{errors?.lastname?.message || "Error!"}</ErrorText>}
            </div>
            <Label>
                Имя:
                <InputText
                    {...register('firstname', {
                        required: "Поле обязательно для заполнения"
                    })} />
            </Label>
            <div>
                {errors?.firstname && <ErrorText>{errors?.firstname?.message || "Error!"}</ErrorText>}
            </div>
            <Label>
                Отчество:
                <InputText type={'text'}
                    {...register('secondname', {
                        required: "Поле обязательно для заполнения",
                    })} />
            </Label>
            <div>
                {errors?.secondname && <ErrorText>{errors?.secondname?.message || "Error!"}</ErrorText>}
            </div>
            <div>
                <label>
                    Женский:
                    <input type="radio" value={'Женский'}
                        {...register('sex')} />
                </label>
                <label>
                    Мужской:
                    <input type="radio" value={'Мужской'} defaultChecked
                        {...register('sex')} />
                </label>
            </div>

            <Label>
                Дата рождения:
                <InputText type="date"
                    {...register('birthday', {
                        required: "Поле обязательно для заполнения",
                    })} />
            </Label>
            <div>
                {errors?.birthday && <ErrorText>{errors?.birthday?.message || "Error!"}</ErrorText>}
            </div>
            <Label>
                Номер телефона:
            <InputText type="tel"
                {...register('number', {
                    required: "Поле обязательно для заполнения",
                })} />
            </Label>
            
            <div>
                {errors?.number && <ErrorText>{errors?.number?.message || "Error!"}</ErrorText>}
            </div>
            <Label>
                Email:
            <InputText type="email" 
                {...register('email', {
                    required: "Поле обязательно для заполнения",
                })} />
            </Label>
            

            <div>
                {errors?.email && <ErrorText>{errors?.email?.message || "Error!"}</ErrorText>}
            </div>

            <ButtonSubmit type="submit">Отправить</ButtonSubmit>
        </form>

    )
}