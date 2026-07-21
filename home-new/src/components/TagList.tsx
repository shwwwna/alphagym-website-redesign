import ByqTag from './ByqTag';

// byq: jake-carter-list-2, restyled to match modulabs bordered chip style
function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="relative flex flex-wrap gap-3 pt-8">
      <ByqTag>jake-carter-list-2</ByqTag>
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-4 py-3 rounded-lg border border-[color:var(--cream-16)] text-[color:var(--cream-88)] text-sm font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default TagList;
