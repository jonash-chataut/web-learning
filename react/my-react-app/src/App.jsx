import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Card from "./card.jsx";

function App() {
  return (
    <>
      <Header></Header>

      <Card
        src="https://s.yimg.com/ny/api/res/1.2/w29cUdzQ3N0fUjzjoBPpwg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTk0NTtjZj13ZWJw/https://media.zenfs.com/en/know_your_meme_909/65a23d4ab7cfc126c71a703b05865a7c"
        name="Dictator Mbappe"
        age={27}
        desc="Football dictator 🫡"
        isDisplay={true}
      ></Card>

      <Card
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJlFdBv0Xhvg1c6u6uzLPtc1OIghGArcKvg&s"
        name="Talibani Messi"
        age={37}
        desc="💥💥💥"
        isDisplay={true}
      ></Card>

      <Card
        src="https://s2.glbimg.com/jSsV7mSJgTzq1nXdxCxjxm0rrLk=/620x470/smart/s.glbimg.com/es/ge/f/original/2016/12/25/c0h5j7zveaaeo-_.jpg"
        name="Kisstiano Ronaldo"
        age={47}
        desc="⚽💑⚽"
        isDisplay={true}
      ></Card>
      <Card
        src="https://media1.tenor.com/m/o_pLuNvBgrcAAAAd/speed-kawaii.gif"
        name="Gayshow Speed"
        age={16}
        desc="🌈🏳️‍🌈🌈"
        isDisplay={true}
      ></Card>

      <Card
        src="https://www.hindustantimes.com/ht-img/img/2024/06/07/1600x900/MS-Dhoni-lookalike-pak-vs-US-match-viral_1717748937538_1717748949647.jpg"
        name="77777777"
        age={7777}
        desc="7️⃣7️⃣7️⃣7️⃣"
        isDisplay={true}
      ></Card>

      <Footer></Footer>
    </>
  );
}

export default App;
