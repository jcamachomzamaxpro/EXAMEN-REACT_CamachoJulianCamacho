import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  Divider,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";

export const Tarjeta = () => {
  const [datosAPI, setDatosAPI] = useState([]);

  useEffect(() => {
    // Hacer la solicitud a la API en el useEffect
    axios
      .get("http://localhost:5010/producto", {
        headers: {
          "Accept-version": "1.0.0",
        },
      })
      .then((response) => {
        // Actualizar el estado con los datos de la API
        setDatosAPI(response.data.data);
        console.log(response.data);
    })
      .catch((error) => {
        console.error("Error al obtener los datos de la API:", error);
      });
  }, []); // El array de dependencias está vacío, lo que indica que este efecto se ejecutará solo una vez al montar el componente

  return (
    <div class="my-4 d-flex flex-wrap justify-content-center align-items-center gap-5">
      {/* Mostrar datos en la lista */}
      {datosAPI.map((data, i) => {
        return (
          <div class="gap-4">
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={data.imagen}
                  alt={data.imagen}
                  borderRadius="lg"
                  boxSize="300px"
                  alignSelf="center"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{data.nombre}</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    ${data.precio}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Añadir al Carrito
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
