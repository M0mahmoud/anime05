import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "@/components/LoadMore";
const data = [
  {
    id: "1",
    name: "bleach",
    image: {
      original:
        "https://m.media-amazon.com/images/M/MV5BZjE0YjVjODQtZGY2NS00MDcyLThhMDAtZGQwMTZiOWNmNjRiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    },
    kind: "TV",
    episodes: 366,
    episodes_aired: 366,
    score: "7.92",
  },
  {
    id: "2",
    name: "black_clover",
    image: {
      original:
        "https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
    },
    kind: "TV",
    episodes: 170,
    episodes_aired: 170,
    score: "7.16",
  },
  {
    id: "3",
    name: "dragon_ball",
    image: {
      original:
        "https://m.media-amazon.com/images/M/MV5BMGMyOThiMGUtYmFmZi00YWM0LWJiM2QtZGMwM2Q2ODE4MzhhXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_FMjpg_UX1000_.jpg",
    },
    kind: "TV",
    episodes: 153,
    episodes_aired: 153,
    score: "8.68",
  },
  {
    id: "4",
    name: "jujutsu_kaisen",
    image: {
      original:
        "https://static.wikia.nocookie.net/jujutsu-kaisen/images/8/88/Anime_Key_Visual_2.png/revision/latest?cb=20201212034001",
    },
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "8.78",
  },
];

export default function Home() {
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <LoadMore />
    </main>
  );
}
