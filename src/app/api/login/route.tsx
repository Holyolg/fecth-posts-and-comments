import { NextRequest, NextResponse } from "next/server";

const users = [
	{ username: "user1", password: "123" },
	{ username: "user2", password: "123" },
];

export async function POST(req: NextRequest) {
	const { username, password } = await req.json();

	const user = users.find(
		u => u.username === username && u.password === password
	);

	if (!user) {
		return NextResponse.json(
			{ message: "Invalid credentials" },
			{ status: 401 }
		);
	}

	return NextResponse.json({ user: user.username }, { status: 200 });
}
