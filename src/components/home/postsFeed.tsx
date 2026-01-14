import { XMLParser } from 'fast-xml-parser';
import { useState, useEffect } from 'react';

interface Post {
  title: string;
  url: string;
  date: string;
}

const fetchPosts = async () => {
  try {
    const response = await fetch('https://medium.com/feed/@anthonytrama');
    const responseText = await response.text();
    const data = new XMLParser().parse(responseText);
    const posts: Post[] = data.rss.channel.item.map((item: any) => ({
      title: item.title,
      url: item.link,
      date: new Date(item.pubDate).toLocaleDateString('en-US'),
    }));
    return posts;
  } catch (error) {
    return [];
  }
};

type AllPostsProps = { postList: Post[] };

function AllPosts({ postList }: AllPostsProps) {
  return (
    <>
      {postList.map((post) => (
        <article key={post.url}>
          <h1>
            <a href={post.url}>{post.title}</a>
          </h1>
          <p className="post-meta">{post.date}</p>
          <a href="{post.url}">Read on Medium...</a>
        </article>
      ))}
      <p>
        <a href="https://medium.com/@anthonytrama">All posts</a>
      </p>
    </>
  );
}

function PostsFeed() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    let mounted = true;
    debugger;
    fetchPosts().then((postList) => {
      if (mounted) setPosts(postList);
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="posts">
      {posts.length > 1 ? (
        <AllPosts postList={posts} />
      ) : (
        <p>
          View my writinng on{' '}
          <a href="https://medium.com/@anthonytrama">Medium</a>
        </p>
      )}
    </div>
  );
}

export default PostsFeed;
