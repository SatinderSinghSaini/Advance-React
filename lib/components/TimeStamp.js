import React, { useContext, useEffect, useState } from "react";
import StoreContext from "./StoreContext";

export default function TimeStamp(props) {
  return <div>{props.timestamp.toString()}</div>;
}
