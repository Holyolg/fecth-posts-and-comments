"use client";

import { useRouter } from "next/navigation";
import { use, useState } from "react";
import style from './login.module.scss'
import { $auth, $error, $password, $user, $username } from "@/stores/user";
import { useStore } from "@nanostores/react";
import { computed,task  } from "nanostores";



const LoginForm = () => {
const router = useRouter();

	const username = useStore($username)
	const password = useStore($password)

	console.log(username)
	console.log(password)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			});

			if (!response.ok) {
				throw new Error("Invalid credentials");
			}

			const data = await response.json();
			$auth.set(true)

			router.push("/");
		} catch (error) {
			$error.set("Неправильное имя пользователя или пароль");
			console.error("Ошибка при входе:", error);
		}
	};
	

	return (
		<main className={style.main}>
			
		<form className={style.login} onSubmit={handleSubmit}>
		<div className={style.input_wrapper}>
			<label htmlFor="username">Имя пользователя:</label>
				<input
					type="text"
					id="username"
					value={useStore($username)}
					onChange={e => $username.set(e.target.value)}
					required
				/>
</div>
<div className={style.input_wrapper}>

				<label htmlFor="password">Пароль:</label>
				<input
					type="password"
					id="password"
					value={useStore($password)}
					onChange={e => $password.set(e.target.value)}
					required
				/>
				</div>

			<button type="submit">Войти</button>
			{useStore($error) && <p>{$error.get()}</p>}
		</form>
		<p>Логин user1, пароль 123</p>

		</main>
	);
};

export default LoginForm;
