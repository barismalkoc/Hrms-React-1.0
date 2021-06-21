import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { Icon, Menu, Table } from "semantic-ui-react";

export default function JobAdvertisementsList() {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getAll().then((result) => setjobAdvertisements(result.data.data))
  },[]);
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
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobPosition.jobPositionName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
              
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="8">
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
