import logo from "../../assets/logo.svg";
import styled from "styled-components";
import { Container, Content } from "./styles";

interface HeaderProps {
  handleOpen: () => void;
}

export function Header({ handleOpen }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={handleOpen}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
 