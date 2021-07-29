import React, { useState } from "react";
import NextLink from "next/link";
import { useQuery } from "graphql-hooks";
import { Grid, Box, Button } from "@theme-ui/components";

import Layout from "../components/Layout";
import Container from "../components/Container";
import CompanyCard from "../components/Cards/CompanyCard";
import { H1 } from "../components/Typography";

import { getCompanyLogo } from "../utils";

export const allCompaniesQuery = `
  query getCompanies($limit: Int!, $offset: Int!) {
    users(group: "agencies", limit: $limit, offset: $offset) {
      id
      firstName
      ... on User {
        companyLogo {
          path
        }
      }
    }
  }
`;

export default () => {
  const [offset, setOffset] = useState(0);
  const { loading, error, data } = useQuery(allCompaniesQuery, {
    variables: { offset, limit: 12 },
    updateData: (prevResult, result) => ({
      ...result,
      users: [...prevResult.users, ...result.users]
    })
  });

  if (error) return <Layout>Error</Layout>;
  return (
    <Layout>
      <Box sx={{ py: 10, pb: 4, bg: "white" }}>
        <Container>
          <H1 variant="h2">Companies</H1>
        </Container>
      </Box>
      <Container sx={{ py: 4 }}>
        {data ? (
          <>
            <Grid gap={4} columns={[1, 2, 3]}>
              {data.users.map(company => (
                <NextLink key={company.id} href={`/companies/${company.id}`}>
                  <a>
                    <CompanyCard
                      title={company.firstName}
                      image={getCompanyLogo(company.companyLogo)}
                      name="Name"
                      time={24}
                    />
                  </a>
                </NextLink>
              ))}
            </Grid>
            <Box sx={{ py: 10, textAlign: "center" }}>
              <Button onClick={() => setOffset(offset + 12)}>
                {loading ? "Loading..." : "Show More"}
              </Button>
            </Box>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </Container>
    </Layout>
  );
};
