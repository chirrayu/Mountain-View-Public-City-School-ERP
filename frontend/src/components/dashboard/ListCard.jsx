import Card from "../common/Card.jsx";
import StatusPill from "../common/StatusPill.jsx";

function ListCard({ title, description, items, renderItem }) {
  return (
    <Card className="p-5">
      <div className="mb-4">
        <h2 className="font-display text-lg font-bold text-on-surface dark:text-slate-50">{title}</h2>
        {description && <p className="mt-1 text-sm text-on-surface-variant dark:text-slate-400">{description}</p>}
      </div>
      <div className="divide-y divide-outline-variant dark:divide-slate-800">
        {items.map((item, index) => (
          <div className="py-3 first:pt-0 last:pb-0" key={item.title || item.name || index}>
            {renderItem ? (
              renderItem(item)
            ) : (
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-on-surface dark:text-slate-100">{item.title || item}</p>
                  {item.detail && <p className="mt-1 text-sm text-on-surface-variant dark:text-slate-400">{item.detail}</p>}
                </div>
                {item.status && <StatusPill tone="neutral">{item.status}</StatusPill>}
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

export default ListCard;
