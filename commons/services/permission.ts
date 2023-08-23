import axios from "axios";
import { environment } from "@/environments";
import { urlBuilder } from "../utils/url.builder";
import { ICreatePermission, IUpdatePermission, IViewPermission } from "../entities/permission.entity";

export const create = async (permission: ICreatePermission) => {
    let url: string = urlBuilder.services(
        environment.api.services.permission
    );

    return await axios.post<IViewPermission>(url, permission);
}

export const getAllPermission = async () => {
    let url: string = urlBuilder.services(
        environment.api.services.permission
    );

    return await axios.get<IViewPermission[]>(url);
}

export const update = async (id: number, permission: IUpdatePermission) => {
    let url: string = urlBuilder.services(
        environment.api.services.permission
    );

    url = `${url}/${id}`

    return await axios.put<IViewPermission>(url, permission);
}