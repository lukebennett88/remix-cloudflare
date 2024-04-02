import { Keystatic } from '#app/keystatic.client';

export default function Page() {
	if (typeof window === 'undefined' || typeof document === 'undefined') {
		return null;
	}
	return <Keystatic />;
}
