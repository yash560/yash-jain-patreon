import React, { useState } from "react";
import { GlobalStyle } from "./globalStyles";
import styled from "styled-components";
import { Layout } from "./Container/Layout";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
function Profile() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div>
      <Container>
        <Layout />
        <GlobalStyle />
      </Container>
    </div>
  );
}

export default Profile;
