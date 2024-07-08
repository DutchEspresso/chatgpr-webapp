import React, { useState } from 'react';
import { Paper } from './types/types';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Dialog, ScrollArea, Separator } from '@radix-ui/themes';

interface MasonryGridCardProps {
  paper: Paper;
}

export const MasonryGridCard: React.FC<MasonryGridCardProps> = ({ paper }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Preprocess the insights to add line breaks before bullet points
  const preprocessedInsights = paper.insights.replace(/•/g, '\n•');

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={openModal}>
        <div className="p-4">
          <p className="text-gray-800 text-xl font-bold mb-2">{paper.title}</p>
          <p className="text-gray-600 mb-2">{paper.author}</p>
          <p className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#00baf4] to-[#8400eb] font-medium mb-8">{paper.year}</p>
          <p className="text-gray-700">
            <Markdown remarkPlugins={[remarkGfm]}>
              {paper.tldr || paper.insights.split("IDEAS:")[0].trim()}
            </Markdown>
          </p>
        </div>
      </div>

      <Dialog.Root open={isModalOpen} onOpenChange={(open) => !open && closeModal()}>
        <Dialog.Content  style={{maxHeight: 720, maxWidth: 900}} className="bg-gray-900 fixed inset-0 flex items-center justify-center">
          <div className ="bg-gray-900 text-white p-6 rounded-lg shadow-xl w-full h-[80vh] flex">
            {/* Left side */}
            <div className="w-2/5 pr-6 flex flex-col justify-between">
            <div>
                <h2 className="text-3xl font-bold mb-4">{paper.title}</h2>
                <p className="text-xl mb-2">{paper.author}</p>
                <p className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#00baf4] to-[#8400eb] font-medium mb-8">{paper.year}</p>
                {paper.url && (
                  <a 
                    href={paper.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Full Text Academic Paper
                  </a>
                )}
              </div>
              <Dialog.Close>
                <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
                  Close
                </button>
              </Dialog.Close>
            </div>

            {/* Divider */}
            <Separator orientation="vertical" className="mx-4" />

            {/* Right side */}
            <div className="w-3/5 pl-6">
              <ScrollArea className="h-full">
                <div className="pr-4">
                  <h3 className="text-2xl font-semibold mb-4">Key Findings</h3>
                  <Markdown 
                    remarkPlugins={[remarkGfm]}>
                    {preprocessedInsights}
                  </Markdown>
                </div>
              </ScrollArea>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};