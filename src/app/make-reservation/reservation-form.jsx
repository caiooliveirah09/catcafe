import { Form } from "formik";
import Input from "../components/Input";
import Button from "../components/Button";

export default function ReservationForm({
  handleSubmit,
  getFieldProps,
  errors,
  touched,
}) {
  return (
    <Form
      className="d-flex gap-3 flex-column col-12 col-xl-5 w-100"
      onSubmit={handleSubmit}
    >
      <div>
        <Input
          type="text"
          label="Como podemos te chamar?"
          placeholder="Digite seu nome"
          id="name"
          error={errors.name && touched.name}
          getFieldProps={getFieldProps("name")}
        />
      </div>
      <div>
        <Input
          type="text"
          label="Qual seu whatsapp?"
          placeholder="Digite seu whatsapp"
          id="whatsapp"
          mask="99 9 9999 9999"
          error={errors.whatsapp && touched.whatsapp}
          getFieldProps={getFieldProps("whatsapp")}
        />
      </div>
      <div>
        <Input
          type="text"
          label="Qual seu email?"
          placeholder="Digite seu email"
          id="email"
          error={errors.email && touched.email}
          getFieldProps={getFieldProps("email")}
        />
      </div>
      <div>
        <Input
          type="text"
          label="Mesa pra quantas pessoas?"
          id="people"
          mask="99"
          error={errors.people && touched.people}
          getFieldProps={getFieldProps("people")}
        />
      </div>
      <div>
        <Input
          type="text"
          label="Que dia você vai chegar?"
          id="date"
          mask="99/99/9999"
          maskChar="_"
          error={errors.date && touched.date}
          getFieldProps={getFieldProps("date")}
        />
      </div>
      <div>
        <Input
          type="text"
          label="Que horas você vai chegar?"
          id="time"
          mask="99:00"
          maskChar="_"
          error={errors.time && touched.time}
          getFieldProps={getFieldProps("time")}
        />
      </div>
      <div className="py-3">
        <Button disabled={Object.keys(errors).length > 0}>Reservar</Button>
      </div>
    </Form>
  );
}
