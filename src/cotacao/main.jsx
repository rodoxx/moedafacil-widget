/** @jsx React.DOM */

var MoedaFacilWidget = require('./components/MoedaFacilWidget.jsx');

var holder = document.getElementById('moedafacil-widget-holder-cotacao');
var store_id = holder.getAttribute('data-store-id');

React.render(
  <MoedaFacilWidget storeId={store_id} />,
  holder
);
