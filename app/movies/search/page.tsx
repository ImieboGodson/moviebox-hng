import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import getSearchResults, {
  ISearchParams,
} from "@/app/actions/getSearchResults";
import SearchClient from "./SearchClient";

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
        <SearchClient movies={results} />
      </Container>
    </ClientOnly>
  );
};

export default SearchPage;
