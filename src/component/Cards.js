// 5- import useState from react
import React, { useState } from "react";
import CardData from "./CardData";
import {Card,Button} from 'react-bootstrap';

function Cards() {
  // 6- Added const
  const [memeImage, setMemeImahe] = useState();

  const myRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImahe(url);
  };
  return (
    <div className="container " align="center">

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={memeImage} />
      <Card.Body>
      <Card.Title>Some image</Card.Title>
      <Button class="btn btn-secondary" onClick={myRandomEmg}>Next Image</Button>
     </Card.Body>
    </Card>
    </div>
  );
}

export default Cards;
