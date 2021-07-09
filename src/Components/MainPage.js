import React from "react";
import SearchSideBar from "./SearchSideBar";
import LinkSideBar from "./LinkSideBar";
import { Container, Grid, Menu, Header } from "semantic-ui-react";
const MainPage = () => {
  return (
    <div>
      <Container fluid>
        <Grid equal>
          <Grid.Row columns={3}>
            <Grid.Column width={4}>
              <SearchSideBar />
              </Grid.Column>
              <Grid.Column width={8}>
                <Header size='huge' textAlign='center' style={{
                    color: 'white'
                }}>This is where the main content will go</Header>
              </Grid.Column>
            <Grid.Column width={3}>
            <LinkSideBar />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default MainPage;
