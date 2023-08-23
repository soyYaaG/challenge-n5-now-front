import { UpdatePermission } from "@/modules/permission";

export default function Edit({ params } : { params: { slug: string[] }}) {
	return (
        <>
            <UpdatePermission
                id={params.slug[0]}
                nombre={decodeURIComponent(params.slug[1])}
                apellido={decodeURIComponent(params.slug[2])}
            />
        </>
	)
}