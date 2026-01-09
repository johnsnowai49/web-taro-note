import { useState, useMemo } from "preact/hooks";

interface Post {
    id: string;
    data: {
        title: string;
        description: string;
        pubDate: Date;
        tags?: string[];
    };
}

interface Tag {
    name: string;
    count: number;
}

interface SearchProps {
    posts: Post[];
    tags: Tag[];
}

export default function Search({ posts, tags }: SearchProps) {
    const [query, setQuery] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const filteredPosts = useMemo(() => {
        // 1. Filter by text query
        let filtered = posts;
        if (query) {
            const lowerQuery = query.toLowerCase();
            filtered = filtered.filter((post) => {
                const titleMatch = post.data.title.toLowerCase().includes(lowerQuery);
                const descMatch = post.data.description.toLowerCase().includes(lowerQuery);
                return titleMatch || descMatch;
            });
        }

        // 2. Filter by selected tags (AND logic: post must contain ALL selected tags)
        if (selectedTags.length > 0) {
            filtered = filtered.filter((post) => {
                const postTags = post.data.tags || [];
                return selectedTags.every((tag) => postTags.includes(tag));
            });
        }

        return filtered;
    }, [posts, query, selectedTags]);

    const toggleTag = (tagName: string) => {
        setSelectedTags((prev) =>
            prev.includes(tagName)
                ? prev.filter((t) => t !== tagName)
                : [...prev, tagName]
        );
    };

    return (
        <div class="w-full max-w-4xl mx-auto my-8">
            {/* Search Bar Container */}
            <div class="mb-4 p-2 border border-skin-line rounded-lg bg-skin-fill/90 backdrop-blur-sm shadow-sm focus-within:ring-2 focus-within:ring-skin-accent flex flex-wrap gap-2 items-center transition-all">

                {/* Selected Tags Chips */}
                {selectedTags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        class="flex items-center gap-1 px-2 py-1 text-sm bg-skin-accent text-skin-inverted rounded-md hover:bg-opacity-80 hover:bg-space-sand hover:cursor-pointer transition-colors"
                    >
                        <span>{tag}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                ))}

                {/* Text Input */}
                <div class="flex-grow flex items-center min-w-[150px]">
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={query}
                        onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
                        class="w-full bg-transparent text-skin-base focus:outline-none"
                    />
                </div>

                {/* Search Icon */}
                <div class="pr-2 text-gray-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>

            {/* Available Tags Cloud */}
            <div class="flex flex-wrap items-center justify-center gap-2 mb-8">
                {tags.filter(tag => !selectedTags.includes(tag.name)).map((tag) => (
                    <button
                        key={tag.name}
                        onClick={() => toggleTag(tag.name)}
                        class="text-xs px-3 py-1  rounded-full transition-colors border bg-skin-card text-skin-base border-skin-line hover:border-skin-accent"
                    >
                        {tag.name} ({tag.count})
                    </button>
                ))}
            </div>

            {/* Post List - Scrollable */}
            <div class="space-y-2">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <a
                            key={post.id}
                            href={`/blog/${post.id}`}
                            class="block p-6 border border-skin-line rounded-lg hover:bg-skin-card-muted transition-colors text-left group"
                        >
                            <h3 class="text-xl font-bold text-skin-accent mb-2 group-hover:underline decoration-dashed underline-offset-4">
                                {post.data.title}
                            </h3>
                            <div class="text-sm text-skin-muted mb-2">
                                {new Date(post.data.pubDate).toLocaleDateString()}
                            </div>
                            <p class="text-base text-skin-base text-balance">{post.data.description}</p>
                            {post.data.tags && post.data.tags.length > 0 && (
                                <div class="mt-3 flex gap-2">
                                    {post.data.tags.map(t => <span class="text-xs text-skin-muted">#{t}</span>)}
                                </div>
                            )}
                        </a>
                    ))
                ) : (
                    <p class="text-center text-gray-500 py-12">No posts found matching your criteria.</p>
                )}
            </div>
        </div>
    );
}
