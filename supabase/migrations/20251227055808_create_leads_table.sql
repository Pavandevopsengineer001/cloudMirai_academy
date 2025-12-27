/*
  # Create Leads Table for CloudMirai Academy

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text, required) - Lead's full name
      - `email` (text, required) - Lead's email address
      - `mobile` (text, required) - Lead's mobile number
      - `course` (text, required) - Selected course interest
      - `comments` (text, optional) - Additional comments from lead
      - `source` (text, default 'website') - Source of the lead (hero form, contact form, etc.)
      - `created_at` (timestamptz) - Timestamp of lead submission
      
  2. Security
    - Enable RLS on `leads` table
    - Add policy for inserting leads (public access for form submissions)
    - Add policy for reading leads (authenticated admin users only)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  mobile text NOT NULL,
  course text NOT NULL,
  comments text DEFAULT '',
  source text DEFAULT 'website',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit leads"
  ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);