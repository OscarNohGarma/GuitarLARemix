import { useLoaderData, Outlet } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import ListadoGuitarras from "~/components/listado-guitarras";

export function meta() {
  return [
    {
      title: "GuitarLA - Tienda de Guitarras",
      description: "GuitarLA - Nuestra colección de guitarras",
    },
  ];
}

export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

export default function Tienda() {
  const guitarras = useLoaderData();

  return <ListadoGuitarras guitarras={guitarras} />;
}
