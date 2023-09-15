import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import MoviesClient from "../MoviesClient";
import getSearchResults, {
  ISearchParams,
} from "@/app/actions/getSearchResults";

interface SearchPageProps {
  searchParams: ISearchParams;
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const results = await getSearchResults(searchParams);

  if (!results) {
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
        <MoviesClient movies={results} />
      </Container>
    </ClientOnly>
  );
};

export default SearchPage;
