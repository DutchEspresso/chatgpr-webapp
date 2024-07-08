import React, { useEffect, useState } from 'react';
import { supabase_client } from '../supabaseClient';
import { Paper } from '../components/types/types';
import MasonryGrid from '../components/MasonryGrid';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

const CollectionSources: React.FC = () => {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPapers();
  }, []);

  const fetchPapers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase_client
        .from('papers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPapers(data as Paper[]);
    } catch (error) {
      setError('Failed to fetch papers');
      console.error('Error fetching papers:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
  <Theme>
    
    <div className="w-full min-h-screen bg-gray-300 overflow-hidden leading-normal tracking-normal text-center text-lg text-white font-inter">
    <div className="w-full min-h-screen bg-gray-300 overflow-hidden leading-normal tracking-normal text-center text-lg text-white font-inter">
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <nav className="flex justify-between items-center">
          <a className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00baf4] to-[#8400eb]">
            ChatGPR
          </a>
          <div className="space-x-6">
            <a href='/InputResearchTopic' className="font-medium text-gray-100 hover:text-white transition-colors">Search</a>
            <a href="/CollectionSources" className="font-medium text-white">Collection</a>
          </div>
        </nav>
      </header>

      <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#00baf4] to-[#8400eb] font-bold mb-8">
        Collection
      </div>
      <h3 className="text-4xl font-bold mb-4">
          Your Database of Relevant Sources
      </h3>
      <p className="mb-8 max-w-2xl mx-auto">
          This is your collection of relevant sources. Click on a title to learn more.
      </p>
      
      <MasonryGrid papers={papers} />
      </div>
    </div>
    </div>
    </Theme>
  );
};

export default CollectionSources;
