export type Review = {
  author: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

// Copy reviews verbatim from the Google Business profile; the section shows cards only when this list is not empty.
export const reviews: Review[] = [
  {
    author: "Lucija Istvanic",
    rating: 5,
    text: "Pokupili tepih, oprali, dostavili ga na vrata mirisnog i čistog. Sve preporuke!",
  },
  {
    author: "Maja Barišić",
    rating: 5,
    text: "Odlična usluga čišćenja tepiha i kutne, preuzeto isti dan, vraćeno kao novo.",
  },
  {
    author: "Maja Kajgana",
    rating: 5,
    text: "Apsolutno sam odeševljena uslugom i pristupom vlasnika. Tepisi su mi vratili savršeno očišćeni, lijepo upakirani i mirišljavi. Preporuke od 💜",
  },
  {
    author: "Sanja Malec",
    rating: 5,
    text: "Svaka pohvala na brzom dogovoru, preuzimanju, i povratu. Tepisi očišćeni, mirišljavi, lijepo zapakirani.",
  },
  {
    author: "Maja Majić",
    rating: 5,
    text: "Izuzetno sam zadovoljna uslugama obrta Fresh! Sve što sam dala na čišćenje vratilo se besprijekorno čisto i mirisno. Koristila sam više njihovih usluga – od čišćenja sagova i madraca, do parnog čišćenja tepiha i zavjesa – i svaki put sam bila odeševljena rezultatom. Posebno bih istaknula uklanjanje mrlja i mirisa od kućnih ljubimaca, gdje su nadmašili moja očekivanja.\n\nOsoblje je profesionalno, ljubazno i uvijek točno! Svakako preporučujem Fresh svima koji žele pouzdanu i temeljitu uslugu čišćenja.",
  },
  {
    author: "Mia Poljak",
    rating: 5,
    text: "Jako ljubazan vlasnik, odlično odrađen posao, super cijena 👌🏻👌🏻Preporučam!",
  },
];
