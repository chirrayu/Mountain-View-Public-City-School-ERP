import EmptyState from "../../components/common/EmptyState.jsx";
import PageHeader from "../../components/common/PageHeader.jsx";

function PlaceholderPage({ title, description }) {
  return (
    <>
      <PageHeader title={title} description={description} />
      <EmptyState
        title="Coming Soon"
        description={`${title} workflows will be added in a later phase. Phase 1 keeps this area ready with navigation, access control, and responsive layout.`}
      />
    </>
  );
}

export default PlaceholderPage;
