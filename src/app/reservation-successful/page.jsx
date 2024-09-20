import Link from "next/link";
import Button from "../components/Button";
import routes from "@/routes";

export default function ReservationSuccessful() {
  return (
    <main className="w-100 d-flex justify-content-center h-100 flex-column align-items-center gap-3">
      <img
        src="/cat-final.png"
        alt="gato"
        className="final-image flex-grow-1"
      />
      <div className="text-center">
        <h2>Reserva concluída com </h2>
        <h2>sucesso!</h2>
      </div>
      <Link href={routes.home}>
        <Button className="final-button">Voltar para página inicial</Button>
      </Link>
    </main>
  );
}
