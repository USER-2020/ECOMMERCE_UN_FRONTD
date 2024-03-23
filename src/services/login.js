import axios from 'axios';
import { baseUrl } from '../defaultvalues';

export const login = (body) => 
axios.post(`${baseUrl}/api/auth`, body);