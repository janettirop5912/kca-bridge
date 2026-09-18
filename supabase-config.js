const KCA_SUPABASE_URL = '';
const KCA_SUPABASE_ANON_KEY = '';

window.kcaCloud = {
  enabled: Boolean(KCA_SUPABASE_URL && KCA_SUPABASE_ANON_KEY),
  client: null,
  async init() {
    if (!this.enabled) return false;
    if (!window.supabase) throw new Error('Supabase library did not load.');
    this.client = window.supabase.createClient(KCA_SUPABASE_URL, KCA_SUPABASE_ANON_KEY);
    return true;
  },
  async list() {
    if (!this.enabled) return [];
    const { data, error } = await this.client.from('kca_incidents').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return data.map(item => ({
      id: item.id,
      type: item.type,
      location: item.location,
      desc: item.description,
      name: item.reporter_name,
      phone: item.phone,
      sos: item.is_sos,
      status: item.status,
      time: new Date(item.created_at).toLocaleTimeString()
    }));
  },
  async create(incident) {
    if (!this.enabled) return;
    const { error } = await this.client.from('kca_incidents').insert(incident);
    if (error) throw error;
  },
  async update(id, changes) {
    if (!this.enabled) return;
    const { error } = await this.client.from('kca_incidents').update(changes).eq('id', id);
    if (error) throw error;
  }
};
