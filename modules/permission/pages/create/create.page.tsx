"use client";

import { Alert, Box, Button, FormControl, FormHelperText, MenuItem, Select, TextField, Typography } from "@mui/material";
import SecurityIcon from '@mui/icons-material/Security';
import { useCreateHook } from "./create.hook";
import { Spinner } from "@/commons/components";

const CreatePermission = () => {
    const createHook = useCreateHook();

    return (
        <>
            {createHook.loading && <Spinner />}

            <Typography gutterBottom variant="h5" component="div">
                ¡Crear permiso!
            </Typography>

            {createHook.permission &&
                <Alert sx={{ m: 1 }}>
                    Se crea el empleado(a) {createHook.permission.nombreEmpleado} {createHook.permission.apellidoEmpleado} correctamente.
                </Alert>
            }

            <Box
                component="form"
                autoComplete="off"
                onSubmit={createHook.createFormik.handleSubmit}
            >
                <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                        helperText="Por favor ingrese el nombre del empleado"
                        label="Nombre del empleado"
                        name="nombreEmpleado"
                        onChange={createHook.createFormik.handleChange}
                        type="text"
                        required={true}
                        value={createHook.createFormik.values.nombreEmpleado}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                        helperText="Por favor ingrese el apellido del empleado"
                        label="Apellido del empleado"
                        name="apellidoEmpleado"
                        onChange={createHook.createFormik.handleChange}
                        type="text"
                        required={true}
                        value={createHook.createFormik.values.apellidoEmpleado}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <Select
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={createHook.createFormik.handleChange}
                        name="tipoPermiso"
                        required={true}
                        value={createHook.createFormik.values.tipoPermiso}
                    >
                        <MenuItem value={0}>
                            <em>Selecionar tipo de permiso</em>
                        </MenuItem>
                        {createHook.permissionTypes?.map(item => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.descripcion}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Seleccionar tipo de permiso</FormHelperText>
                </FormControl>

                <Button
                    color="success"
                    type="submit"
                    sx={{ m: 1 }}
                    variant="contained"
                    startIcon={<SecurityIcon />}
                    fullWidth
                >
                    Crear
                </Button>
            </Box>
        </>
    );
}

export { CreatePermission }