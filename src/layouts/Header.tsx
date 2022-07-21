import { faCss3, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Tabs } from "@mantine/core";
import React, { useState } from "react";
import CssExport from "../components/CssExport";
import HtmlExport from "../components/HtmlExport";

const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <header className="p-4 px-6 w-full border-[1px] border-gray-200 flex items-center justify-between">
      <div className="flex items-center">
        <h1>CSS Grid Generator</h1>
      </div>

      <div className="flex items-center">
        <button type="button" onClick={() => setOpened(true)}>
          Get code
        </button>
      </div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
        classNames={{
          modal: "w-full max-w-3xl",
        }}
      >
        <Tabs>
          <Tabs.Tab label="HTML" icon={<FontAwesomeIcon icon={faHtml5} />}>
            <HtmlExport />
          </Tabs.Tab>
          <Tabs.Tab label="CSS" icon={<FontAwesomeIcon icon={faCss3} />}>
            <CssExport />
          </Tabs.Tab>
        </Tabs>
      </Modal>
    </header>
  );
};

export default Header;
