import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../store/actions';
import data from '../data';

const CategorySelection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const dispatch = useDispatch();
  
  const categories = Object.keys(data);

  const filteredCategories = categories.filter((category: string) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Wyszukiwanie kategorii..."
      />
      <ul>
        {filteredCategories.map((category: string) => (
          <li key={category} onClick={() => dispatch(selectCategory(category))}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelection;