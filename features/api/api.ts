export async function cards(): Promise<Person[]> {
  const res = await fetch("https://randomuser.me/api/?results=10");

  if (!res.ok) throw new Error("failed to fetch");

  const data = await res.json();

  return data.results;
}
