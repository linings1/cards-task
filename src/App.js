import { useEffect, useState } from 'react';
import './App.css';
import GreetCard from './components/card';
import { getCards } from './api/getCards';
import SelectGeneralComponent from './components/selectGenerelComponent';
import { Grid } from '@mui/material';
import { categories, sortBy } from './data/categories';

const CATEGORIES = "Category";
const SORT = "Sort";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards(setCards);
  }, []);

  return (
    <Grid>
      <Grid className='general-select'>
        <SelectGeneralComponent data={categories} selectName={CATEGORIES} />
        <SelectGeneralComponent data={sortBy} selectName={SORT} />
      </Grid>
      <Grid className="cards-wrapper">
        {cards && cards.map((card) => {
          return <GreetCard card={card} />
        })}
      </Grid>
    </Grid>
  );
}

export default App;

