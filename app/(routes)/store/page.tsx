
import ClientStorePage from "./components/ClientStorePage ";

interface StorePageProps {
  readonly searchParams?: { [key: string]: string | string[] | undefined };
}


export default function Page({ searchParams }: StorePageProps) {
  const category = searchParams?.category || "todos";
  return (
    <ClientStorePage  category_lan={category} />
  );
}
