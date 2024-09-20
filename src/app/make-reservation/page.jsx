"use client";
import schema from "./schema";
import { Formik } from "formik";
import ReservationForm from "./reservation-form";
import { useRouter } from "next/navigation";

async function createReservation(values, router) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (response.ok) {
    return router.push("/reservation-successful");
  }

  alert("Erro ao fazer a reserva");
}

export default function MakeReservation() {
  const router = useRouter();
  return (
    <main className="flex-grow-1 row d-flex z-3 main-reservation">
      <div className="w-100 col-12 px-4">
        <div>
          <h2>
            Preencha os dados abertos para fazer a sua
            <span className="tertiary-text-color mx-2">reserva</span>
          </h2>
        </div>
        <div>
          <Formik
            initialValues={{
              name: "",
              whatsapp: "",
              email: "",
              people: 1,
              date: "",
              time: "",
            }}
            validationSchema={schema}
            onSubmit={(values) => createReservation(values, router)}
            validateOnMount={true}
          >
            {({ handleSubmit, getFieldProps, errors, touched }) => {
              return (
                <ReservationForm
                  handleSubmit={handleSubmit}
                  getFieldProps={getFieldProps}
                  errors={errors}
                  touched={touched}
                />
              );
            }}
          </Formik>
        </div>
      </div>
      <div className="d-flex justify-content-end col-12 col-xl-7 position-relative">
        <img
          src="/image-2.png"
          alt="homem segurando um gato"
          className="img-reservation"
        />
      </div>
    </main>
  );
}
