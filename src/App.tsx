import { useState } from "react";
import Modal from "react-modal";
import { Header } from "./components/Header";
import { DashBoard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/newTransationModal";
import { TransactionProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [transactionModal, setTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setTransactionModal(true);
  }

  function handleCloseTransactionModal() {
    setTransactionModal(false);
  }

  return (
    <TransactionProvider>
      <Header handleOpen={handleOpenNewTransactionModal} />
      <DashBoard />
      <NewTransactionModal
        isOpen={transactionModal}
        onRequestClose={handleCloseTransactionModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}
