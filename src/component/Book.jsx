import { useState } from "react";
import { Info, Heart, Search } from "lucide-react";

export default function App() {
  const databuku = [
    {
      id: 1,
      judul: "Laskar Pelangi",
      penulis: "Andrea Hirata",
      penerbit: "Bentang Pustaka",
      tahun_terbit: 2005,
      image: "https://i.pinimg.com/564x/10/dc/06/10dc06814790d2159ade8a25ac61fa24.jpg",
      genre: "Roman",
      sinopsis: "Kisah suka duka kehidupan anak-anak murid SD dari keluarga miskin di Desa Belitung. Meski hari-hari mereka selalu dipenuhi tantangan dan keterbatasan, namun hal itu tak menyurutkan tekad mereka untuk tetap bersekolah demi meraih impian dan cita-cita."
    },
    {
      id: 2,
      judul: "Gadis Kretek",
      penulis: "Ratih Kumala",
      penerbit: "Gramedia Pustaka Utama",
      tahun_terbit: 2023,
      image: "https://i.pinimg.com/564x/40/10/30/401030e717753c4294012d9226bbf15b.jpg",
      genre: "Laga,Roman,periode sejarah",
      sinopsis: "[Gadis Kretek] karya Ratih Kumala bercerita tentang Soeraja, pria tua yang mendekati ajal dan menyebut nama Jeng Yah, wanita misterius dari masa lalunya. Anak-anaknya berusaha menemukan Jeng Yah, mengungkap kisah cinta masa lalu ayah mereka, dan sejarah industri rokok kretek di Indonesia."
    },
    {
      id: 3,
      judul: "Dilan",
      penulis: "Pidi Baiq",
      penerbit: "Pastel Books",
      tahun_terbit: 2014,
      image: "https://i.pinimg.com/564x/8f/82/ba/8f82ba34241d0620c96e2b9eb0f66eef.jpg",
      genre: "Roman,action",
      sinopsis: "[Dilan: Dia Adalah Dilanku Tahun 1990] karya Pidi Baiq bercerita tentang kisah cinta remaja antara Milea dan Dilan di Bandung tahun 1990. Dilan, dengan caranya yang unik dan romantis, mendekati Milea, membawa kisah cinta yang manis dan penuh kejutan."
    },
    {
      id: 4,
      judul: "Dikta dan Hukum ",
      penulis: "Dhia’an Farah",
      penerbit: "Coconut Books",
      tahun_terbit: 2021,
      image: "https://cdn.gramedia.com/uploads/items/dikta_dan_hukum.jpg",
      genre: "Roman",
      sinopsis: "[Dikta dan Hukum] bercerita tentang hubungan rumit antara Dikta dan Nadhira, dua sahabat yang dekat sejak kecil. Dikta yang cerdas namun memiliki masalah keluarga, menyimpan perasaan untuk Nadhira, tetapi hubungan mereka terhalang oleh berbagai konflik, termasuk penyakit yang diderita Dikta. Kisah ini mengeksplorasi cinta, persahabatan, dan perjuangan menghadapi tantangan hidup."
    },
    {
      id: 5,
      judul: "Confession",
      penulis: "Minato Kanae",
      penerbit: "HarperCollins",
      tahun_terbit: 2008,
      image: "https://cdn.gramedia.com/uploads/items/9786025385889_Confessions.jpg",
      genre: "Psychological thriller",
      sinopsis: "[Confession] karya Minato Kanae bercerita tentang seorang guru, Yuko Moriguchi, yang mengungkapkan kebenaran di balik kematian putrinya dalam sebuah pengumuman di kelas. Ia menyalahkan dua siswa, yang ternyata terlibat dalam kejadian tragis tersebut. Cerita ini mengungkap lapisan-lapisan emosional, balas dendam, dan konsekuensi dari tindakan yang diambil, mengajak pembaca untuk melihat perspektif berbeda dari setiap karakter."
    },
    {
      id: 6,
      judul: "Saat-Saat Jauh",
      penulis: "Lia Seplia",
      penerbit: "Penerbit Suka-Suka",
      tahun_terbit: 2020,
      image: "https://ebooks.gramedia.com/ebook-covers/70753/image_highres/BLK_MSJ2022581155.jpg",
      genre: "Romansa",
      sinopsis: "[Saat-Saat Jauh] menceritakan tentang kisah cinta antara Lia dan Arka yang terpisah oleh jarak dan waktu. Meskipun menghadapi berbagai rintangan dan kesulitan, mereka berusaha mempertahankan hubungan mereka melalui komunikasi dan kenangan indah yang mereka bagikan. Novel ini mengeksplorasi tema cinta sejati, harapan, dan pengorbanan dalam menghadapi tantangan."
    },
    {
      id: 7,
      judul: "Septihan",
      penulis: "Poppi Pertiwi",
      penerbit: "Penerbit Haru",
      tahun_terbit: 2021,
      image: "https://cdn.gramedia.com/uploads/items/Cover_Septihan.jpeg",
      genre: "Romansa",
      sinopsis: "[Septihan] bercerita tentang kisah cinta antara Septi dan Thian, yang tumbuh di tengah konflik keluarga dan tekanan dari lingkungan sekitar. Mereka berusaha menjaga hubungan mereka meskipun menghadapi banyak rintangan. Cerita ini menggambarkan perjalanan emosional mereka, tantangan yang harus dihadapi, dan bagaimana cinta bisa mengubah hidup seseorang."
    },
    {
      id: 8,
      judul: "Kekasih Musim Gugur",
      penulis: "Laksmi Pamuntjak",
      penerbit: "Penerbit KPG(Kepustakaan Populer Gramedia)",
      tahun_terbit: 2014,
      image:"https://cdn.gramedia.com/uploads/items/9786020642703_Cover_Kekasih_Musim_Gugur-1.jpg",
      genre: "Romansa",
      sinopsis: "[Kekasih Musim Gugur] menceritakan tentang kisah cinta yang kompleks antara seorang wanita bernama Nadira dan dua pria, yaitu Jati dan Ewan. Dalam perjalanan hidupnya, Nadira harus menghadapi pilihan yang sulit antara cinta dan impian, serta menghadapi masa lalu yang menyakitkan. Novel ini mengeksplorasi tema cinta, kehilangan, dan pencarian jati diri."
    },
  ];



  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("id"); 
  const [likedBooks, setLikedBooks] = useState([]); 
  const [showPopup, setShowPopup] = useState(false); 
  const [selectedBook, setSelectedBook] = useState(null); 

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const handleSortOrder = (e) => {
    setSortOrder(e.target.value);
  };

  const handleLikeClick = (id) => {
    if (likedBooks.includes(id)) {
      setLikedBooks(likedBooks.filter((bookId) => bookId !== id));
    } else {
      setLikedBooks([...likedBooks, id]);
    }
  };

  const handleInfoClick = (buku) => {
    setSelectedBook(buku);
    setShowPopup(true); 
  };

  const closePopup = () => {
    setShowPopup(false); 
    setSelectedBook(null); 
  };

  const filteredBooks = databuku
    .filter((buku) =>
      buku.judul.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "id") {
        return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
      } else if (sortBy === "judul") {
        return sortOrder === "asc"
          ? a.judul.localeCompare(b.judul)
          : b.judul.localeCompare(a.judul);
      } else if (sortBy === "tahun_terbit") {
        return sortOrder === "asc"
          ? a.tahun_terbit - b.tahun_terbit
          : b.tahun_terbit - a.tahun_terbit;
      }
      return 0;
    });

  return (
    <div>
      <h1>Daftar Buku</h1>
      
      <div className="search-bar">
        <Search />
        <input
          type="text"
          placeholder="Cari Buku..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      
      <div className="sort-controls">
        <label>Sort By: </label>
        <select value={sortBy} onChange={handleSort}>
          <option value="id">ID</option>
          <option value="judul">Judul</option>
          <option value="tahun_terbit">Tahun Terbit</option>
        </select>
        
        <label>Order: </label>
        <select value={sortOrder} onChange={handleSortOrder}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <ul>
        {filteredBooks.map((buku) => (
          <li key={buku.id}>
            <h2>{buku.judul}</h2>
            <img src={buku.image} alt={buku.judul} className="book-image" />
            <p>Tahun Terbit: {buku.tahun_terbit}</p>
            <button className="heart-button">
              <Heart 
                size={30} 
                className="love" 
                onClick={() => handleLikeClick(buku.id)} 
                stroke="black" 
                fill={likedBooks.includes(buku.id) ? "red" : "white"} 
                style={{ cursor: 'pointer' }}
              />          
            </button>
            
            <button onClick={() => handleInfoClick(buku)}>
              <Info />
            </button>
          </li>
        ))}
      </ul>
      {showPopup && selectedBook && (
        <div className="popup">
          <h3>Detail Buku</h3>
          <p>Judul: {selectedBook.judul}</p>
          <p>Penulis: {selectedBook.penulis}</p>
          <p>Penerbit: {selectedBook.penerbit}</p>
          <p>Tahun Terbit: {selectedBook.tahun_terbit}</p>
          <p>Genre: {selectedBook.genre}</p>
          <p>Sinopsis: {selectedBook.sinopsis}</p>
          <img src={selectedBook.image} alt={selectedBook.judul} className="book-image" />
          <button onClick={closePopup}>Tutup</button>
        </div>
      )}
    </div>
  );
}
