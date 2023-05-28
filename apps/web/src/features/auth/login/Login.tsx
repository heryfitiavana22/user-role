"use client";
import { Input, Spacer, Checkbox, Button } from "@nextui-org/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useLogin } from "./hooks";

export type LoginValue = {
    email: string;
    password: string;
};

export function Login({}: LoginProps) {
    const { register, handleSubmit } = useForm<LoginValue>();
    const { onSubmit } = useLogin();

    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="email"
                    label="Email :"
                    placeholder="adresse email"
                    css={{ width: "100%" }}
                    {...register("email")}
                    required
                />
                <Spacer y={1} />
                <Input.Password
                    label="Mot de passe :"
                    placeholder="mot de passe"
                    css={{ width: "100%" }}
                    {...register("password")}
                    required
                />
                <Spacer y={1} />
                <div className="flex justify-between">
                    <Checkbox color="secondary" size="xs">
                        Rester connecté
                    </Checkbox>
                    <Link
                        href={"/forgotpassword"}
                        className="text-sm text-violet-500"
                    >
                        Mot de passe oublié ?
                    </Link>
                </div>
                <Spacer y={1} />
                <Button
                    type="submit"
                    color="secondary"
                    auto
                    className="w-full"
                    css={{ width: "100%" }}
                >
                    Se connecter
                </Button>
            </form>
        </div>
    );
}

type LoginProps = {};
