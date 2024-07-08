import React from 'react';
import { Paper } from './types/types';
import { MasonryGridCard } from './MasonryGridCard';

interface MasonryGridProps {
  papers: Paper[];
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ papers }) => {
    return (
      <div className="masonry-grid">
        {papers.map((paper) => (
          <MasonryGridCard key={paper.paper_id} paper={paper} />
        ))}
      </div>
    );
  };

export default MasonryGrid;