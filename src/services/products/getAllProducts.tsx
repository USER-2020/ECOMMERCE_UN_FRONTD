import axios from "axios";
import { urlBase } from "../../defaultvalues";

export const getAllProducts = () =>
    axios.get(`$${urlBase}/products`);