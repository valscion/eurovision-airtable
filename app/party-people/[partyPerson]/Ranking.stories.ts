import type { Meta, StoryObj } from "@storybook/react";
import { Ranking } from "./Ranking";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Ranking> = {
  component: Ranking,
  args: { records: [] },
};

export default meta;
type Story = StoryObj<typeof Ranking>;

export const Unranked: Story = {
  args: {
    records: [
      {
        fields: {
          Country: "United Kingdom",
          Ordinal: 1,
          Duration: 199,
          Artist: "Mae Muller",
          Song: "I Wrote A Song",
          Flag: "🇬🇧",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=tJ21grjN6wU&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=1",
        },
        id: "rec6QYPHGHoZMz4hb",
      },
      {
        fields: {
          Country: "Croatia",
          Ordinal: 2,
          Duration: 166,
          Artist: "Let 3",
          Song: "Mama ŠČ!",
          Flag: "🇭🇷",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=AyKj8jA0Qoc&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=2",
        },
        id: "recwggo3NjzkqIukB",
      },
      {
        fields: {
          Country: "Norway",
          Ordinal: 3,
          Duration: 189,
          Artist: "Alessandra",
          Song: "Queen Of Kings",
          Flag: "🇳🇴",
          "Video type": "National Final Performance",
          YouTube:
            "https://www.youtube.com/watch?v=zt7U0-N1mlk&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=3",
        },
        id: "recejR6KhcNmfaeOh",
      },
      {
        fields: {
          Country: "France",
          Ordinal: 4,
          Duration: 196,
          Artist: "La Zarra",
          Song: "Évidemment",
          Flag: "🇫🇷",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=GWfbEFH9NvQ&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=4",
        },
        id: "recn6utAQ3FolLOo8",
      },
      {
        fields: {
          Country: "Israel",
          Ordinal: 5,
          Duration: 193,
          Artist: "Noa Kirel",
          Song: "Unicorn",
          Flag: "🇮🇱",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=r4wbdKmM3bQ&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=5",
        },
        id: "rec2nXVAePneyr7CO",
      },
      {
        fields: {
          Country: "Sweden",
          Ordinal: 6,
          Duration: 197,
          Artist: "Loreen",
          Song: "Tattoo",
          Flag: "🇸🇪",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=b3vJfR81xO0&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=6",
        },
        id: "recmPYKLrBLgpEBPW",
      },
      {
        fields: {
          Country: "Austria",
          Ordinal: 7,
          Duration: 171,
          Artist: "Teya & Salena",
          Song: "Who The Hell Is Edgar?",
          Flag: "🇦🇹",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=ZMmLeV47Au4&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=7",
        },
        id: "recQ65A6vcbQA4lXz",
      },
      {
        fields: {
          Country: "Czechia",
          Ordinal: 8,
          Duration: 188,
          Artist: "Vesna",
          Song: "My Sister's Crown",
          Flag: "🇨🇿",
          "Video type": "Official Video",
          YouTube:
            "https://www.youtube.com/watch?v=-y78qgDlzAM&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=8",
        },
        id: "rec6KWSX3CQ0hjkXM",
      },
      {
        fields: {
          Country: "Netherlands",
          Ordinal: 9,
          Duration: 197,
          Artist: "Mia Nicolai & Dion Cooper",
          Song: "Burning Daylight",
          Flag: "🇳🇱",
          "Video type": "Official Video",
          YouTube:
            "https://www.youtube.com/watch?v=UOf-oKDlO6A&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=9",
        },
        id: "rec1eM1M0xt5tsNuP",
      },
      {
        fields: {
          Country: "Serbia",
          Ordinal: 10,
          Duration: 191,
          Artist: "Luke Black",
          Song: "Samo Mi Se Spava",
          Flag: "🇷🇸",
          "Video type": "National Final Performance",
          YouTube:
            "https://www.youtube.com/watch?v=oeIVwYUge8o&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=10",
        },
        id: "rec5VWaz6Byui0VSC",
      },
      {
        fields: {
          Country: "Armenia",
          Ordinal: 11,
          Duration: 181,
          Artist: "Brunette",
          Song: "Future Lover",
          Flag: "🇦🇲",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=Co8ZJIejXBA&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=11",
        },
        id: "recCVetppFyh14yaI",
      },
      {
        fields: {
          Country: "Slovenia",
          Ordinal: 12,
          Duration: 190,
          Artist: "Joker Out",
          Song: "Carpe Diem",
          Flag: "🇸🇮",
          "Video type": "Official Video",
          YouTube:
            "https://www.youtube.com/watch?v=zDBSIGITdY4&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=12",
        },
        id: "recieyet0tP2YIwUb",
      },
      {
        fields: {
          Country: "Australia",
          Ordinal: 13,
          Duration: 195,
          Artist: "Voyager",
          Song: "Promise",
          Flag: "🇦🇺",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=aqtu2GspT80&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=13",
        },
        id: "recx6hBYa6a162GN9",
      },
      {
        fields: {
          Country: "Lithuania",
          Ordinal: 14,
          Duration: 191,
          Artist: "Monika Linkytė",
          Song: "Stay",
          Flag: "🇱🇹",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=68lbEUDuWUQ&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=14",
        },
        id: "recGSOVTmYmjKiH2i",
      },
      {
        fields: {
          Country: "Italy",
          Ordinal: 15,
          Duration: 240,
          Artist: "Marco Mengoni",
          Song: "Due Vite",
          Flag: "🇮🇹",
          "Video type": "National Final Performance",
          YouTube:
            "https://www.youtube.com/watch?v=N4HBDAbdXUg&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=15",
        },
        id: "rec3fJf33Gd3d4B8c",
      },
      {
        fields: {
          Country: "Finland",
          Ordinal: 16,
          Duration: 194,
          Artist: "Käärijä",
          Song: "Cha Cha Cha",
          Flag: "🇫🇮",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=znWi3zN8Ucg&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=16",
        },
        id: "recQDWNkK9g7OUHDC",
      },
      {
        fields: {
          Country: "Spain",
          Ordinal: 17,
          Duration: 204,
          Artist: "Blanca Paloma",
          Song: "Eaea",
          Flag: "🇪🇸",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=NGnEoSypBhE&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=17",
        },
        id: "recYUYP0CWSThTlgF",
      },
      {
        fields: {
          Country: "Romania",
          Ordinal: 18,
          Duration: 196,
          Artist: "Theodor Andrei",
          Song: "D.G.T. (Off And On)",
          Flag: "🇷🇴",
          "Video type": "National Final Performance",
          YouTube:
            "https://www.youtube.com/watch?v=NRxv-AUCinQ&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=18",
        },
        id: "recz32yAHd29AkJ7G",
      },
      {
        fields: {
          Country: "Portugal",
          Ordinal: 19,
          Duration: 189,
          Artist: "Mimicat",
          Song: "Ai Coração",
          Flag: "🇵🇹",
          "Video type": "National Final Performance",
          YouTube:
            "https://www.youtube.com/watch?v=wa3suiOzAAk&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=19",
        },
        id: "rec4pAOL834FcjKPX",
      },
      {
        fields: {
          Country: "Switzerland",
          Ordinal: 20,
          Duration: 186,
          Artist: "Remo Forrer",
          Song: "Watergun",
          Flag: "🇨🇭",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=_8-Sbc_GZMc&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=20",
        },
        id: "recNkRWjwGuL68D1F",
      },
      {
        fields: {
          Country: "Ukraine",
          Ordinal: 21,
          Duration: 164,
          Artist: "TVORCHI",
          Song: "Heart Of Steel (Eurovision Version)",
          Flag: "🇺🇦",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=neIscK1hNxs&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=21",
        },
        id: "recFKtkcY5BQ5Qh9s",
      },
      {
        fields: {
          Country: "Azerbaijan",
          Ordinal: 22,
          Duration: 211,
          Artist: "TuralTuranX",
          Song: "Tell Me More",
          Flag: "🇦🇿",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=5dvsr-L3HgY&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=22",
        },
        id: "recypFNTatO5YC8z2",
      },
      {
        fields: {
          Country: "Poland",
          Ordinal: 23,
          Duration: 169,
          Artist: "Blanka",
          Song: "Solo",
          Flag: "🇵🇱",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=Jjsl-JCHDWE&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=23",
        },
        id: "reco8UtcGFAdLsJmp",
      },
      {
        fields: {
          Country: "Greece",
          Ordinal: 24,
          Duration: 200,
          Artist: "Victor Vernicos",
          Song: "What They Say",
          Flag: "🇬🇷",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=qL0EkId_sTY&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=24",
        },
        id: "recxOe3fdjRsLm9yC",
      },
      {
        fields: {
          Country: "San Marino",
          Ordinal: 25,
          Duration: 193,
          Artist: "Piqued Jacks",
          Song: "Like An Animal",
          Flag: "🇸🇲",
          "Video type": "National Final Performance",
          YouTube:
            "https://www.youtube.com/watch?v=Hjfq-T-8WHw&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=25",
        },
        id: "rec1FovRHzdFNTfkV",
      },
      {
        fields: {
          Country: "Albania",
          Ordinal: 26,
          Duration: 214,
          Artist: "Albina & Familja Kelmendi",
          Song: "Duje",
          Flag: "🇦🇱",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=mp8OG4ApocI&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=26",
        },
        id: "recUdI5HdPltkOi2a",
      },
      {
        fields: {
          Country: "Malta",
          Ordinal: 27,
          Duration: 184,
          Artist: "The Busker",
          Song: "Dance (Our Own Party)",
          Flag: "🇲🇹",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=Apqwl0ayL6A&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=27",
        },
        id: "recaoHmcGXXxgwNhM",
      },
      {
        fields: {
          Country: "Ireland",
          Ordinal: 28,
          Duration: 185,
          Artist: "Wild Youth",
          Song: "We Are One",
          Flag: "🇮🇪",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=ak5Fevs424Y&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=28",
        },
        id: "recRubWfSbSGqKHwE",
      },
      {
        fields: {
          Country: "Belgium",
          Ordinal: 29,
          Duration: 194,
          Artist: "Gustaph",
          Song: "Because Of You",
          Flag: "🇧🇪",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=ORhEoS6d8e4&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=29",
        },
        id: "recAFi3rss4bau1i5",
      },
      {
        fields: {
          Country: "Cyprus",
          Ordinal: 30,
          Duration: 188,
          Artist: "Andrew Lambrou",
          Song: "Break A Broken Heart",
          Flag: "🇨🇾",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=zrFUKqTy4zI&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=30",
        },
        id: "recGPWV2nYKyKdkVw",
      },
      {
        fields: {
          Country: "Denmark",
          Ordinal: 31,
          Duration: 180,
          Artist: "Reiley",
          Song: "Breaking My Heart",
          Flag: "🇩🇰",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=uWs69ddGEW4&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=31",
        },
        id: "recSWrQBbiDRRevzi",
      },
      {
        fields: {
          Country: "Iceland",
          Ordinal: 32,
          Duration: 201,
          Artist: "Diljá",
          Song: "Power",
          Flag: "🇮🇸",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=BhlJXcCv7gw&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=32",
        },
        id: "recmFbcLiHHZ35Vw8",
      },
      {
        fields: {
          Country: "Estonia",
          Ordinal: 33,
          Duration: 208,
          Artist: "Alika",
          Song: "Bridges",
          Flag: "🇪🇪",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=wO9g5t3VSuw&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=33",
        },
        id: "rectFdACDIJnFDuV0",
      },
      {
        fields: {
          Country: "Germany",
          Ordinal: 34,
          Duration: 188,
          Artist: "Lord Of The Lost",
          Song: "Blood & Glitter",
          Flag: "🇩🇪",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=Y12_YMs9kCQ&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=34",
        },
        id: "receHvBIXBJjjLQCu",
      },
      {
        fields: {
          Country: "Latvia",
          Ordinal: 35,
          Duration: 193,
          Artist: "Sudden Lights",
          Song: "Aijā",
          Flag: "🇱🇻",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=XRV2-jPqaUw&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=35",
        },
        id: "recTTjidZ9PHen1WS",
      },
      {
        fields: {
          Country: "Georgia",
          Ordinal: 36,
          Duration: 199,
          Artist: "Iru",
          Song: "Echo",
          Flag: "🇬🇪",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=E8kO-QPippo&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=36",
        },
        id: "recUpjVpXbCcqSPsS",
      },
      {
        fields: {
          Country: "Moldova",
          Ordinal: 37,
          Duration: 190,
          Artist: "Pasha Parfeni",
          Song: "Soarele şi Luna",
          Flag: "🇲🇩",
          "Video type": "Official Music Video",
          YouTube:
            "https://www.youtube.com/watch?v=se9LDgFW6ak&list=PLmWYEDTNOGUIr757MlL8s9iyvYx-0lToh&index=37",
        },
        id: "recdOyHSZuDFnq3da",
      },
    ],
  },
};
