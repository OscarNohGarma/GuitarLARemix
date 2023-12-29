import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return [
    {
      title: "GuitarLA - Sobre Nosotros",
      description: "Venta de guitarras, blog de música ",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}

export default function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            fermentum metus ultrices, tempus nibh at, tempor quam. Praesent
            commodo diam vitae lorem tincidunt volutpat. Praesent mi nisi,
            pulvinar non convallis id, feugiat id augue. In ut libero erat. Duis
            pretium, magna eu fringilla aliquet, ligula urna elementum sem, ac
            dictum erat magna eget lacus. Pellentesque luctus consequat mi, a
            convallis ex accumsan faucibus. Nullam a sem id leo elementum
            ultricies ornare nec mauris. Nulla facilisi. Ut ante neque, lacinia
            nec dictum ut, tristique vel erat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            fermentum metus ultrices, tempus nibh at, tempor quam. Praesent
            commodo diam vitae lorem tincidunt volutpat. Praesent mi nisi,
            pulvinar non convallis id, feugiat id augue. In ut libero erat. Duis
            pretium, magna eu fringilla aliquet, ligula urna elementum sem, ac
            dictum erat magna eget lacus. Pellentesque luctus consequat mi, a
            convallis ex accumsan faucibus. Nullam a sem id leo elementum
            ultricies ornare nec mauris. Nulla facilisi. Ut ante neque, lacinia
            nec dictum ut, tristique vel erat.
          </p>
        </div>
      </div>
    </main>
  );
}
