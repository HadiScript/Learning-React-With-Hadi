import { AppstoreOutlined, BackwardOutlined, CommentOutlined, FolderOutlined } from "@ant-design/icons";
import React from "react";

const RightCol = () => {
  return (
    <>
      <div className={"text-start px-3 py-1"}>
        <Logo />
      </div>
      <div className="px-3 py-1">
        <Menu>
          <Menu.Item key="1" className="mt-3" icon={<AppstoreOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" className="mt-1" icon={<FolderOutlined />}>
            Folders
          </Menu.Item>
          <Menu.Item key="3" className="mt-1" icon={<CommentOutlined />}>
            Comments
          </Menu.Item>
          <Menu.Item key="4" className="mt-4" icon={<BackwardOutlined />}>
            <span> Back</span>
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default RightCol;
