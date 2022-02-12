import { useState } from 'react';

import { Content } from './components/Content';
import { SideBar } from './components/Sidebar';

import './styles/global.scss';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar 
        selectedGenreId ={selectedGenreId}
        handleClickButton ={handleClickButton}
      />

      <Content 
        selectedGenreId = {selectedGenreId}
      />
      
    </div>
  )
}