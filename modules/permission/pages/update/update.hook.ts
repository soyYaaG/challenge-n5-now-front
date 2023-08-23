"use client";

import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { IPermissionTypes, IUpdatePermission, IViewPermission } from "@/commons/entities/";
import { getPermissionTypes, update } from "@/commons/services";

const useUpdateHook = ({ id, nombre, apellido } : { id: string, nombre: string, apellido: string }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [permission, setPermission] = useState<IViewPermission | null>(null);
    const [permissionTypes, setPermissionTypes] = useState<IPermissionTypes[] | null>(null);

    useEffect(() => {
        let isMounted = true;
		setLoading(true);

        const fetchData = async () => {
			try {
				const { data } : { data: IPermissionTypes[] } = await getPermissionTypes();

				if(isMounted) {
					setPermissionTypes(data);
				}
			} finally {
				setLoading(false);
			}
		}

		fetchData();
		return () => {
			isMounted = false;
		};
    }, []);

    const initialValues: IUpdatePermission = {
        apellidoEmpleado: apellido,
        id: Number(id),
        nombreEmpleado: nombre,
        tipoPermiso: 0,
    };

    const validateSchema = Yup.object<IUpdatePermission>().shape({
        apellidoEmpleado: Yup.string().required("Por favor ingrese el apellido del empleado."),
        nombreEmpleado: Yup.string().required("Por favor ingrese el nombre del empleado."),
        tipoPermiso: Yup.number().required("Seleccione un permiso.").min(1, "Por favor seleccione el tipo de permiso.")
    });

    const createFormik = useFormik({
        initialValues: initialValues,
        validationSchema: validateSchema,
        onSubmit: async (values: IUpdatePermission, action) => {
            setLoading(true);

            try {
				const { data }: { data : IViewPermission } = await update(Number(id), values);
				setPermission(data);
			} finally {
				setLoading(false);
			}
        }
    });

    return {
        createFormik,
        loading,
        permission,
        permissionTypes
    }
}

export { useUpdateHook };