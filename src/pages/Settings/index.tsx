import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import Menu from "../../components/Menu";
import MenuTitle from "../../components/MenuTitle";
import Navbar from "../../components/Navbar";
import NameInput from "./components/NameInput";
import Select from "./components/Select";
import Switch from "./components/Switch";

type Props = {};

const Settings = (props: Props) => {
  const [theme, setTheme] = useState(true)
  return (
    <div>
      <Navbar title="Memory Game" />
      <Menu>
        <MenuTitle>Settings</MenuTitle>
        <NameInput />
        <Select/>
        <Switch checked={theme} onCheck={setTheme}/>
        <Button
          as={Link}
          to="/"
          width="370px"
          style={{
            marginTop: "25px",
          }}
        >
          Back
        </Button>
      </Menu>
    </div>
  );
};

export default Settings;
