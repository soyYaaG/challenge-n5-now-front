export interface IPermissionTypes {
    id: number;
    descripcion: string
}

export interface IPermission {
    nombreEmpleado: string;
    apellidoEmpleado: string;
}

export interface ICreatePermission extends IPermission {
    tipoPermiso: number;
}

export interface IUpdatePermission extends ICreatePermission {
    id: number;
}

export interface IViewPermission extends IPermission {
    id: number;
    fechaPermiso: Date;
    tipoPermisos: IPermissionTypes;
}