import React from "react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { Icon, Menu, Table } from "semantic-ui-react";
import { useState } from "react";
import { useEffect } from "react";
export default function JASortedByDeadLine() {
  const [jASortedByDeadLine, setJASortedByDeadLine] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllSortedByDeadline()
      .then((result) => setJASortedByDeadLine(result.data.data));
  }, []);
  return (
    <div>
      <Table primary style={{ marginLeft: "2em" }} celled unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Description</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>JobPosition</Table.HeaderCell>
            <Table.HeaderCell>Min Salary</Table.HeaderCell>
            <Table.HeaderCell>Max Salary</Table.HeaderCell>
            <Table.HeaderCell>DeadLine</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jASortedByDeadLine.map((jAsorted) => (
            <Table.Row key={jAsorted.id}>
              <Table.Cell>{jAsorted.jobDescription}</Table.Cell>
              <Table.Cell>{jAsorted.employer.companyName}</Table.Cell>
              <Table.Cell>{jAsorted.city.cityName}</Table.Cell>
              <Table.Cell>{jAsorted.jobPosition.jobPositionName}</Table.Cell>
              <Table.Cell>{jAsorted.minSalary}</Table.Cell>
              <Table.Cell>{jAsorted.maxSalary}</Table.Cell>
              <Table.Cell>{jAsorted.applicationDeadline}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="7">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
