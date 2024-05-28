import CaroselBanner from "@/components/CaroselBanner";
import MovieContainer from "@/components/MovieContainer";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

const Home = async () => {
  const nowplayingMovies = await getNowPlayingMovies();
  const upcomingMovies = await getUpcomingMovies();
  const topcomingMovies = await getTopRatedMovies();
  const popularmovies = await getPopularMovies();

  return (
    <div>
      <CaroselBanner />
      <div className="flex flex-col space-y-2">
        <MovieContainer movies={nowplayingMovies} title="Now Playing" />
        <MovieContainer movies={upcomingMovies} title="Upcoming" />
        <MovieContainer movies={topcomingMovies} title="Top Rated" />
        <MovieContainer movies={popularmovies} title="Popular" />
      </div>
    </div>
  );
};

export default Home;
