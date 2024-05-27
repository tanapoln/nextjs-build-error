import { auth } from "@/server/auth";

export function withAuth(fn: Function) {
	return async () => {
		const sess = await auth();
		return fn(sess);
	};
}

export function withoutAuth(fn: Function) {
    // const _ = auth; //uncomment this line will fix the error
	return async () => {
		return fn();
	};
}
