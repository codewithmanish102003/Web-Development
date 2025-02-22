"use client"
import { useParams } from 'next/navigation';

export default function BlogPage() {
  const { slug } = useParams();

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>This is a dynamic blog page for: {slug}</p>
    </div>
  );
}