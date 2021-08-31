import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const defaultState = {
	items: [],
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, defaultState);

	const getCart = async () => {
		const response = await fetch(url);
		const products = await response.json();
		dispatch({ type: "load", payload: products });
	};

	useEffect(() => {
		getCart();
	}, []);

	return (
		<AppContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
