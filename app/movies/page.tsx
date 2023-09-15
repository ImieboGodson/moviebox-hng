// import { results } from "@/db.json";
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import MoviesClient from "./MoviesClient";

export default function MoviesPage() {
  const results: any = [];

  if (!results) {
    return (
      <ClientOnly>
        <Container>
          <EmptyState title="No movies available" />
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
}
