const React = require("react");
const ReactDOM = require("react-dom");
const $ = require("jquery");

import Selector from "./components/Selector.jsx";
import Breadcrumb from "./components/Breadcrumb.jsx";
import Gallery from "./components/Gallery.jsx";
import ProductInfo from "./components/ProductInfo.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getData = function(prodNum, appObj) {
      prodNum = prodNum || 1;

      var reqProduct = $.get({
        url: `http://localhost:${process.env.PORT || 9001}/get`,
        context: this,
        data: { id: prodNum }
      });

      reqProduct.done(res => {
        this.setState(res, () => {
          this.setState({
            // onload, select the first option for product variation
            curSelect: Object.keys(Object.values(res.images)[0])[0]
          })
        });

        window.state = this.state;
      });
    };

    this.selectOption = function(e) {
      if (e.target.value !== 'Select') {
        this.setState({
          curSelect: e.target.value // value of the dropdown
        });
      }
    }
  }

  componentDidMount() {
    // get "id" from URL params
    let id = window.location.href.match(/(\?|\&)id=(\d\d?\d?\d?\d?\d?\d?\d?)/);
    if (id) {
      // get data using id from window URL
      this.getData(id[2], this);
    } else {
      // otherwise get data for id=1
      this.getData(1, this);
    }
  }

  render (props) {
    console.log(this.state);
    return (
      <div>
        <Breadcrumb data={this.state}/>
        <Gallery cur={this.state.curSelect} images={this.state.images}/>
        <ProductInfo data={this.state} test="my test" custCb={this.selectOption.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
