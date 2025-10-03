/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Full name of the person submitting
      - `email` (text) - Email address for contact
      - `phone` (text) - Phone number
      - `company` (text, nullable) - Company name if applicable
      - `project_type` (text) - Type of project (industrial, commercial, residential, other)
      - `message` (text) - Detailed message or inquiry
      - `created_at` (timestamptz) - Timestamp of submission

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting contact submissions (anyone can submit)
    - Add policy for viewing submissions (authenticated users only)

  3. Important Notes
    - Public can insert (submit forms)
    - Only authenticated users can view submissions
    - Automatic timestamp on creation
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  project_type text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
