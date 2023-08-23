"use client";

import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useViewHook } from "./view.hook";
import { Spinner } from "@/commons/components";
import Link from "next/link";

const ViewPermission = () => {
    const viewHook = useViewHook();

    return (
        <>
            {viewHook.loading && <Spinner />}

            <Typography gutterBottom variant="h5" component="div">
                ¡Ver permisos!
            </Typography>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre empleado</TableCell>
                            <TableCell>Apellido empleado</TableCell>
                            <TableCell>Tipo de permiso</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {viewHook.permission?.map(item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.nombreEmpleado}</TableCell>
                                <TableCell>{item.apellidoEmpleado}</TableCell>
                                <TableCell>{item.tipoPermisos.descripcion}</TableCell>
                                <TableCell>
                                    <Button
                                        component={Link}
                                        href={`/edit/${item.id}/${item.nombreEmpleado}/${item.apellidoEmpleado}`}
                                        color="info"
                                        startIcon={<EditNoteIcon />}
                                    >
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export { ViewPermission }