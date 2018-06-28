var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);


app.get('/priceTwo', function(req, res) {
  var clienPrice = req.query.price_text;
  var buyingItem = "구매불가";
  var priceTable = [{
      name: "item1",
      price: 1000
    },
    {
      name: "item2",
      price: 5000
    },
    {
      name: "item3",
      price: 10000
    },
    {
      name: "item4",
      price: 30000
    },
    {
      name: "item5",
      price: 50000
    },
    {
      name: "item6",
      price: 100000
    },
    {
      name: "item7",
      price: 500000
    }
  ];

  for (var i = 0; i < priceTable.length; i++) {
    if (priceTable[i].price <= clientPrice) {
      buyingItem = priceTable[i].name;
    }
  };

  console.log(buyingItem);
  res.send(buyingItem);
});

app.get('/getForm', function(req, res) {
  res.sendfile("itemPrice.html");
});
