"use client";

import { IViewPermission } from "@/commons/entities";
import { getAllPermission } from "@/commons/services";
import { useEffect, useState } from "react";

const useViewHook = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [permission, setPermission] = useState<IViewPermission[] | null>(null);

    useEffect(() => {
        let isMounted = true;
		setLoading(true);

        const fetchData = async () => {
			try {
				const { data } : { data: IViewPermission[] } = await getAllPermission();

				if(isMounted) {
					setPermission(data);
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

    return {
        loading,
        permission
    }
}

export { useViewHook };