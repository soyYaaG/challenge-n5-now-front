import axios from "axios";
import { environment } from "@/environments";
import { urlBuilder } from "../utils/url.builder";
import { IPermissionTypes } from "../entities/permission.entity";

export const getPermissionTypes = async () => {
    let url: string = urlBuilder.services(
        environment.api.services.permissionTypes
    );

    return await axios.get<IPermissionTypes[]>(url);
}