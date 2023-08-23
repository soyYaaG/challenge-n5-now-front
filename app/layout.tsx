"use client";

import { ThemeProvider } from "@emotion/react";
import { Button, ButtonGroup, Card, CardContent, CardMedia, CssBaseline, Grid } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Toaster } from "sonner";
import { dark } from "@/commons/themes/dark";
import { AxiosInterceptor } from "@/commons/utils/axios.interceptor";
import Link from "next/link";


AxiosInterceptor();
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es-co">
			<head>
				<title>Challenge FullStack: N5</title>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body>
				<main>
					<ThemeProvider theme={dark}>
						<CssBaseline />
						<Toaster richColors />

						<Grid 
							container 
							spacing={2}
							direction="column"
							justifyContent="space-between"
							alignItems="center"
						>
							<Grid item xs={12}>
								<ButtonGroup color="secondary" variant="text" aria-label="large button group">
									<Button component={Link} href="/create" startIcon={<AddCircleIcon />}>Crear Permiso</Button>
									<Button component={Link} href="/" startIcon={<VisibilityIcon />}>Ver Permiso</Button>
								</ButtonGroup>
							</Grid>

							<Grid item xs={12}>
								<Card sx={{ maxWidth: 700 }}>
									<CardMedia
										component="img"
										image="https://images.unsplash.com/photo-1515643395264-3f8c19a2dc77?fit=crop&w=1920&q=80"
										alt="Permission"
									/>

									<CardContent>
										{children}
									</CardContent>
								</Card>
							</Grid>
						</Grid>
					</ThemeProvider>
				</main>
			</body>
		</html>
	);
}
