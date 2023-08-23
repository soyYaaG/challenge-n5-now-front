import axios from "axios";
import { toast } from "sonner";

export const AxiosInterceptor = () => {
	axios.interceptors.response.use(
		(response: any) => {
			return response;
		},
		(error) => {
            toast.error("Ha ocurrido un error, ¡por favor intenta nuevamente!");
			return Promise.reject(error);
		}
	);
};
