import "./App.css";
import React from "react";

function Yazi({ url, baslik, yazar, yorum_sayisi, puan, id }) {
  return (
    <li key={id}>
      <span>
        <a href={url}>{baslik}</a>,
      </span>
      <span>
        <b>Yazar:</b> {yazar},{" "}
      </span>
      <span>
        <b>Yorum Sayisi:</b> {yorum_sayisi},{" "}
      </span>
      <span>
        <b>Puan:</b> {puan}
      </span>
    </li>
  );
}

function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function (yazi) {
        return (
          <Yazi key={yazi.id} {...yazi}>
             
          </Yazi>
        );
      })}{" "}
    </ul>
  );
}
function Arama({ aramaMetni, onSearch }) {
  function handleChange(event) {
    onSearch(event);
  }
  return (
    <div>
      <label htmlFor="arama">Ara: </label>
      <input
        id="arama"
        type="text"
        onChange={handleChange}
        value={aramaMetni}
      />
    </div>
  );
}

function App() {
  const [aramaMetni, setAramaMetni] = React.useState(
    localStorage.getItem("aranan") || "React"
  );
  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    {
      baslik: "React Çalışmalarım",
      url: "wwww.google.com.tr",
      yazar: "cansu ardıç",
      yorum_sayisi: 9,
      puan: 5,
      id: 7,
    },
  ];

  React.useEffect(() => {
    localStorage.setItem("aranan", aramaMetni);
  }, [aramaMetni]);

  const arananYazilar = yaziListesi.filter(function (yazi) {
    return yazi.baslik.includes(aramaMetni);
  });
  // 1. asama callback handler methodu olusturma
  function handleSearch(event) {
    console.log(event.target.value);
    setAramaMetni(event.target.value);
  }
  return (
    <div>
      <h1>Merhaba!</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch}></Arama>
      <p>
        <strong>{aramaMetni} araniyor...</strong>
      </p>
      <hr />
      <Liste yazilar={arananYazilar} />
    </div>
  );
}
export default App;