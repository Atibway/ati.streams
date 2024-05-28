import { getDiscoverMovies } from "@/lib/getMovies";
import HeroCorosal from "./HeroCorosal";

interface Props {
  id?: string;
  keywords?: string;
}
const CaroselBanner = async ({ id, keywords }: Props) => {
  const movies = await getDiscoverMovies(id, keywords);

  return <HeroCorosal movies={movies} />;
};

export default CaroselBanner;
