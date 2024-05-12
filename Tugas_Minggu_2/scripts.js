const departureSchedule = [
  { kereta: "Papandayan", origin: "Jakarta", destination: "Bandung", time: "08:00 WIB", price: 100000 },
  { kereta: "Malabar", origin: "Bandung", destination: "Semarang", time: "10:00 WIB", price: 200000 },
  { kereta: "Kertajaya", origin: "Surabaya", destination: "Jakarta", time: "12:00 WIB", price: 350000 },
];

function searchTrain() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const searchResult = document.getElementById("searchResult");
  searchResult.innerHTML = "";

  const results = departureSchedule.filter((schedule) => schedule.kereta.toLowerCase().includes(searchInput) || schedule.destination.toLowerCase().includes(searchInput));

  if (results.length === 0) {
    searchResult.innerHTML = '<p style="text-align: center;">Tidak ditemukan jadwal untuk pencarian ini.</p>';
  } else {
    results.forEach((schedule) => {
      const ticket = document.createElement("div");
      ticket.classList.add("ticket");
      ticket.innerHTML = `
      <h3>${schedule.kereta}</h3>
        <p>${schedule.origin} ke ${schedule.destination} pukul ${schedule.time}</p>
        <p>Harga: Rp ${schedule.price.toLocaleString()}</p>
        <button onclick="pesanTiket('${schedule.kereta}', '${schedule.origin}', '${schedule.destination}', '${schedule.time}', ${schedule.price})">Pesan Tiket</button>
      `;
      searchResult.appendChild(ticket);
    });
  }
}

function pesanTiket(kereta, origin, destination, time, price) {
  alert(`Anda memesan tiket untuk kereta ${kereta} dari ${origin} ke ${destination} pukul ${time} dengan harga Rp ${price.toLocaleString()}.`);
}
