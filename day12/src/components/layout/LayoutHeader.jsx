import { CloseOutlined, ExclamationCircleOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer, Grid } from "antd";
import React, { useState } from "react";
import LeftCol from "./LeftCol";

const { useBreakpoint } = Grid;

const LayoutHeader = () => {
  const points = Grid.useBreakpoint();

  const breakpoints = useBreakpoint();
  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const [drawerVisibility2, setDrawerVisibility2] = useState(false);

  return (
    <>
      <div className="pb-2 pt-2 border-bottom d-flex flex-row justify-content-between align-items-center ">
        {!breakpoints.md && <MenuOutlined onClick={() => setDrawerVisibility(true)} />}
        <span className="_db-primary" style={{ fontWeight: "600" }}>
          Welcome hadi
        </span>
        <div className="d-flex flex-row justify-content-center align-items-center gap-2" style={{ fontWeight: "600" }}>
          <span className="d-flex flex-row justify-content-center align-items-center gap-1 border-end px-1 _db-primary">
            <ExclamationCircleOutlined color="red" /> Update Link
          </span>
          {!points.md && (
            <span className="d-flex flex-row justify-content-center align-items-center" onClick={() => setDrawerVisibility2(true)}>
              Assets
            </span>
          )}
        </div>
      </div>
      <Drawer
        // style={{ background: "linear-gradient(329deg,#31af98,#0f3f5d)" }}
        placement="left"
        closable={false}
        width={250}
        onClose={() => setDrawerVisibility(false)}
        open={drawerVisibility}
        extra={<CloseOutlined onClick={() => setDrawerVisibility(false)} />}
      >
        <LeftCol />
      </Drawer>

      <Drawer
        // style={{ background: "linear-gradient(329deg,#31af98,#0f3f5d)" }}
        placement="right"
        closable={false}
        width={250}
        onClose={() => setDrawerVisibility2(false)}
        open={drawerVisibility2}
        extra={<CloseOutlined onClick={() => setDrawerVisibility2(false)} />}
      >
        <div>nothing</div>
      </Drawer>
    </>
  );
};

export default LayoutHeader;
