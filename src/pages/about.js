import React from "react"
//import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
  <div>
    <h1>A11y Issues</h1>
    {data.allNodeIssue.edges.map(elem => (
      <div>
        <h3>{elem.title}</h3>
        <div>Area of Concern: {elem.node.field_area_of_concern}</div>
        <div>Issue: {elem.node.field_issue}</div>
        <div>WCAG Criterion: {elem.node.field_wc}</div>
        <div><a href={elem.node.field_understanding_link}>Understanding the Criterion</a></div>
        <label for="priority">Priority: </label>
        <input type="text" id="priority" placeholder={elem.node.field_default_priority}></input><br></br>
        <label for="notes">Notes: </label>
        <textarea rows="10" cols="50" id="priority" value={elem.node.field_default_notes}></textarea>
        </div>
      ))}
  </div>
  </Layout>
)

export const query = graphql`
  query allNodeIssue {
    allNodeIssue {
      edges {
        node {
          field_issue
          field_default_priority
          field_default_notes
          field_area_of_concern
          field_wc
          field_understanding_link
        }
      }
    }
  }
`