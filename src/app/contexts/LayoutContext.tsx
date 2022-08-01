import { createContext } from "react"

type LayoutContextProps = {
}

const LayoutContext = createContext<LayoutContextProps>({});

const LayoutProvider = ({ children }: any): JSX.Element => {
	return (
		<LayoutContext.Provider value={{}}>
			{children}
		</LayoutContext.Provider>
	)
};

export {
	LayoutContext,
	LayoutProvider
};
