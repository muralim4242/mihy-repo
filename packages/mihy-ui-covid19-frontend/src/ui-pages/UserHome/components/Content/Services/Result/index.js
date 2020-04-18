import React from "react";
import { Card} from "@material-ui/core";
import { mapDispatchToProps } from "../../../../../../ui-utils/commons";
import { connect } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

class Result extends React.Component {

    render() {
        return (
            <Card style={{ padding: "15px 15px 15px 15px" }}>
            <Table >
            <Thead>
              <Tr>
                <Th>Service Type</Th>
                <Th>Frequency</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>From Date</Th>
                <Th>To Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr align="center">
                <Td>Service 1</Td>
                <Td>monthly</Td>
                <Td>shalu@gmail.com</Td>
                <Td>8988776677</Td>
                <Td>25/05/2020</Td>
                <Td>28/07/2020</Td>
              </Tr>
              <Tr align="center">
              <Td>Service 2</Td>
                <Td>daily</Td>
                <Td>shalu@gmail.com</Td>
                <Td>8988776677</Td>
                <Td>25/05/2020</Td>
                <Td>28/07/2020</Td>
              </Tr>
            </Tbody>
          </Table>
          </Card>
        );
    }
}
const mapStateToProps = ({ screenConfiguration }) => {
    return {   };
  };

    

export default connect( mapStateToProps, mapDispatchToProps)(Result);
