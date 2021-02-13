import React from "react";
import Navigator from "./routes/homeStack";
import globalStyles from "./styles/global";

export default function App() {
  return <Navigator style={globalStyles.body} />;
}
