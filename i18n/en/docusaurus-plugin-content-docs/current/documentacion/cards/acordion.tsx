// Accordion.js
import React, { useState } from "react";
import {CaralIcon } from 'iconcaral2';

export const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ border: "1px solid #E4E4E7", borderRadius: 8, marginBottom: 8, transition: "max-height 0.3s ease", overflow: "hidden" }}>
      <div
        style={{ 
            padding: 10, 
            cursor: "pointer",
            background: "#f5f5f5",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}
        onClick={() => setOpen(!open)}
      >
        {title}

        <CaralIcon name={open ? "less" : "plus"} size={20} />

      </div>
      <div
        style={{
          transition: "height 0.3s ease",
          padding: open ? 10 : "0 10px",
        }}
      >
        {open && children}
      </div>
    </div>
  );
};

