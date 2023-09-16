export const dynamic = "force-dynamic";

import { Suspense } from "react";
import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import getSearchResults, {
  ISearchParams,
} from "@/app/actions/getSearchResults";
import MovieCard from "@/app/components/cards/MovieCard";
import Loading from "@/app/loading";

interface SearchPageProps {
  searchParams: ISearchParams;
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const results = await getSearchResults(searchParams);

  if (results.length === 0) {
    return (
      <ClientOnly>
        <Container>
          <EmptyState title="No movies found" />
        </Container>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="w-full py-24">
          <Suspense fallback={<Loading />}>
            <div className="w-full grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
              {results.map((movie: any) => {
                return <MovieCard key={movie.id} data={movie} />;
              })}
            </div>
          </Suspense>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default SearchPage;
