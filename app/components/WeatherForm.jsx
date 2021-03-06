var React = require('react');

var WeatherForm = React.createClass({

  onFormSubmit: function (e) {
      e.preventDefault();
      //console.log("form submitted");
      var location = this.refs.location.value;

      if (location.length > 0) {
        this.refs.location.value = '';
        this.props.onSearch(location);
      }
  },

  render: function () {
    return (

        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" placeholder="Enter name" ref="location"/>
          </div>
          <div>
            <button>Get Weather</button>
          </div>
        </form>
    );
  }
});

module.exports = WeatherForm;
