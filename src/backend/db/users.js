import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
	{
		_id: uuid(),
		firstName: "Adarsh",
		lastName: "Balika",
		email: "adarshbalika@gmail.com",
		password: "adarshbalika",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: "Admin",
		lastName: "Sample",
		email: "sample@gmail.com",
		password: "12345",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
