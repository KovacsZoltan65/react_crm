import { Langes } from "../constants/enums/langes";
import { Sexes } from "../constants/enums/sexes";

const initialState = {
    id: typeof Number,
    firstName: typeof String,
    lastName: typeof String,
    imgUrl: typeof String,
    userName: typeof String,
    email: {
        name: typeof String,
        verified: typeof Boolean
    },
    phone: {
        number: typeof Number,
        verified: typeof Boolean
    },
    sex: typeof Sexes,
    birthday: typeof String,
    lang: typeof Langes,
    country: typeof String,
    city: typeof String,
    address1: typeof String,
    address2: typeof String,
    zipcode: typeof Number,
    website: typeof String,
    socials: {
        twitter: typeof String,
        facebook: typeof String,
        linkedin: typeof String,
    }
};