import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Welcome";

import { Divider, Text, Container, Grid, Flex } from "@chakra-ui/react";

import { Reveal } from "./Reveal.tsx"; 

export default function About({ color }) {
  return (
    <Container maxW="8xl" id="about">
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 8, md: 15 }}
        pb={{ base: 20, md: 36 }}
      >
        {/* Left side with animation */}
        <div>
          <Text fontWeight={800} fontSize="2xl" mb={2}>
            About
          </Text>
          <Divider orientation="horizontal" />
          <Text mb={4} color="gray.500" fontSize="xl" px={2}>
            Full-Stack Developer | AWS Cloud Enthusiast | Software Engineer
          </Text>
          <Lottie animationData={animationData} className="animation-container" />
        </div>

        {/* Right side with bullet points */}
        <div>
          <Flex direction="column">
            {[
              {
                title: "Computer Science graduate student with hands-on experience building scalable software using .NET, Python, React, and SQL."
              },
              {
                title: "Developed and supported investment and compliance applications in enterprise environments using ASP.NET Core and SQL Server."
              },
              {
                title: "Skilled in developing full-stack web apps with Flask, Django, React, and integrating AWS services like Lambda, Cognito, S3, and DynamoDB."
              },
              {
                title: "Built smart financial tracking apps with AWS serverless architecture for secure, real-time expense monitoring."
              },
              {
                title: "Strong knowledge of Agile methodologies, unit testing, GitHub Actions CI/CD, and production support debugging techniques."
              },
              {
                title: "Experience collaborating with cross-functional teams including compliance, accounting, and operations to build secure reporting systems."
              },
              {
                title: "Proficient in SQL, PostgreSQL, and MySQL with strong analytical skills in data modeling, querying, and optimization."
              },
              {
                title: "AWS Certified Cloud Practitioner with working knowledge of IAM, API Gateway, RDS, and Lambda-based microservices."
              },
              {
                title: "Designed secure role-based applications with session authentication, admin dashboards, and real-time data flows."
              },
              {
                title: "Open to relocation and available for full-time roles starting August 2025 (CPT eligible)."
              }
            ].map((item, index) => (
              <Reveal key={index}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                  <div
                    className="bullet-icon-container"
                    style={{ marginRight: "0.5rem" }}
                  >
                    <svg
                      className="bullet-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <Text color="gray.600" fontSize="lg">
                    {item.title}
                  </Text>
                </div>
              </Reveal>
            ))}
          </Flex>
        </div>
      </Grid>
    </Container>
  );
}
