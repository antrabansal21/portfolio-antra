import React from 'react';
import { Container, Badge } from 'react-bootstrap';
import { blogPosts } from '../data/blogData';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import './SingleBlog.css';

const SingleBlog = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Container className="py-5 text-center">
        <h3>404 - Blog not found</h3>
        <Link to="/blogs" className="btn btn-primary mt-3">Back to Blogs</Link>
      </Container>
    );
  }

  const readTime = Math.ceil(post.content.split(' ').length / 200);

  return (
    <Container className="single-blog py-5">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        {/* Cover Image */}
        {post.coverImage && (
          <div className="blog-cover mb-4">
            <img src={post.coverImage} alt="cover" className="img-fluid rounded shadow-sm" />
          </div>
        )}
        {/* Title & Meta */}
        <h1 className="blog-title mb-3">{post.title}</h1>
        <p className="blog-meta text-muted">
          <strong>By {post.author}</strong> • {new Date(post.date).toLocaleDateString()} • {readTime} min read
        </p>
        {/* Tags */}
        <div className="mb-4">
          {post.tags.map((tag, i) => (
            <Badge key={i} className="blog-tag me-2">{tag}</Badge>
          ))}
        </div>
        {/* Markdown Content */}
        <ReactMarkdown
          components={{
            h2: ({ node, ...props }) => <h2 className="blog-content-heading" {...props} />,
            h3: ({ node, ...props }) => <h3 className="blog-content-heading" {...props} />,
            p: ({ node, ...props }) => <p className="blog-content-p" {...props} />,
            ul: ({ node, ...props }) => <ul className="blog-content-list" {...props} />,
            ol: ({ node, ...props }) => <ol className="blog-content-list" {...props} />,
            pre: ({ node, ...props }) => <pre className="blog-content-pre" {...props} />,
            code: ({ node, ...props }) => <code className="blog-content-code" {...props} />,
            blockquote: ({ node, ...props }) => <blockquote className="blog-content-quote" {...props} />,
          }}
        >
          {post.content}
        </ReactMarkdown>
        {/* Back Link */}
        <Link to="/about" className="btn btn-outline-primary mt-5">
          ← Back to Blogs
        </Link>
      </motion.div>
    </Container>
  );
};

export default SingleBlog;
