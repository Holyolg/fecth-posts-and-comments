// components/LoginForm.tsx

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

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

			console.log(data);

			router.push("/");
		} catch (error) {
			setError("Неправильное имя пользователя или пароль");
			console.error("Ошибка при входе:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="username">Имя пользователя:</label>
				<input
					type="text"
					id="username"
					value={username}
					onChange={e => setUsername(e.target.value)}
					required
				/>
			</div>
			<div>
				<label htmlFor="password">Пароль:</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
			</div>
			<button type="submit">Войти</button>
			{error && <p>{error}</p>}
		</form>
	);
};

export default LoginForm;
