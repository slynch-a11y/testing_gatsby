import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

class AllIssues extends React.Component  {
  constructor(props) {
    super(props)
    this.state = { 
      complete: false,
      notes: "",
      priority: "",
      node: "",
      issueList: []
     }
     this.handleChange = this.handleChange.bind(this)
     this.addIssue = this.addIssue.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    const name = evt.target.name
    const value = evt.target.value
    this.setState({[name]: value})
  }
  addIssue(evt){
    evt.preventDefault()
    this.state.issueList.push({node: this.state.node, notes: this.state.notes, priority: this.state.priority})
  }
  handleSubmit(evt){
    evt.preventDefault()
    this.setState({complete: true})

  }
  render() {

    const { data } = this.props
    return (
<Layout>
  <div>
  {
        (this.state.complete) ? <div>
          {this.state.issueList.map((elem, index) => (
            <div key={index}>
            <div>{elem.notes}</div>
            <div>{elem.priority}</div>
            {data.allNodeIssue.edges[elem.node].node.field_issue}
            </div>
          )
            )}
        </div> : 
      
    <div>{data.allNodeIssue.edges.map((elem, index) => (
      <div key={index}>
        <form>
          
        <div>Area of Concern: {elem.node.field_area_of_concern}</div>
        <input type="checkbox" id="node" name="node" value={index} onChange={this.handleChange}></input>
        <label htmlFor="node">Issue: {elem.node.field_issue}</label>
        <div>WCAG Criterion: {elem.node.field_wc}</div>
        <div><a href={elem.node.field_understanding_link}>Understanding the Criterion</a></div>
        <label htmlFor="priority">Priority: </label>
        <input type="text" id="priority" name="priority" placeholder={elem.node.field_default_priority} value={this.state.priority} onChange={this.handleChange}></input><br></br>
        <div>{elem.node.field_default_notes}</div>
        <label htmlFor="notes">Notes: </label>
        <textarea rows="10" cols="50" id="notes" name="notes" value={this.state.notes} onChange={this.handleChange}></textarea>
        <button onClick={this.addIssue} type="submit">Add Issue to Report</button>
        </form>
        </div>
      ))}
              <button onClick={this.handleSubmit} type="submit">Submit Final Report</button>

      </div>
    }
  </div>
  </Layout>
    )
  }
}
export default AllIssues



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