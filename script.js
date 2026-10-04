const participants = [

  {
    name: "Muhammad Fariel Handani",
    status: "LULUS",
    division: "INTERNAL",
    position: "Member"
  },

  {
    name: "Jonathan Max Emor",
    status: "LULUS",
    division: "INTERNAL",
    position: "Member"
  },

  {
    name: "Widy Tri Wijaya",
    status: "TIDAK LULUS",
    division: "INTERNAL",
    position: "-"
  },

  {
    name: "Flora Friskila Sitorus",
    status: "LULUS",
    division: "INTERNAL",
    position: "Member"
  },

  {
    name: "Chelchi Ivania Purba",
    status: "TIDAK LULUS",
    division: "INTERNAL",
    position: "-"
  },

  {
    name: "Reskiani Wijhian",
    status: "TIDAK LULUS",
    division: "INTERNAL",
    position: "-"
  },

  {
    name: "Nazifa Nur Syahira",
    status: "TIDAK LULUS",
    division: "INTERNAL",
    position: "-"
  },

  {
    name: "Maisarah",
    status: "LULUS",
    division: "EXTERNAL",
    position: "Member"
  },

  {
    name: "Rizky Darmawan Gulo",
    status: "LULUS",
    division: "EXTERNAL",
    position: "Member"
  },

  {
    name: "Wirda Sunjanah Agustia Myeesha",
    status: "LULUS",
    division: "INTERNAL",
    position: "Member"
  },

  {
    name: "Akifah Nailah Ginting",
    status: "LULUS",
    division: "EXTERNAL",
    position: "Member"
  },

  {
    name: "Andika Irwan Permana",
    status: "LULUS",
    division: "EXTERNAL",
    position: "Member"
  },

  {
    name: "Izatun Nafsiah",
    status: "LULUS",
    division: "EXTERNAL",
    position: "Member"
  },

  {
    name: "Dzahya Ramadhani",
    status: "LULUS",
    division: "INTERNAL",
    position: "Member"
  },

  {
    name: "Gresya Debora Sibarani",
    status: "TIDAK LULUS",
    division: "EKSTERNAL",
    position: "-"
  },

  {
    name: "Keisya Maulidiya",
    status: "LULUS",
    division: "EXTERNAL",
    position: "Member"
  },

  {
    name: "Nawi Angelica Chelsea Silaban",
    status: "TIDAK LULUS",
    division: "EKSTERNAL",
    position: "-"
  },

  {
    name: "Moh. Riski",
    status: "TIDAK LULUS",
    division: "EKSTERNAL",
    position: "-"
  },

  {
    name: "Josh Hopely Jaya Panjaitan",
    status: "LULUS",
    division: "R&D",
    position: "Member"
  },

  {
    name: "M. Arif Rizqi Ananda",
    status: "LULUS",
    division: "R&D",
    position: "Member"
  },

  {
    name: "Aliffathan Azzikri",
    status: "LULUS",
    division: "R&D",
    position: "Member"
  },

  {
    name: "Angel Jasmine Lombu",
    status: "LULUS",
    division: "R&D",
    position: "Member"
  },

  {
    name: "Luckas Nur Ilham",
    status: "LULUS",
    division: "R&D",
    position: "Member"
  },

  {
    name: "Cellia Elpita Magdalena Sinaga",
    status: "TIDAK LULUS",
    division: "R&D",
    position: "-"
  },

  {
    name: "Nathan Abimael Pandiangan",
    status: "TIDAK LULUS",
    division: "R&D",
    position: "-"
  },

  {
    name: "Jonatan Maruli Tua Purba",
    status: "TIDAK LULUS",
    division: "R&D",
    position: "-"
  },

  {
    name: "Fabio Saputra",
    status: "TIDAK LULUS",
    division: "R&D",
    position: "-"
  },

  {
    name: "Maria Yosanta Grecele Ema",
    status: "LULUS",
    division: "RICM",
    position: "Member"
  },

  {
    name: "Monica Wendy Marjorie",
    status: "LULUS",
    division: "RICM",
    position: "Member"
  },

  {
    name: "Ameliana Alsi",
    status: "LULUS",
    division: "RICM",
    position: "Member"
  },

  {
    name: "Ilhasbi",
    status: "LULUS",
    division: "RICM",
    position: "Member"
  },

  {
    name: "Fargo Fartogi",
    status: "LULUS",
    division: "RICM",
    position: "Member"
  },

  {
    name: "Nuraini",
    status: "TIDAK LULUS",
    division: "SRD",
    position: "-"
  },

  {
    name: "Arga Diandi Rahman",
    status: "TIDAK LULUS",
    division: "SRD",
    position: "-"
  }

];


const input = document.getElementById("searchInput");
const button = document.getElementById("searchBtn");
const error = document.getElementById("error");
const section = document.getElementById("resultSection");
const card = document.getElementById("resultCard");


function normalize(text) {

  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

}


function escapeHtml(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


function showResult(person) {

  const passed =
    person.status === "LULUS";


  card.className =
    "result-card " +
    (passed ? "lulus" : "tidak-lulus");


  card.innerHTML = `

    <div class="result-top">

      <div class="status-icon">
        ${passed ? "✓" : "×"}
      </div>

      <div class="status-label">
        HASIL SELEKSI PUMA IT 2026
      </div>

      <h2>
        ${
          passed
            ? "SELAMAT, ANDA DINYATAKAN LULUS!"
            : "MOHON MAAF, ANDA DINYATAKAN TIDAK LULUS"
        }
      </h2>

      <p class="message">
        ${escapeHtml(person.name)}
      </p>

    </div>


    <div class="details">

      <div class="detail">
        <span>Nama</span>
        <span>
          ${escapeHtml(person.name)}
        </span>
      </div>

      <div class="detail">
        <span>Status</span>
        <span>
          ${escapeHtml(person.status)}
        </span>
      </div>

      <div class="detail">
        <span>Divisi</span>
        <span>
          ${escapeHtml(person.division)}
        </span>
      </div>

      <div class="detail">
        <span>Posisi</span>
        <span>
          ${escapeHtml(person.position)}
        </span>
      </div>

    </div>


    <div class="note">

      ${
        passed
          ? "Selamat! Anda dinyatakan lulus seleksi PUMA IT Tahun 2026. Silakan mengikuti rangkaian kegiatan dan tahapan selanjutnya yang diselenggarakan oleh PUMA IT."
          : "Terima kasih telah mengikuti seluruh rangkaian seleksi PUMA IT Tahun 2026. Berdasarkan hasil akhir seleksi, Anda belum dinyatakan lulus."
      }

    </div>

  `;


  section.classList.remove("hidden");


  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


function searchParticipant() {

  const query =
    normalize(input.value);


  error.textContent = "";

  section.classList.add("hidden");


  if (!query) {

    error.textContent =
      "Silakan masukkan nama terlebih dahulu.";

    input.focus();

    return;
  }


  const person =
    participants.find(
      p => normalize(p.name) === query
    );


  if (!person) {

    error.textContent =
      "Data tidak ditemukan. Pastikan nama yang dimasukkan sesuai dengan data pendaftaran.";

    return;
  }


  showResult(person);

}


button.addEventListener(
  "click",
  searchParticipant
);


input.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Enter") {

      searchParticipant();

    }

  }
);
