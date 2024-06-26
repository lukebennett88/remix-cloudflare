import * as React from 'react';

const NonceContext = React.createContext<string>('');

export const NonceProvider = NonceContext.Provider;

export function useNonce() {
	return React.useContext(NonceContext);
}
