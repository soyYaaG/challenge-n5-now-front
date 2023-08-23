"use client";

import { Alert, Box, Button, FormControl, FormHelperText, MenuItem, Select, TextField, Typography } from "@mui/material";
import SecurityIcon from '@mui/icons-material/Security';
import { Spinner } from "@/commons/components";
import { useUpdateHook } from "./update.hook";

const UpdatePermission = ({ id, nombre, apellido } : { id: string, nombre: string, apellido: string }) => {
    const updateHook = useUpdateHook({ id, nombre, apellido });

    return (
        <>
            {updateHook.loading && <Spinner />}

            <Typography gutterBottom variant="h5" component="div">
                ¡Actualizar permiso!
            </Typography>

            {updateHook.permission &&
                <Alert sx={{ m: 1 }}>
                    Se actualiza el empleado(a) {updateHook.permission.nombreEmpleado} {updateHook.permission.apellidoEmpleado} correctamente.
                </Alert>
            }

            <Box
                component="form"
                autoComplete="off"
                onSubmit={updateHook.createFormik.handleSubmit}
            >
                <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                        helperText="Por favor ingrese el nombre del empleado"
                        label="Nombre del empleado"
                        name="nombreEmpleado"
                        onChange={updateHook.createFormik.handleChange}
                        type="text"
                        required={true}
                        value={updateHook.createFormik.values.nombreEmpleado}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                        helperText="Por favor ingrese el apellido del empleado"
                        label="Apellido del empleado"
                        name="apellidoEmpleado"
                        onChange={updateHook.createFormik.handleChange}
                        type="text"
                        required={true}
                        value={updateHook.createFormik.values.apellidoEmpleado}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <Select
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={updateHook.createFormik.handleChange}
                        name="tipoPermiso"
                        required={true}
                        value={updateHook.createFormik.values.tipoPermiso}
                    >
                        <MenuItem value={0}>
                            <em>Selecionar tipo de permiso</em>
                        </MenuItem>
                        {updateHook.permissionTypes?.map(item => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.descripcion}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Seleccionar tipo de permiso</FormHelperText>
                </FormControl>

                <Button
                    color="warning"
                    type="submit"
                    sx={{ m: 1 }}
                    variant="contained"
                    startIcon={<SecurityIcon />}
                    fullWidth
                >
                    Actualizar
                </Button>
            </Box>
        </>
    );
}

export { UpdatePermission }