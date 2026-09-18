# Shared Emergency Reporting

1. Create a Supabase project.
2. Run `supabase-schema.sql` in the Supabase SQL Editor.
3. Open Project Settings > API.
4. Put the Project URL and anon public key in `supabase-config.js`.
5. Deploy both HTML pages together.

The anon key is suitable for browser use. Never expose a Supabase service-role key. For production, add staff authentication and restrict incident updates to authenticated security users.
