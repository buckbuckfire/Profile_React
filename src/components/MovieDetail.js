import React from "react";


function MovieDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.person.name.first} className="img-fluid" src={props.person.picture.medium} style={{ margin: "0 auto" }} />
      <h3>First Name: {props.person.name.first}</h3>
      <h3>Last Name: {props.person.name.last}</h3>
    </div>
  );
}

export default MovieDetail;
