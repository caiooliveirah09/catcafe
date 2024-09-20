"use client";

import CallIcon from "./assets/call.svg";
import VisitIcon from "./assets/visit.svg";
import Button from "./components/Button";
import Link from "next/link";
import routes from "@/routes";

const infos = [
  {
    icon: <CallIcon />,
    text: "liga pra gente",
    value: "34 9 9999-9999",
  },
  {
    icon: <VisitIcon />,
    text: "visita a gente",
    value: "Av.Landscape 3512",
  },
];
export default function Home() {
  return (
    <>
      <main className="flex-grow-1 row d-flex">
        <div className="col-12 col-xl-5 d-flex flex-column gap-2 px-4">
          <h2>1º CAT CAFÉ DE UBERLÂNDIA</h2>
          <div>
            <h1>Café que faz o coração!</h1>
            <h1 className="secondary-text-color">ronronar!</h1>
          </div>
          <p>
            Aqui, você pode saborear um café delicioso, explorar uma seleção de
            livros e, ao mesmo tempo, ajudar a cuidar dos nossos felinos,
            promovendo adoções e dando uma nova chance a esses gatinhos.
          </p>
          <p className="font-weight-600">
            Quem sabe, você não encontra um amigo especial para chamar de seu?
          </p>
          <Link href={routes.makeReservation}>
            <Button>Fazer uma reserva</Button>
          </Link>
          <div className="row max-w-sm contact mb-5 flex-grow-1 ">
            {infos.map((info, i) => {
              return (
                <div
                  key={i}
                  className="col d-flex flex-row justify-content-center  "
                >
                  <div className="m-2">{info.icon}</div>

                  <div className="d-flex flex-column">
                    <p className="font-weight-600 mb-0 p-0"> {info.text}</p>
                    <p className="font-weight-600 mb-0 p-0"> {info.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center col-12 col-xl-6 position-relative">
          <img src="/footer.png" alt="mulher segurando um gato" />
        </div>
      </main>
    </>
  );
}
