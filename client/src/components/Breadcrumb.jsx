const React = require('react');

const Breadcrumb = props => (
  <div id="breadcrumb">
    {props.data.category_name ?
      (<a id="breadcrumb" style={props.styles} href={props.data.category_url}>{props.data.category_name}</a>) :
      ("no category defined")
    }
  </div>
)

export default Breadcrumb;
