interface OpportunityDetailsPageProps {
  params: {
    id: string;
  };
}

export default function OpportunityDetailsPage({
  params,
}: OpportunityDetailsPageProps) {
  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-bold">
        Opportunity #{params.id}
      </h1>
    </main>
  );
}