import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function CategoriesEmployer() {
  return (
    <div>
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Job Seeker</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              as={NavLink}
              to="/employer/getAllCv"
              name="Cv List"
            ></Menu.Item>
             <Menu.Item
              as={NavLink}
              to="/employer/getAll"
              name="List"
            ></Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    </div>
  );
}
