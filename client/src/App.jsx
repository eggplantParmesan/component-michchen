const React = require("react");
const ReactDOM = require("react-dom");
const $ = require("jquery");

import Selector from "./components/Selector.jsx";
import Breadcrumb from "./components/Breadcrumb.jsx";
import Gallery from "./components/Gallery.jsx";
import ProductInfo from "./components/ProductInfo.jsx";

import styles from './style.css.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getData = function(prodNum, appObj) {
      prodNum = prodNum || 1;

      var reqProduct = $.get({
        url: "http://localhost:9001/get",
        context: this,
        data: { id: prodNum }
      });

      reqProduct.done(res => {
        this.setState(res, () => {
          this.setState({
            curSelect: Object.keys(Object.values(res.images)[0])[0]
          })
        });

        window.state = this.state;
      });
    };

    this.selectOption = function(e) {
      this.setState({
        curSelect: e.target.value // value of the select
      });
    }
  }

  componentDidMount() {
    let id = window.location.href.match(/(\?|\&)id=(\d\d?\d?\d?\d?\d?\d?\d?)/);
    if (id) {
      // get id from window URL
      this.getData(id[2], this);
    } else {
      // otherwise get product of id=1
      this.getData(1, this);
    }
  }

  render(props) {
    return (
      <div style={styles.main}>
        <Breadcrumb styles={styles.breadcrumb} data={this.state}/>
        <Gallery styles={styles.gallery} cur={this.state.curSelect} images={this.state.images}/>
        <ProductInfo styles={styles.productInfo} data={this.state} test="my test" custCb={this.selectOption.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
