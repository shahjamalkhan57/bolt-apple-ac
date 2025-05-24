/*
  # Create SEO Blogs Table

  1. New Tables
    - `seo_blogs`
      - `id` (uuid, primary key)
      - `title` (text)
      - `text` (text)
      - `created_at` (timestamp)

  2. Security
    - RLS is disabled for this table
*/

CREATE TABLE IF NOT EXISTS seo_blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  text text NOT NULL,
  created_at timestamptz DEFAULT now()
);