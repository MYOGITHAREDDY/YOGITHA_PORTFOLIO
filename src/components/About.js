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
            Data Analyst | Full Stack Developer | AWS Cloud Enthusiast 
          </Text>
          <Lottie animationData={animationData} className="animation-container" />
        </div>

        {/* Right side with bullet points */}
        <div>
          <Flex direction="column">
  {[
    {
      title: "Computer Science graduate student with strong experience in data analysis, backend development, and cloud engineering."
    },
    {
      title: "Skilled in extracting insights using SQL, Python, and Power BI — with experience building interactive dashboards."
    },
    {
      title: "Developed data-driven reporting tools and compliance systems using ASP.NET Core, SQL Server, and enterprise-grade APIs."
    },
    {
      title: "Hands-on experience with AWS services like Lambda, RDS, S3, and Cognito for deploying secure, scalable data pipelines and backend systems."
    },
    {
      title: "Built and deployed serverless applications for financial tracking using real-time data and cloud-native technologies."
    },
    {
      title: "Strong foundation in data modeling, querying, and performance optimization using PostgreSQL, MySQL, and DynamoDB."
    },
    {
      title: "Experience collaborating with cross-functional teams to design data workflows, reporting dashboards, and analytics-ready datasets."
    },
    {
      title: "Proficient in building full-stack applications with Flask, Django, React, and integrating data from cloud sources."
    },
    {
      title: "AWS Certified Cloud Practitioner with working knowledge of IAM, API Gateway, Lambda microservices, and cloud security principles."
    },
    {
      title: "Able to start quick career from August 2025 (CPT eligible) | Open to relocation | Targeting data, software, and cloud roles."
    }
  ].map((item, index) => (
    <Reveal key={index}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
        <div className="bullet-icon-container" style={{ marginRight: "0.5rem" }}>
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
