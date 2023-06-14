import { contextType } from "react-modal";
import { Summary } from "../Summary";
import { TransactionTable } from "../Transactions";
import { Container } from "./styles";

export function DashBoard() {
    return (
    <Container>
      <Summary />
      <TransactionTable/>
    </Container>
  );
}
