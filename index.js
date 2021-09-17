const express = require("express");
const app = express();
const path = require("path");
const RajaOngkir = require("rajaongkir-nodejs").Starter(
  "93e1800b2ace652b34aea1486c7af99c"
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const responseProvinsi = await RajaOngkir.getProvinces();
  const responseKota = await RajaOngkir.getCities();
  const provinsi = responseProvinsi.rajaongkir.results;
  const kota = responseKota.rajaongkir.results;

  res.render("home", { provinsi, kota });
});

app.post("/", async (req, res) => {
  const body = {
    origin: parseInt(req.body.kotaAsal),
    destination: parseInt(req.body.kotaTujuan),
    weight: parseInt(req.body.berat),
  };
  const kurir = req.body.kurir;
  switch (kurir) {
    case "jne":
      response = await RajaOngkir.getJNECost(body);
      data = response.rajaongkir;
      res.render("hasil", { data });
      break;
    case "pos":
      response = await RajaOngkir.getPOSCost(body);
      data = response.rajaongkir;
      res.render("hasil", { data });
      break;
    case "tiki":
      response = await RajaOngkir.getTIKICost(body);
      data = response.rajaongkir;
      res.render("hasil", { data });
      break;
  }
});

app.get("/test", (req, res) => {
  res.render("test");
});

app.listen(8080, () => {
  console.log("Website hidup pada port 8080");
});
