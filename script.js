// tangkap element absensi form
let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');

// master data absensi
let data_absensi = [];

// tambah eventlistener untuk formnya
absensi_form.addEventListener('submit', (event) => {
  // stop form dari reload
  event.preventDefault();

  // console.info(event.target.username.value);

  let username = event.target.username.value;
  // console.info(username);

  // push data ke dalam array data_absensi
  data_absensi.push({
    nama_lengkap: username,
    waktu: replaceDate(),
  });

  // reset input
  event.target.username.value = '';

  // console.info(data_absensi);

  // panggil function render html
  renderToHTML();
});

// function render data array ke html
function renderToHTML() {
  root.innerHTML = '';

  // mapping data array data_absensi
  data_absensi.forEach((e, i) => {
    // x += 1   x + 1
    root.innerHTML += `
    <div class="card" draggable="true" ondragend="deleteAbsensi(${i})">
      ${e.nama_lengkap} <span>${e.waktu}</span>
    </div>
    
    
    
    
    `;
  });
}

// delete absensi
function deleteAbsensi(index) {
  console.info(index);
  // delete data dalam array sesuai index
  data_absensi.splice(index, 1);

  // panggil kembali function render to HTML
  renderToHTML();
}

// function replace date
function replaceDate() {
  let d = new Date();
  let date = d.toLocaleDateString();
  let time = d.toLocaleTimeString();
  return `${date} - ${time}`;
}
