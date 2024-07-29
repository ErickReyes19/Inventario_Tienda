
"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	FormLabel,
	FormDescription,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import {
	LoginSchema,
	type TsSchemaFormLogin,
} from "@/app/(public)/components/shemas";

export function CardLogin() {
	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
	});

	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	async function onSubmitForm(data: TsSchemaFormLogin) {
		startTransition(async () => {
			// const response = await login(data);
			// if (response === "Usuario o contraseña invalidos") {
			// 	router.push("/");
			// } else {
			// 	router.push("/dashboard");
			// }
		});
	}

	return (
		<div className="flex items-center justify-center min-h-screen bg-background">
			<div className="w-full max-w-md p-6 space-y-6 bg-card rounded-lg shadow-lg">
				<div className="flex justify-center items-center">
					<Image
						className="w-auto"
						alt="Logo principal de Credilee"
						height="200"
						src="/Logo-LadyLee.png"
						width="200"
					/>
				</div>
				<Form {...form}>
					<form
						className="space-y-4"
						onSubmit={form.handleSubmit(onSubmitForm)}
					>
						<div>
							<FormField
								control={form.control}
								name="usuario"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Usuario</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Contraseña</FormLabel>
										<FormControl>
											<Input type="password" disabled={isPending} {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<Button type="submit" className="w-full bg-rosa">
							Ingresar
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
}
