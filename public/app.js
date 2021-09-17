const provAsal = document.querySelector("#provAsal");
provAsal.addEventListener("change", (e) => {
  const terpilih = document.querySelectorAll(".terpilihKotaAsal");
  for (const t of terpilih) {
    t.remove();
  }
  const kotaAsal = document.querySelector("#kotaAsal");
  kotaAsal.removeAttribute("disabled");
  const value = e.target.value;
  let arrayKotaTerpilih = kota.filter((city) => city.province_id == value);
  for (const kotaTerpilih of arrayKotaTerpilih) {
    const option = document.createElement("option");
    option.classList.add("terpilihKotaAsal");
    option.setAttribute("value", kotaTerpilih.city_id);
    option.innerHTML = kotaTerpilih.city_name;
    kotaAsal.appendChild(option);
  }
});

const provTujuan = document.querySelector("#provTujuan");
provTujuan.addEventListener("change", (e) => {
  const terpilih = document.querySelectorAll(".terpilihKotaTujuan");
  for (const t of terpilih) {
    t.remove();
  }
  const kotaTujuan = document.querySelector("#kotaTujuan");
  kotaTujuan.removeAttribute("disabled");
  const value = e.target.value;
  let arrayKotaTerpilih = kota.filter((city) => city.province_id == value);
  for (const kotaTerpilih of arrayKotaTerpilih) {
    const option = document.createElement("option");
    option.classList.add("terpilihKotaTujuan");
    option.setAttribute("value", kotaTerpilih.city_id);
    option.innerHTML = kotaTerpilih.city_name;
    kotaTujuan.appendChild(option);
  }
});
