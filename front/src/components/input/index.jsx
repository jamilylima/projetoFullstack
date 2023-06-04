import { forwardRef } from "react";
import { Container } from "./styles";

export const Input = forwardRef(({ id, label, error, ...rest }, ref) => {
  return (
    <Container>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input id={id} ref={ref} {...rest} />
      {error ? <p>{error}</p> : null}
    </Container>
  );
});