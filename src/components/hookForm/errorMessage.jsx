import React from "react";

export default function ErrroMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return <p>This is required</p>;
      case "minLength":
        return <p>Your last name need minmium 2 charcaters</p>;
      case "maxLength":
        return <p>Number of family member should be only one digit</p>;
      case "pattern":
        return <p>Enter a valid email address</p>;
      case "min":
        return <p>Water consumption cannot be negative</p>;
      case "max":
        return <p>Water consumption cannot be greater than 100 million lite</p>;
      case "validate":
        return <p>Username is already used</p>;
      default:
        return null;
    }
  }

  return null;
}
