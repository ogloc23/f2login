const express = require("express");

const app = express();

app.get("/api/transactions", (req, res) => {
  const query = req.query;
  console.log(query);

  res.send("You don reach your destination, my gee");
});

/**
 * const url = "https://stxtools.onrender.com/api/transactions?page=10"
 *
 * PROTOCOL- https://
 * hostname/domainName- onreder.com
 * subdomain - stxtools
 * path- /api/transactions
 * query- ?page=10
 */

https: app.listen("5000", () => {
  console.log("Listening at PORT 5000");
});
/**
 * API REQUEST
 * C R U D
 *
 * C - Create: POST Request
 * R - Read: GET Request
 * U - Update: PATCH/PUT Request
 * D - Delete: DELETE Request
 */
