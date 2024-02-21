import { Col, Container, Row } from "react-bootstrap";
import { person } from "./date";
import DateCount from "./component/DateCount";
import DateList from "./component/DateList";
import DateAction from "./component/DateAction";
import React, { useState } from "react";
function App() {
  const [personDate, setpersonDate] = useState(person);
  const OnDelet = () => {
    setpersonDate([]);
  };
  const ShowDate = () => {
    setpersonDate(person);
  };
  return (
    <div className="font">
      <Container className="py-5">
        <DateCount omar={personDate} />
        <DateList person={personDate}></DateList>

        <DateAction Date={ShowDate} deletDate={OnDelet}></DateAction>
      </Container>
    </div>
  );
}

export default App;
