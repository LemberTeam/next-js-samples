import React from "react";
import { Grid, Flex, Box, Image, Button } from "@theme-ui/components";

import Layout from "../../components/Layout";
import NameCard from "../../components/Cards/Name";
import ContentCard from "../../components/Cards/Content";
import { H1, H2, P } from "../../components/Typography";

export default () => (
  <Layout>
    <Box sx={{ mb: 10, px: 4, pt: 10, pb: 8, bg: "white" }}>
      <Flex sx={{ alignItems: "center" }}>
        <H1 variant="h2" sx={{ flex: 1 }}>
          Company Name
        </H1>
        <Box>Edit profile link</Box>
      </Flex>
      <Flex sx={{ alignItems: "center", mb: 6 }}>
        <Image sx={{ mr: 4 }} src="https://placehold.it/70x70" />
        <Box>
          <P color="grey9">Vienna, Austria</P>
          <P color="grey9" sx={{ fontWeight: "heading" }}>
            +123 456 789 | www.example.com
          </P>
        </Box>
      </Flex>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </P>
    </Box>

    <Box sx={{ mb: 10, px: 4 }}>
      <Flex sx={{ alignItems: "center", mb: 4 }}>
        <H2 sx={{ flex: 1 }}>Upcoming events</H2>
        <Button>Add new event</Button>
      </Flex>
      <ContentCard
        title="Party"
        companyImage="https://placehold.it/100x100"
        program={[
          "Price per day 100 $",
          "4 groups - A, B, C, D - 20 minutes each"
        ]}
        date="15 Apr - 21 Apr 2020"
        sx={{ mb: 4 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ContentCard>
      <ContentCard
        title="PartyTwo"
        companyImage="https://placehold.it/100x100"
        program={[
          "Price per day 200 $",
          "4 groups - A, B, C, D - 30 minutes each"
        ]}
        date="21 Apr - 24 Apr 2020"
        sx={{ mb: 4 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ContentCard>
      <ContentCard
        title="PartyThree"
        companyImage="https://placehold.it/100x100"
        program={[
          "Price per day 300 $",
          "4 groups - A, B, C, D - 40 minutes each"
        ]}
        date="24 Apr - 29 Apr 2020"
        sx={{ mb: 4 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ContentCard>
    </Box>

    <Box sx={{ mb: 10, px: 4 }}>
      <H2 sx={{ mb: 2 }}>Available events</H2>
      <Grid gap={2} columns={3}>
        <NameCard
          image="https://placehold.it/225x225"
          title="PartyOne"
          companyImage="https://placehold.it/60x60"
          budget={1500}
        />
        <NameCard
          image="https://placehold.it/225x225"
          title="PartyTwo"
          companyImage="https://placehold.it/60x60"
          budget={1500}
        />
      </Grid>
    </Box>
  </Layout>
);
