import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from './AddComment';
class CommentArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commenti: [],
      isLoading: true,
      isError: false,
    };
  }
  getCommenti = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/books/${this.props.id}/comments/`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDhkZGI1MjViYjAwMThlZDA4MWIiLCJpYXQiOjE3MDMxNjgyMjEsImV4cCI6MTcwNDM3NzgyMX0.6vzEPQlQx1KPfdgrsyYbW1LQ4dBBwp-6rSJTD_waWbQ",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nel recupero commenti!");
        }
      })
      .then((data) => {
        this.setState({
          commenti: data,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  componentDidMount() {
    this.getCommenti();
  }
  render() {
    console.log(this.state.commenti);

    return (
      <div>
        <CommentList comments= {this.state.commenti}/>
        <AddComment />
       
      </div>
    );
  }
}

export default CommentArea;
