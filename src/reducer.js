import CartItem from "./CartItem";

function reducer(state, action) {
	console.log(action);
	switch (action.type) {
		case "load":
			return {
				...state,
				items: action.payload,
			};
		case "increase":
			let tempItem = state.items.map((item) => {
				if (item.id === action.payload) {
					return { ...item, amount: item.amount + 1 };
				}
				return item;
			});
			return { ...state, items: tempItem };
		case "decrease":
			let tempItem2 = state.items
				.map((item) => {
					if (item.id === action.payload) {
						return { ...item, amount: item.amount - 1 };
					}
					return item;
				})
				.filter((item) => item.amount !== 0);
			return { ...state, items: tempItem2 };
		case "removeItem":
			let filteredItem = state.items.filter((item) => {
				return item.id !== action.payload;
			});
			return { ...state, items: filteredItem };
		case "clearItem":
			return { ...state, items: [] };
		default:
			throw new Error();
	}
}

export default reducer;
