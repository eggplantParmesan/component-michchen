const React = require("react");
const ReactDOM = require("react-dom");
const $ = require("jquery");

import Gallery from "./components/Gallery.jsx";
import ProductInfo from "./components/ProductInfo.jsx";

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
        this.setState(res[0]);
        window.state = this.state;

        var reqVariations = $.get({
          url: "http://localhost:9001/var",
          context: this,
          data: { id: prodNum }
        });
        reqVariations.done(res => {
          this.addImages(res);
        });
      });
    };

    this.addImages = function(images) {
      if (this.state.variations) {
        console.log(this.state);
        this.setState({ images: images });
        window.images = this.state.images
        let result = {};

        for (var i = 0; i < images.length; i++) {
          let cur = images[i];
          cur.var_key = cur.var_key || 'default';
          if (result[cur.var_key] === undefined) {
            result[cur.var_key] = {};
          }

          cur.var_value = cur.var_value || 'default';
          if (result[cur.var_key][cur.var_value] === undefined) {
            result[cur.var_key][cur.var_value] = [];
          }

          if (cur.is_priority !== 1) {
            result[cur.var_key][cur.var_value].push(cur.image_url);
          } else {
            result[cur.var_key][cur.var_value].unshift(cur.image_url);
          }

        }
        window.images = result;
        console.log(result);
      }

    };
  }

  componentDidMount() {
    let id = window.location.href.match(/(\?|\&)id=(\d\d?\d?\d?\d?\d?\d?\d?)/);
    if (id) {
      this.getData(id[2], this);
    } else {
      this.getData(1, this);
    }
  }

  render(props) {
    return (
      <div>
        <Gallery />
        <ProductInfo data={this.state} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
