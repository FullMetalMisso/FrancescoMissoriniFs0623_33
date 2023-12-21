import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const CommentList = (props) => {
    return(
        <Row>
        {props.comments.length === 0 ? (
          <Col>
            <p>Non ci sono commenti</p>
          </Col>
        ) : (
         props.comments.map((commento) => (
            <Col key={commento._id} xs={12}>
              <p>Autore: {commento.author}</p>
              <p>Recensione: {commento.comment}</p>
            </Col>
          ))
        )}
      </Row>
    )
}


export default CommentList
