// src/components/BlogCard.jsx

import React, { Component } from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // Importing the right arrow icon
import './BlogCard.css';

class BlogCard extends Component {
  render() {
    const { post } = this.props;
    const words = post.content.split(' ').length;
    const estimateReadTime = Math.ceil(words / 200);

    return (
      <Card className="blog-card shadow-sm h-100">
        <Card.Body className="d-flex flex-column">
          <Card.Title className="mb-2">{post.title}</Card.Title>
          <Card.Subtitle className="blog-card-subtitle mb-3">
            {new Date(post.date).toLocaleDateString()} • {estimateReadTime} min read
          </Card.Subtitle>

          <div className="mb-3">
            {post.tags.map((tag, i) => (
              <Badge className="blog-card-badge" key={i}>{tag}</Badge>
            ))}
          </div>

          <Card.Text className="flex-grow-1">{post.excerpt}</Card.Text>

          <Button
            as={Link}
            to={`/blog/${post.slug}`}
            variant="primary"
            size="sm"
            className="mt-3 align-self-start d-flex align-items-center"
          >
            Read More
            <FaArrowRight className="ms-2" />
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default BlogCard;
